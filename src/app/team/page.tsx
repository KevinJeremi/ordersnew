'use client';

import Header from '@/components/Header';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';


export default function TeamPage() {
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Our Team
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061E44] mb-4 leading-tight">
                                Tim
                                <span className="text-[#FF7A00] relative">
                                    Kami
                                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 120 8" fill="none">
                                        <path d="M2 6C20 2 40 2 58 4C76 6 96 6 118 4" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                Berkenalan dengan tim profesional kami yang berpengalaman.
                                <span className="text-[#FF7A00] font-semibold"> Setiap anggota tim berkomitmen</span> memberikan hasil terbaik untuk proyek Anda.
                            </p>
                        </div>
                    </div>
                </section>{/* Team Section */}
                <TeamSection />
            </main>

            <Footer />

        </>
    );
}
