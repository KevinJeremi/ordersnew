'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../app/styles.module.css';

export default function WhyOrdersSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const features = [        {
            title: "Harga Terjangkau",
            description: "Solusi digital berkualitas dengan harga yang ramah di kantong untuk semua kalangan bisnis",
            image: "/images/services/less.png",
            icon: "💰"
        },
        {
            title: "Kecepatan & Kualitas",
            description: "Pengembangan cepat tanpa mengorbankan kualitas, sesuai deadline yang disepakati",
            image: "/images/services/prototype.png",
            icon: "⚡"
        },
        {
            title: "Dukungan 24/7",
            description: "Tim support yang siap membantu Anda kapan saja, konsultasi gratis selamanya",
            image: "/images/services/web.png",
            icon: "🕐"
        },
        {
            title: "Solusi Kustom",
            description: "Setiap proyek disesuaikan dengan kebutuhan spesifik bisnis Anda",
            image: "/images/services/android.png",
            icon: "🎯"
        },
        {
            title: "Teknologi Terkini",
            description: "Menggunakan teknologi dan framework terbaru untuk hasil yang optimal",
            image: "/images/services/desaingrafis.png",
            icon: "🚀"
        },
        {
            title: "Proses Transparan",
            description: "Update progres real-time dan komunikasi terbuka di setiap tahap pengembangan",            image: "/images/services/mood_board.png",
            icon: "👁️"
        }
    ];

    // Update activeIdx on scroll
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const onScroll = () => {
            if (isDragging) return; // Don't update during drag
            const scrollLeft = slider.scrollLeft;
            const containerWidth = slider.clientWidth;
            const newActiveIdx = Math.round(scrollLeft / containerWidth);
            setActiveIdx(newActiveIdx);
        };

        slider.addEventListener("scroll", onScroll, { passive: true });
        return () => slider.removeEventListener("scroll", onScroll);
    }, [isDragging]);

    // Handle mouse events for drag detection
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Navigate to specific slide
    const goToSlide = (index: number) => {
        const slider = sliderRef.current;
        if (slider) {
            const containerWidth = slider.clientWidth;
            slider.scrollTo({ left: index * containerWidth, behavior: 'smooth' });
            setActiveIdx(index);
        }
    };    return (        <section id="kenapa-orders" className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Kenapa Memilih ORDERS?</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Kami berkomitmen memberikan solusi digital terbaik dengan keunggulan yang membedakan kami dari yang lain
                    </p>
                </div>                {/* Desktop Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-2xl p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                        >
                            {/* Header with Profile Style */}
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-orange-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                                    {feature.icon}
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-bold text-white text-sm">
                                        {feature.title}
                                    </h3>
                                </div>
                                <div className="ml-auto">
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Feature Image */}
                            <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>

                            {/* Title */}
                            <h4 className="text-white font-bold text-lg mb-2">
                                {feature.title}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                {feature.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <button className="flex-1 bg-[#FF7A00] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                                    Learn More
                                </button>
                                <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden">
                    <div className="relative">
                        <div
                            ref={sliderRef}
                            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
                            style={{ scrollSnapType: 'x mandatory' }}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >                            <div className="flex gap-3 sm:gap-4 px-2 sm:px-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-900 rounded-2xl p-4 sm:p-6 min-w-[280px] sm:min-w-[320px] flex-shrink-0"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        {/* Header with Profile Style */}
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00] to-orange-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                                                {feature.icon}
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="font-bold text-white text-sm">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>                                                    </svg>
                                                </div>
                                            </div>
                                        </div>                                        {/* Feature Image */}
                                        <div className="relative w-full h-24 sm:h-28 mb-3 sm:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-contain p-3 sm:p-4"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h4 className="text-white font-bold text-base sm:text-lg mb-2">
                                            {feature.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                                            {feature.description}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-[#FF7A00] text-white py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium hover:bg-orange-600 transition-colors">
                                                Learn More
                                            </button>
                                            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Dots */}
                        <div className="flex justify-center items-center mt-4 sm:mt-6 space-x-2">
                            {features.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                        activeIdx === idx
                                            ? 'bg-[#FF7A00] w-6'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => goToSlide(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>                {/* Call to Action */}
                <div className="text-center mt-8 sm:mt-12">
                    <div className="bg-gradient-to-r from-[#FF7A00]/10 to-orange-200/10 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#061E44] mb-4">
                            Siap Memulai Proyek Digital Anda?
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                            Bergabunglah dengan ratusan klien yang telah mempercayakan kebutuhan digital mereka kepada kami
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                            <a
                                href="/contact"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#FF7A00] hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                            >
                                Konsultasi Gratis
                            </a>
                            <a
                                href="/portfolio"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
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
