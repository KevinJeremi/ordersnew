'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

interface ChatBotProps {
    className?: string;
    useCustomPosition?: boolean;
    onClose?: () => void;
}

export default function ChatBot({ className = '', useCustomPosition = false, onClose }: ChatBotProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `Halo! Selamat datang di Orders Digital Solutions! 👋

Mau tanya apa nih? Pilih menu di bawah ini:

1️⃣ Harga & Paket
2️⃣ Layanan Kami  
3️⃣ Kontak & Info
4️⃣ FAQ (Pertanyaan Umum)

Ketik angka 1, 2, 3, atau 4 untuk memilih menu.`,
            isUser: false,
            timestamp: new Date()
        }
    ]);    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);    const resetChat = () => {
        setIsResetting(true);
        
        // Show reset message temporarily
        const resetMessage = {
            id: 'reset-msg',
            text: '🔄 Chat telah direset! Memulai percakapan baru...',
            isUser: false,
            timestamp: new Date()
        };
        
        setMessages([resetMessage]);
        
        // After 1 second, show welcome message
        setTimeout(() => {
            setMessages([
                {
                    id: '1',
                    text: `Halo! Selamat datang di Orders Digital Solutions! 👋

Mau tanya apa nih? Pilih menu di bawah ini:

1️⃣ Harga & Paket
2️⃣ Layanan Kami  
3️⃣ Kontak & Info
4️⃣ FAQ (Pertanyaan Umum)

Ketik angka 1, 2, 3, atau 4 untuk memilih menu.`,
                    isUser: false,
                    timestamp: new Date()
                }
            ]);
            setIsResetting(false);
        }, 1000);
        
        setInputValue('');
        setIsLoading(false);
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Option 1: Use local logic (current - faster)
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(inputValue),
                isUser: false,
                timestamp: new Date()
            };
            
            // Simulate delay for better UX
            setTimeout(() => {
                setMessages(prev => [...prev, botResponse]);
                setIsLoading(false);
            }, 800);

            // Option 2: Use API call (uncomment if you want to use API instead)
            /*
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: inputValue }),
            });

            if (response.ok) {
                const data = await response.json();
                const botResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: data.message,
                    isUser: false,
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, botResponse]);
            } else {
                throw new Error('API request failed');
            }
            setIsLoading(false);
            */
        } catch (error) {
            console.error('Chat error:', error);
            const errorResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: 'Maaf, terjadi kesalahan. Silakan coba lagi! 😊',
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorResponse]);
            setIsLoading(false);
        }
    };const getBotResponse = (userInput: string): string => {
        const cleanMessage = userInput.trim();
        
        // Menu responses - sama dengan route.ts
        const menuResponses: { [key: string]: string } = {
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

🎓 **PAKET MAHASISWA (DISKON KHUSUS):**
• Website Portfolio: Mulai Rp 200.000
• Aplikasi Skripsi: Mulai Rp 800.000
• Design Presentasi: Mulai Rp 75.000
• Konsultasi Project: Gratis konsultasi pertama

🤝 **KERJA SAMA BISNIS:**
• Partnership Program: Konsultasi gratis
• Konsultasi Strategi: Mulai Rp 500.000
• Kolaborasi Project: Harga negotiable

🌐 **HOSTING:**
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

📸 **Foto & Video**
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

        // Check if it's a menu selection
        if (menuResponses[cleanMessage]) {
            return menuResponses[cleanMessage];
        } else if (cleanMessage.toLowerCase() === 'halo' ||
            cleanMessage.toLowerCase() === 'hai' ||
            cleanMessage.toLowerCase() === 'hello' ||
            cleanMessage.toLowerCase() === 'hi' ||
            cleanMessage.toLowerCase() === 'menu') {
            return welcomeMessage;
        } else if (cleanMessage.toLowerCase().includes('harga') ||
            cleanMessage.toLowerCase().includes('price') ||
            cleanMessage.toLowerCase().includes('paket') ||
            cleanMessage.toLowerCase().includes('biaya') ||
            cleanMessage.toLowerCase().includes('cost') ||
            cleanMessage.toLowerCase().includes('tarif')) {
            return menuResponses['1'];
        } else if (cleanMessage.toLowerCase().includes('layanan') ||
            cleanMessage.toLowerCase().includes('service') ||
            cleanMessage.toLowerCase().includes('mahasiswa') ||
            cleanMessage.toLowerCase().includes('student') ||
            cleanMessage.toLowerCase().includes('skripsi') ||
            cleanMessage.toLowerCase().includes('kerja sama') ||
            cleanMessage.toLowerCase().includes('partnership') ||
            cleanMessage.toLowerCase().includes('bisnis')) {
            return menuResponses['2'];
        } else if (cleanMessage.toLowerCase().includes('kontak') ||
            cleanMessage.toLowerCase().includes('contact') ||
            cleanMessage.toLowerCase().includes('info')) {
            return menuResponses['3'];
        } else if (cleanMessage.toLowerCase().includes('faq') ||
            cleanMessage.toLowerCase().includes('pertanyaan') ||
            cleanMessage.toLowerCase().includes('tanya')) {
            return menuResponses['4'];
        } else {
            return invalidMessage;        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };    return (
        <div className={`${useCustomPosition ? 'relative' : 'fixed bottom-4 right-4 z-50'} ${
            useCustomPosition 
                ? 'w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[400px] sm:h-[480px] md:h-[550px]' 
                : 'w-[calc(100vw-3rem)] max-w-64 h-[calc(100vh-12rem)] max-h-72 sm:w-72 sm:h-80'
        } bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden backdrop-blur-sm`}>            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF7A00] to-orange-500 text-white p-2 sm:p-3 md:p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-xs sm:text-sm md:text-base truncate">ORDERS Assistant</h3>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-xs opacity-90 truncate">Online - Siap membantu!</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-1 flex-shrink-0">                    <button
                        onClick={resetChat}
                        className={`text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5 transition-all duration-200 ${isResetting ? 'animate-spin' : ''}`}
                        title="Reset Chat"
                        disabled={isResetting}
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            if (onClose) {
                                onClose();
                            }
                        }}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5 transition-all duration-200"
                        title="Close Chat"
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-2 sm:space-y-3 bg-gradient-to-b from-gray-50 to-white scrollbar-hide">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex ${message.isUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-1 sm:space-x-2 max-w-[95%] sm:max-w-[90%]`}>
                            {/* Avatar */}
                            <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                                message.isUser 
                                    ? 'bg-[#FF7A00] text-white' 
                                    : 'bg-gray-200 text-gray-600'
                            }`}>                                {message.isUser ? (
                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                ) : (
                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                )}
                            </div>
                            
                            {/* Message Bubble */}
                            <div
                                className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs sm:text-sm shadow-sm ${
                                    message.isUser
                                        ? 'bg-[#FF7A00] text-white rounded-br-md'
                                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                                }`}
                            >
                                <div className="whitespace-pre-wrap break-words leading-relaxed">
                                    {message.text}
                                </div>
                                <div className={`text-[9px] sm:text-xs mt-1 ${
                                    message.isUser ? 'text-orange-100' : 'text-gray-400'
                                }`}>
                                    {message.timestamp.toLocaleTimeString('id-ID', { 
                                        hour: '2-digit', 
                                        minute: '2-digit' 
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">                        <div className="flex items-end space-x-1 sm:space-x-2">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded-full flex items-center justify-center">
                                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div className="bg-white border border-gray-200 px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl rounded-bl-md shadow-sm">
                                <div className="flex space-x-0.5 sm:space-x-1">
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} /> {/* Scroll target */}
            </div>            {/* Input */}
            <div className="border-t border-gray-100 bg-white p-2 sm:p-3">
                {/* Quick Reply Buttons */}
                <div className="mb-2 sm:mb-3 flex flex-wrap gap-1">
                    {['1', '2', '3', '4'].map((num) => (
                        <button
                            key={num}
                            onClick={() => {
                                setInputValue(num);
                                setTimeout(handleSendMessage, 100);
                            }}
                            className="px-2 py-1 text-[9px] sm:text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors border border-gray-200 hover:border-gray-300"
                        >
                            Menu {num}
                        </button>
                    ))}
                </div>
                
                <div className="flex space-x-1 sm:space-x-2 items-end">                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ketik pesan atau pilih menu..."
                            className="w-full px-2 py-1.5 sm:px-3 sm:py-2 pr-6 sm:pr-8 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A00] transition-colors text-xs sm:text-sm bg-gray-50 focus:bg-white"
                        />
                        {inputValue && (
                            <button
                                onClick={() => setInputValue('')}
                                className="absolute right-1.5 sm:right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <button
                        onClick={resetChat}
                        className={`text-gray-500 hover:text-[#FF7A00] hover:bg-orange-50 p-1.5 sm:p-2 rounded-xl transition-all duration-200 ${isResetting ? 'animate-spin text-[#FF7A00]' : ''}`}
                        title="Reset Chat"
                        disabled={isResetting}
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        className="bg-[#FF7A00] hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
                    >                        {isLoading ? (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        ) : (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
