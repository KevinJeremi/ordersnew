'use client';
import Link from 'next/link';
import { FaLeaf, FaArrowRight, FaRecycle, FaSolarPanel, FaWater } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function EcodigitalSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="ecodigital" className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-200/20 to-transparent rounded-full -translate-y-32 -translate-x-32"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-teal-200/20 to-transparent rounded-full translate-y-24 translate-x-24"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-400 rounded-full opacity-30"></div>
            <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-teal-400 rounded-full opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="inline-block mb-4">
                            <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white text-sm font-medium py-2 px-4 rounded-full flex items-center gap-2">
                                <FaLeaf className="text-sm" />
                                ECODIGITAL INITIATIVE
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Inisiatif <span className="text-green-600">Ecodigital</span> Kami
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Kami berkomitmen untuk mengurangi jejak karbon digital. Temukan bagaimana kami mengintegrasikan teknologi ramah lingkungan dalam layanan kami.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-green-100 text-center transform transition-all hover:scale-105 hover:bg-white">
                                <FaRecycle className="text-green-600 text-2xl mx-auto mb-2" />
                                <span className="text-sm font-medium text-gray-700">Zero Waste</span>
                            </div>
                            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-teal-100 text-center transform transition-all hover:scale-105 hover:bg-white">
                                <FaSolarPanel className="text-teal-600 text-2xl mx-auto mb-2" />
                                <span className="text-sm font-medium text-gray-700">Green Energy</span>
                            </div>
                            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 text-center transform transition-all hover:scale-105 hover:bg-white">
                                <FaWater className="text-emerald-600 text-2xl mx-auto mb-2" />
                                <span className="text-sm font-medium text-gray-700">Sustainable</span>
                            </div>
                        </div>

                        <Link
                            href="/ecodigital"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                        >
                            Pelajari Lebih Lanjut
                            <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Column - Visual */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            {/* Main Illustration */}
                            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                                <img
                                    src="https://placehold.co/500x400/10B981/FFFFFF?text=Ecodigital+Illustration"
                                    alt="Ecodigital Initiative Illustration"
                                    className="w-full h-auto rounded-2xl"
                                />
                                
                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                                    🌱 Eco-Friendly
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                    💚 Sustainable Tech
                                </div>
                            </div>

                            {/* Background Decorative Circle */}
                            <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-3xl transform rotate-3 -z-10"></div>
                            
                            {/* Additional Decorative Elements */}
                            <div className="absolute top-8 right-8 w-8 h-8 bg-green-400/30 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-12 left-12 w-6 h-6 bg-teal-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
