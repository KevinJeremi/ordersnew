import { NextRequest, NextResponse } from 'next/server';

// Simple menu responses
const menuResponses = {
    '1': `💰 **HARGA LAYANAN ORDERS**

🌐 **PAKET WEBSITE:**
• Starter: Mulai Rp 300.000 (Maintenance: Rp 100k/bulan)
• Company: Mulai Rp 750.000 (Maintenance: Rp 200k/bulan)  
• Business: Mulai Rp 1.700.000 (Maintenance: Rp 500k/bulan)
• Ultimate: Mulai Rp 3.000.000 (Maintenance: Rp 1jt/bulan)

📱 **APLIKASI MOBILE:**
• Bronze: Rp 2.000.000 (Maks 5 Screen)
• Silver: Rp 3.000.000 (Maks 10 Screen)
• Gold: Rp 5.000.000 (Maks 30 Screen)

🎨 **DESIGN & KONTEN:**
• UI/UX Design: Mulai Rp 200.000
• Logo Design: Mulai Rp 250.000
• Poster Design: Mulai Rp 100.000
• Social Media Content: Mulai Rp 50.000
• Undangan Digital: Mulai Rp 150.000

� **PAKET MAHASISWA (DISKON KHUSUS):**
• Website Portfolio: Mulai Rp 200.000
• Aplikasi Skripsi: Mulai Rp 800.000
• Design Presentasi: Mulai Rp 75.000
• Konsultasi Project: Gratis konsultasi pertama

🤝 **KERJA SAMA BISNIS:**
• Partnership Program: Konsultasi gratis
• Konsultasi Strategi: Mulai Rp 500.000
• Kolaborasi Project: Harga negotiable

�🌐 **HOSTING:**
• 3 Bulan: Rp 350.000
• 6 Bulan: Rp 500.000
• 1 Tahun: Rp 750.000

Mau tanya lagi? Ketik 1, 2, 3, atau 4.`,

    '2': `🛠️ **LAYANAN ORDERS**

🌐 **Pembuatan Website**
   - Company Profile
   - E-commerce
   - Landing Page
   - Portfolio & Blog

📱 **Pembuatan Aplikasi**
   - Mobile App (Flutter/React Native)
   - Web App (Fullstack)
   - Integrasi API & Database

⚡ **Less Coding**
   - Pemrograman cepat & efisien
   - Pendekatan low-code
   - Editing & maintenance

🎨 **Desain Digital**
   - UI/UX Design
   - Logo & Branding
   - Poster & Social Media Content
   - Undangan Digital (Wedding, Birthday, Event)
   - Prototype & Wireframe

🤝 **Kerja Sama Bisnis**
   - Partnership digital
   - Konsultasi bisnis digital
   - Strategi pemasaran online
   - Kolaborasi project

🎓 **Solusi Digital Khusus Mahasiswa**
   - Website portfolio mahasiswa
   - Aplikasi skripsi/tugas akhir
   - Design presentasi akademik
   - Konsultasi project kampus

� **Foto & Video**
   - Photo Editing profesional
   - Video Editing & Content
   - Produk photography

Semua layanan include: Konsultasi gratis, revisi sesuai paket, maintenance, dan dukungan teknis.

Mau tanya lagi? Ketik 1, 2, 3, atau 4.`,

    '3': `📞 **KONTAK ORDERS**

📱 **WhatsApp**: +62 821-9596-5483
📧 **Email**: info@orders.id
🌐 **Website**: www.orders.id

📍 **Alamat**: 
Jl. Digital Solutions No. 123
Jakarta, Indonesia

🕒 **Jam Operasional**:
Senin - Jumat: 09:00 - 17:00 WIB
Sabtu: 09:00 - 15:00 WIB
Minggu: Libur

📱 **Social Media**:
- Instagram: @teamorders25
- Facebook: ORDERS Digital Solutions

💬 **Konsultasi GRATIS** tersedia!
Hubungi kami sekarang untuk diskusi project Anda.

Mau tanya lagi? Ketik 1, 2, 3, atau 4.`,

    '4': `❓ **FAQ - PERTANYAAN UMUM**

🔧 **Q: Apakah biaya maintenance wajib?**
A: Maintenance bersifat opsional, tapi sangat direkomendasikan untuk performa & keamanan website.

📋 **Q: Apa saja yang termasuk maintenance?**
A: Update konten, backup rutin, monitoring keamanan, dukungan teknis. (Tidak termasuk fitur baru)

⏱️ **Q: Berapa lama pengembangan app mobile?**
A: Bronze: 2-4 minggu, Silver: 4-6 minggu, Gold: 6-10 minggu.

🌐 **Q: Hosting sudah termasuk paket website?**
A: Tidak, hosting terpisah. Lihat paket hosting mulai Rp 350k/3bulan.

✏️ **Q: Bagaimana proses revisi?**
A: Konsultasi langsung dengan tim. Setiap paket punya batas revisi berbeda.

💬 **Q: Ada konsultasi gratis?**
A: Ya! Konsultasi gratis untuk membantu pilih paket sesuai kebutuhan bisnis.

💌 **Q: Undangan digital tersedia format apa saja?**
A: Format: PDF, JPG, PNG, HTML (interactive), Video undangan. Cocok untuk wedding, birthday, event corporate.

🎨 **Q: Bisakah custom design undangan sesuai tema?**
A: Tentu! Kami bisa custom sesuai tema, warna, dan konsep acara Anda.

🎓 **Q: Apa itu Solusi Digital Khusus Mahasiswa?**
A: Layanan khusus untuk mahasiswa dengan harga terjangkau: website portfolio, aplikasi skripsi, design presentasi, dan konsultasi project kampus.

🤝 **Q: Bagaimana program Kerja Sama Bisnis?**
A: Partnership digital, konsultasi strategi online, kolaborasi project, dan kemitraan jangka panjang dengan berbagai benefit.

Mau tanya lagi? Ketik 1, 2, 3, atau 4.`
};

