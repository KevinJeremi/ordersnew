'use client';

import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#061E44]/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061E44] mb-6 leading-tight">
                            Siap Wujudkan Proyek
                            <span className="text-[#FF7A00] relative">
                                Impian Anda?
                                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 120 8" fill="none">
                                    <path d="M2 6C20 2 40 2 58 4C76 6 96 6 118 4" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Dapatkan konsultasi gratis dengan tim ahli kami untuk memilih solusi terbaik sesuai kebutuhan bisnis Anda
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://wa.me/6282195965483?text=Halo!%20Saya%20ingin%20konsultasi%20gratis%20mengenai%20layanan%20yang%20sesuai%20untuk%20bisnis%20saya."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                                </svg>
                                Konsultasi Gratis
                            </a>                        <Link
                                href="/pricing"
                                className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#061E44] text-[#061E44] hover:bg-[#061E44] hover:text-white font-semibold rounded-lg transition-all duration-300"
                            >
                                Lihat Paket Harga
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="order-1 lg:order-2">                        <div className="relative">                            {/* Main Image Container */}
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500 group max-w-md mx-auto lg:max-w-lg">
                                <img
                                    src="/images/people/people.png"
                                    alt="Professional Team Collaboration"
                                    className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-700 max-w-sm mx-auto lg:max-w-md"
                                />

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                                    🚀 Let's Start!
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white text-[#061E44] px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                    💡 Free Consultation
                                </div>
                            </div>
                            {/* Background Accent */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/20 to-white/10 rounded-3xl transform rotate-1 -z-10"></div>
                            {/* Additional Decorative Elements */}
                            <div className="absolute top-10 right-10 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-16 left-8 w-4 h-4 bg-[#FF7A00]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}