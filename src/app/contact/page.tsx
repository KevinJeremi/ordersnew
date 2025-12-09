'use client';

import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <>
            <Header />            {/* Main Content */}
            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF7A00]/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#061E44]/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center">
                            <span className="inline-flex items-center px-4 py-2 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full text-sm font-medium mb-3">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Us
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061E44] mb-4 leading-tight">
                                Hubungi
                                <span className="text-[#FF7A00] relative">
                                    Kami
                                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 120 8" fill="none">
                                        <path d="M2 6C20 2 40 2 58 4C76 6 96 6 118 4" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                Siap memulai proyek Anda? Mari berdiskusi dan wujudkan ide Anda bersama kami.
                                <span className="text-[#FF7A00] font-semibold"> Tim kami siap membantu</span> mewujudkan visi digital Anda.
                            </p>
                        </div>
                    </div>
                </section>{/* Contact Section */}
                <ContactSection />
            </main>            <Footer />
        </>
    );
}
