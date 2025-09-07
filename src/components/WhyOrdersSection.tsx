'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Definisikan tipe untuk fitur agar lebih aman
interface Feature {
    title: string;
    description: string;
    image: string;
    icon: string; // Emoji atau path ke ikon SVG
}

// Data fitur yang akan ditampilkan dengan gambar placeholder
const features: Feature[] = [
    {
        title: "Investasi Cerdas",
        description: "Solusi digital premium yang dirancang untuk memberikan nilai maksimal dengan harga yang kompetitif.",
        image: "https://placehold.co/600x400/f97316/FFFFFF?text=Investasi+Cerdas",
        icon: "💰"
    },
    {
        title: "Kualitas & Kecepatan",
        description: "Proses pengembangan kami yang efisien memastikan produk berkualitas tinggi diluncurkan tepat waktu.",
        image: "https://placehold.co/600x400/f97316/FFFFFF?text=Kualitas+&+Kecepatan",
        icon: "⚡"
    },
    {
        title: "Dukungan Penuh",
        description: "Tim ahli kami siap menjadi partner digital Anda, memberikan dukungan dan konsultasi berkelanjutan.",
        image: "https://placehold.co/600x400/f97316/FFFFFF?text=Dukungan+Penuh",
        icon: "🕐"
    },
    {
        title: "Solusi Tepat Sasaran",
        description: "Setiap solusi kami rancang secara eksklusif untuk menjawab tantangan dan kebutuhan unik bisnis Anda.",
        image: "https://placehold.co/600x400/f97316/FFFFFF?text=Solusi+Tepat+Sasaran",
        icon: "🎯"
    },
    {
        title: "Inovasi Terdepan",
        description: "Dengan teknologi terkini, kami memastikan solusi Anda tidak hanya modern tetapi juga relevan di masa depan.",
        image: "https://placehold.co/600x400/f97316/FFFFFF?text=Inovasi+Terdepan",
        icon: "🚀"
    },
    {
        title: "Kolaborasi Transparan",
        description: "Kami menjaga komunikasi yang terbuka dan memberikan update progres secara real-time di setiap fase.",
        image: "https://placehold.co/600x400/f97316/FFFFFF?text=Kolaborasi+Transparan",
        icon: "👁️"
    }
];

export default function WhyOrdersSection() {
    // State untuk melacak fitur yang sedang aktif/hover
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="kenapa-orders" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Judul dan Subjudul Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Keunggulan ORDERS
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        Kami bukan sekadar vendor, kami adalah partner digital Anda. Temukan alasan mengapa ratusan klien memercayai kami untuk mewujudkan visi digital mereka.
                    </p>
                </div>

                {/* Layout Utama: Kolom Kiri (Fitur) dan Kolom Kanan (Gambar) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    
                    {/* Kolom Kiri: Daftar Fitur */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border ${ 
                                    activeIndex === index 
                                    ? 'bg-white border-orange-500 shadow-orange-100 shadow-lg' 
                                    : 'bg-white border-gray-200 hover:shadow-md'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`text-2xl transition-transform duration-300 ${activeIndex === index ? 'scale-110' : ''}`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Kolom Kanan: Tampilan Gambar dengan Animasi */}
                    <div className="relative h-80 lg:h-full min-h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center p-8 overflow-hidden border border-gray-200">
                         <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex} // Key unik untuk memicu animasi saat gambar berubah
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={features[activeIndex].image}
                                    alt={features[activeIndex].title}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Call to Action di Bawah */}
                <div className="text-center mt-16">
                     <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-sm">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                            Siap Wujudkan Visi Digital Anda?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Diskusikan ide Anda dengan tim kami. Dapatkan estimasi dan rencana proyek, gratis tanpa komitmen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-600/40 transition-all duration-300 transform hover:scale-105"
                            >
                                Hubungi Kami Sekarang
                            </a>
                            <a
                                href="/portfolio"
                                className="px-8 py-3 bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 font-semibold rounded-lg transition-all duration-300"
                            >
                                Lihat Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