const welcomeMessage = `Halo! Selamat datang di Orders Digital Solutions! 👋

Mau tanya apa nih? Pilih menu di bawah ini:

1️⃣ Harga & Paket
2️⃣ Layanan Kami  
3️⃣ Kontak & Info
4️⃣ FAQ (Pertanyaan Umum)

Ketik angka 1, 2, 3, atau 4 untuk memilih menu.`;

const invalidMessage = `Maaf, pilih angka yang valid ya! 😊

1️⃣ Harga & Paket
2️⃣ Layanan Kami
3️⃣ Kontak & Info  
4️⃣ FAQ (Pertanyaan Umum)

Ketik angka 1, 2, 3, atau 4.`;

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        const cleanMessage = message.trim();
        let response: string;    // Check if it's a menu selection
        if (menuResponses[cleanMessage as keyof typeof menuResponses]) {
            response = menuResponses[cleanMessage as keyof typeof menuResponses];
        } else if (cleanMessage.toLowerCase() === 'halo' ||
            cleanMessage.toLowerCase() === 'hai' ||
            cleanMessage.toLowerCase() === 'hello' ||
            cleanMessage.toLowerCase() === 'hi' ||
            cleanMessage.toLowerCase() === 'menu') {
            response = welcomeMessage;        } else if (cleanMessage.toLowerCase().includes('harga') ||
            cleanMessage.toLowerCase().includes('price') ||
            cleanMessage.toLowerCase().includes('paket') ||
            cleanMessage.toLowerCase().includes('biaya') ||
            cleanMessage.toLowerCase().includes('cost') ||
            cleanMessage.toLowerCase().includes('tarif')) {
            response = menuResponses['1'];} else if (cleanMessage.toLowerCase().includes('layanan') ||
            cleanMessage.toLowerCase().includes('service') ||
            cleanMessage.toLowerCase().includes('mahasiswa') ||
            cleanMessage.toLowerCase().includes('student') ||
            cleanMessage.toLowerCase().includes('skripsi') ||
            cleanMessage.toLowerCase().includes('kerja sama') ||
            cleanMessage.toLowerCase().includes('partnership') ||
            cleanMessage.toLowerCase().includes('bisnis')) {
            response = menuResponses['2'];
        } else if (cleanMessage.toLowerCase().includes('kontak') ||
            cleanMessage.toLowerCase().includes('contact') ||
            cleanMessage.toLowerCase().includes('info')) {
            response = menuResponses['3'];
        } else if (cleanMessage.toLowerCase().includes('faq') ||
            cleanMessage.toLowerCase().includes('pertanyaan') ||
            cleanMessage.toLowerCase().includes('tanya')) {
            response = menuResponses['4'];
        } else {
            response = invalidMessage;
        }

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

        return NextResponse.json({
            message: response,
            model: 'orders-menu-bot',
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            {
                error: 'Internal server error',
                message: 'Maaf, terjadi kesalahan. Coba lagi ya! 😊'
            },
            { status: 500 }
        );
    }
}

// Handle GET requests (optional)
export async function GET() {
    return NextResponse.json({
        message: 'Orders Chat API is running',
        endpoints: {
            POST: '/api/chat - Send a message to the chatbot'
        }
    });
}
