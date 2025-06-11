'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PricingSection, { HostingSection } from '@/components/PricingSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function PricingPage() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqData = [
        {
            question: "Apakah biaya maintenance wajib?",
            answer: "Biaya maintenance bersifat opsional. Namun, kami merekomendasikan untuk menjaga performa dan keamanan website Anda."
        },
        {
            question: "Apa saja yang termasuk dalam biaya maintenance?",
            answer: "Biaya maintenance mencakup update konten, backup rutin, monitoring keamanan, dan dukungan teknis. Tidak termasuk penambahan fitur baru."
        },
        {
            question: "Berapa lama proses pengembangan aplikasi mobile?",
            answer: "Bronze: 2-4 minggu, Silver: 4-6 minggu, Gold: 6-10 minggu, tergantung kompleksitas dan revisi yang diminta."
        },
        {
            question: "Apakah hosting sudah termasuk dalam paket website?",
            answer: "Tidak, biaya hosting terpisah. Anda bisa melihat paket hosting kami di section \"Paket Hosting\" dengan harga mulai dari Rp 350.000 untuk 3 bulan."
        },
        {
            question: "Bagaimana proses revisi dilakukan?",
            answer: "Revisi dilakukan melalui konsultasi langsung dengan tim kami. Setiap paket memiliki batas revisi yang berbeda sesuai dengan ketentuan."
        },
        {
            question: "Apakah tersedia layanan konsultasi gratis?",
            answer: "Ya! Kami menyediakan konsultasi gratis untuk membantu Anda memilih paket yang sesuai dengan kebutuhan bisnis Anda."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    }; return (
        <>
            <Header />

            {/* Main Content */}            <main className="pt-20">                {/* Hero Section */}
                <section className="py-12 md:py-16 bg-gradient-to-br from-[#061E44] via-[#0B2A52] to-[#0F3460] relative overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF7A00]/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Image */}
                            <div className="order-2 lg:order-1">                                <div className="relative">
                                {/* Main Image Container */}
                                <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src="/images/pricing/pricing.png"
                                        alt="Paket Harga Illustration"
                                        className="w-full h-auto rounded-2xl max-w-sm mx-auto"
                                    />
                                    {/* Floating Elements */}
                                    <div className="absolute -top-4 -right-4 bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                        💰 Best Value
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 bg-[#061E44] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                        ⚡ Fast Setup
                                    </div>
                                </div>

                                {/* Background Accent */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/20 to-[#061E44]/20 rounded-3xl transform rotate-1 -z-10"></div>
                            </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="order-1 lg:order-2 text-center lg:text-left">                                <div className="mb-4">
                                <span className="inline-flex items-center px-4 py-2 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full text-sm font-medium mb-3">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                    Pricing Plans
                                </span>                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                    Paket
                                    <span className="text-[#FF7A00] relative">
                                        Harga
                                        <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 120 8" fill="none">
                                            <path d="M2 6C20 2 40 2 58 4C76 6 96 6 118 4" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                </h1>                                    <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6">
                                    Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
                                    <span className="text-[#FF7A00] font-semibold"> Semua paket sudah termasuk konsultasi gratis</span> dan support penuh.
                                </p>
                            </div>

                                {/* Feature Highlights */}                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/20">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div><span className="text-sm font-medium text-white">Konsultasi Gratis</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/20">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-white">Support Penuh</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/20">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-white">Setup Cepat</span>
                                    </div>
                                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/20">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-white">Kualitas Terjamin</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a
                                        href="#pricing-packages"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        Lihat Paket
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </a>                                    <a
                                        href="https://wa.me/6282195965483?text=Halo!%20Saya%20ingin%20konsultasi%20gratis%20mengenai%20paket%20yang%20sesuai%20untuk%20bisnis%20saya."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-white text-[#061E44] hover:bg-gray-100 hover:text-[#061E44] font-semibold rounded-xl transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                                        </svg>
                                        Konsultasi Gratis
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* Use existing PricingSection component */}
                <PricingSection />

                {/* Hosting Section */}
                <HostingSection />

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#061E44] mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Pertanyaan yang sering diajukan tentang paket dan layanan kami
                            </p>
                        </div>                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <h3 className="font-semibold text-[#061E44] pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="px-6 pb-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <ScrollToTop />
        </>
    );
}
