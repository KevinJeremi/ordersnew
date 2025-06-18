'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';

// Data slides untuk slideshow
const slides = [
    { image: '/images/portofolio/RSD.png', alt: 'Tampilan dashboard sistem informasi rumah sakit digital' },
    { image: '/images/portofolio/Identifikasi_nilam.jpg', alt: 'Screenshot aplikasi mobile untuk identifikasi tanaman nilam' },
    { image: '/images/portofolio/farmasi.png', alt: 'Interface sistem manajemen farmasi digital' }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    // Parallax effect handler
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-play slideshow functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    // Navigation functions
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    return (
        <>
            {/* Google Fonts Import */}
            <link 
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
                rel="stylesheet" 
            />            <section 
                className="relative min-h-screen flex items-center justify-center text-white font-inter overflow-hidden"
            >
                {/* Parallax Background Layer */}
                <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: 'url(/images/ling.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transform: `translateY(${scrollY * 0.3}px)`,
                        willChange: 'transform'
                    }}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-1" />
                
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 dot-pattern opacity-20 z-2" />
                <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Kolom Kiri - Konten Statis */}                        <div 
                            className="flex flex-col gap-8 order-2 lg:order-1"
                            style={{
                                transform: `translateY(${scrollY * -0.1}px)`,
                            }}
                        >                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                                <span className="text-white">Solusi Digital Terdepan untuk </span><span className="text-custom-orange">Bisnis Masa Depan</span>
                            </h1>
                            
                            <p className="text-lg text-gray-200 max-w-lg">
                                ORDERS hadir sebagai partner digital terpercaya yang menghadirkan inovasi teknologi untuk mengakselerasi pertumbuhan bisnis Anda.
                            </p>
                            
                            <div className="flex flex-wrap gap-4 mt-4">                                <Link href="/contact">
                                    <button className="bg-custom-orange text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        Hubungi Kami
                                    </button>
                                </Link>
                                <Link href="/services">
                                    <button className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 hover:shadow-lg transform hover:scale-105">
                                        Lihat Layanan
                                    </button>
                                </Link>
                            </div>                            {/* Eco Digital Initiative Card */}                            <SpotlightCard 
                                className="mt-12 hover:bg-gray-900/80 transition-all duration-300" 
                                spotlightColor="rgba(34, 197, 94, 0.4)"
                            >
                                <p className="font-bold text-green-400 text-sm tracking-wider">🌱 ECO DIGITAL INITIATIVE</p>
                                <h3 className="text-2xl font-bold mt-2 text-white">Teknologi Ramah Lingkungan</h3>
                                <p className="text-gray-200 mt-2">
                                    Komitmen ORDERS dalam mengembangkan solusi digital yang berkelanjutan dan mendukung praktik ramah lingkungan.
                                </p>
                                <Link href="/ecodigital" className="inline-block text-green-400 font-semibold mt-4 group">
                                    Pelajari Lebih Lanjut
                                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-1">
                                        →
                                    </span>
                                </Link>
                            </SpotlightCard>
                            
                            {/* Mitra Lingkungan */}                            <div className="mt-8">
                                <p className="text-sm text-gray-300 font-medium tracking-wider">SUPPORTED BY:</p>                                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-4">
                                    <div className="hover:scale-105 transition-all duration-300 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                        <Image
                                            src="/images/sponsor/Baciraro.png"
                                            alt="Baciraro"
                                            width={80}
                                            height={40}
                                            className="object-contain rounded-lg"
                                        />
                                    </div>
                                    <div className="hover:scale-105 transition-all duration-300 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                        <Image
                                            src="/images/sponsor/TanaNyiurLestari.png"
                                            alt="Tana Nyiur Lestari"
                                            width={80}
                                            height={40}
                                            className="object-contain rounded-lg"
                                        />
                                    </div>
                                    <div className="hover:scale-105 transition-all duration-300 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                        <Image
                                            src="/images/sponsor/TrashRecycleCenter.png"
                                            alt="Trash Recycle Center"
                                            width={80}
                                            height={40}
                                            className="object-contain rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kolom Kanan - Slideshow Dinamis */}
                        <div className="order-1 lg:order-2">
                            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                                
                                {/* Slides Container */}
                                <div className="relative w-full h-full">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            <Image
                                                src={slide.image}
                                                alt={slide.alt}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {/* Overlay gradient untuk kontras */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                                    aria-label="Previous slide"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                                    aria-label="Next slide"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Dots Indicators */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === currentSlide
                                                    ? 'bg-custom-orange scale-125'
                                                    : 'bg-white/50 hover:bg-white/70'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Slide Description Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <p className="text-white text-sm font-medium opacity-90">
                                        {slides[currentSlide].alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-custom-orange-glow rounded-full blur-3xl animate-pulse" style={{ zIndex: 3 }} />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', zIndex: 3 }} />
            </section>            {/* Custom Styles */}
            <style jsx>{`
                .dot-pattern {
                    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
                    background-size: 40px 40px;
                }
                
                .font-inter {
                    font-family: 'Inter', system-ui, -apple-system, sans-serif;
                }

                /* Custom Orange Color */
                .text-custom-orange {
                    color: #ff6c00;
                }

                .bg-custom-orange {
                    background-color: #ff6c00;
                }

                .hover-custom-orange:hover {
                    color: #ff6c00;
                }

                .bg-custom-orange:hover {
                    background-color: #e55a00;
                }

                .bg-custom-orange-glow {
                    background-color: rgba(255, 108, 0, 0.1);
                }

                /* Smooth scrolling for better UX */
                html {
                    scroll-behavior: smooth;
                }

                /* Custom scrollbar for webkit browsers */
                ::-webkit-scrollbar {
                    width: 8px;
                }

                ::-webkit-scrollbar-track {
                    background: #1a202c;
                }

                ::-webkit-scrollbar-thumb {
                    background: #4a5568;
                    border-radius: 4px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #718096;
                }
            `}</style>
        </>
    );
}
