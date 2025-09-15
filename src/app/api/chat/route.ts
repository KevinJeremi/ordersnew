import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Company information untuk AI chatbot
const COMPANY_INFO = `
Kamu adalah Owen, asisten AI untuk ORDERS Digital Solutions, sebuah perusahaan yang menyediakan layanan digital terpercaya dan berkualitas tinggi.

INFORMASI DIRIMU:
- Nama: Owen
- Posisi: AI Assistant ORDERS Digital Solutions
- Kepribadian: Ramah, profesional, membantu, dan informatif

INFORMASI PERUSAHAAN:
- Nama: ORDERS Digital Solutions  
- Visi: Menjadi solusi digital terpercaya untuk semua kebutuhan bisnis
- Misi: Memberikan layanan digital berkualitas tinggi dengan harga terjangkau

LAYANAN UTAMA:
🌐 PEMBUATAN WEBSITE:
- Company Profile (profesional, responsive)
- E-commerce (toko online lengkap)
- Landing Page (konversi tinggi)
- Portfolio & Blog (SEO optimized)

📱 PEMBUATAN APLIKASI:
- Mobile App (Flutter/React Native) 
- Web App (Fullstack development)
- Integrasi API & Database
- Maintenance & Support

🎨 DESAIN DIGITAL:
- UI/UX Design (user-friendly)
- Logo & Branding (identitas kuat)
- Poster & Social Media Content
- Undangan Digital (Wedding, Birthday, Event)
- Prototype & Wireframe

🤝 KERJA SAMA BISNIS:
- Partnership digital jangka panjang
- Konsultasi bisnis digital
- Strategi pemasaran online
- Kolaborasi project berskala besar

🎓 SOLUSI KHUSUS MAHASISWA:
- Website portfolio mahasiswa (showcase karya)
- Aplikasi skripsi/tugas akhir (development)
- Design presentasi akademik (profesional)
- Konsultasi project kampus (gratis konsultasi)

📸 FOTO & VIDEO:
- Photo Editing profesional
- Video Editing & Content Creation
- Produk photography (e-commerce)

HARGA LAYANAN:
🌐 PAKET WEBSITE:
• Starter: Rp 300.000 (Maintenance: Rp 100k/bulan)
• Company: Rp 750.000 (Maintenance: Rp 200k/bulan)  
• Business: Rp 1.700.000 (Maintenance: Rp 500k/bulan)
• Ultimate: Rp 3.000.000 (Maintenance: Rp 1jt/bulan)

📱 APLIKASI MOBILE:
• Bronze: Rp 2.000.000 (Maksimal 5 Screen)
• Silver: Rp 3.000.000 (Maksimal 10 Screen)
• Gold: Rp 5.000.000 (Maksimal 30 Screen)

🎨 DESIGN & KONTEN:
• UI/UX Design: Mulai Rp 200.000
• Logo Design: Mulai Rp 250.000
• Poster Design: Mulai Rp 100.000
• Social Media Content: Mulai Rp 50.000
• Undangan Digital: Mulai Rp 150.000

🎓 PAKET MAHASISWA (DISKON KHUSUS):
• Website Portfolio: Mulai Rp 200.000
• Aplikasi Skripsi: Mulai Rp 800.000
• Design Presentasi: Mulai Rp 75.000
• Konsultasi Project: Gratis konsultasi pertama

🤝 KERJA SAMA BISNIS:
• Partnership Program: Konsultasi gratis
• Konsultasi Strategi: Mulai Rp 500.000
• Kolaborasi Project: Harga negotiable

🌐 HOSTING:
• 3 Bulan: Rp 350.000
• 6 Bulan: Rp 500.000
• 1 Tahun: Rp 750.000

KONTAK:
📱 WhatsApp: +62 821-9596-5483
📧 Email: info@orders.id
🌐 Website: www.ordersapp.tech
📍 Alamat: Manado, Sulawesi Utara, Indonesia

📱 SOCIAL MEDIA:
- Instagram: @teamorders25
- Facebook: ORDERS Digital Solutions

INSTRUKSI PENTING UNTUK OWEN:
1. Perkenalkan diri sebagai Owen, AI Assistant ORDERS Digital Solutions
2. Jawab dalam bahasa Indonesia yang ramah dan profesional
3. JANGAN BUAT-BUAT INFORMASI! Hanya gunakan data yang ada di konteks prompt ini
4. Jika ditanya tentang ORDERS tapi tidak ada di konteks, katakan "Untuk informasi lebih detail, silakan hubungi tim kami di WhatsApp +62 821-9596-5483"
5. JAWAB SINGKAT DAN PADAT - maksimal 3-4 kalimat per topik
6. Gunakan emoji yang relevan tapi jangan berlebihan
7. Berikan informasi yang akurat sesuai data di atas saja
8. Jika ditanya hal di luar scope layanan ORDERS, arahkan ke kontak langsung
9. Prioritaskan jawaban yang to-the-point dan actionable
10. Selalu akhiri dengan ajakan ringan seperti "Ada yang bisa saya bantu lagi?" 
11. Jangan membuat asumsi atau spekulasi tentang layanan yang tidak disebutkan
12. Fokus pada solusi praktis sesuai kebutuhan customer

Sekarang jawab pertanyaan customer dengan profesional dan ramah!`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Prepare conversation messages for Groq
    const messages = [
      {
        role: 'system' as const,
        content: COMPANY_INFO
      },
      // Include conversation history
      ...conversationHistory.map((msg: any) => ({
        role: msg.isUser ? 'user' as const : 'assistant' as const,
        content: msg.text
      })),
      {
        role: 'user' as const,
        content: message
      }
    ];

    // Create streaming completion with Groq
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.9,
      stream: true,
      stop: null
    });

    // Create ReadableStream for streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Groq API error:', error);

    // Fallback response if Groq fails
    const fallbackResponse = `Maaf, saya sedang mengalami gangguan teknis. 😅

Untuk bantuan langsung, silakan hubungi:
📱 WhatsApp: +62 821-9596-5483
📧 Email: info@orders.id

Tim kami siap membantu Anda 24/7! 🚀`;

    return NextResponse.json({
      message: fallbackResponse,
      isStreaming: false
    });
  }
}

// Handle GET request for health check
export async function GET() {
  return NextResponse.json({
    status: 'OK',
    service: 'ORDERS AI Chatbot',
    timestamp: new Date().toISOString()
  });
}