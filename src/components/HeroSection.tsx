'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpotlightCard from './SpotlightCard';

// Data slides untuk slideshow (diperbarui sesuai permintaan)
const SLIDE_INTERVAL_MS = 10000; // durasi perpindahan otomatis antar slide (10 detik)
const slides = [
    {
        image: '/images/ecosistem/AI_1.png',
        alt: 'Tim kami lolos AIDEA Nation oleh BRIN - cuplikan aktivitas inovasi AI tahap pertama',
        title: 'Finalis AIDEA Nation BRIN',
        description: 'Kami berhasil lolos seleksi AIDEA Nation yang diselenggarakan Badan Riset dan Inovasi Nasional (BRIN) sebagai salah satu finalis berkat solusi AI berorientasi keberlanjutan.'
    },
    {
        image: '/images/ecosistem/AI_2.png',
        alt: 'Pengembangan lanjutan solusi AI berkelanjutan - dokumentasi internal',
        title: 'Inovasi AI Berkelanjutan',
        description: 'Pengembangan berkelanjutan platform kami untuk mendukung efisiensi proses bisnis dan dampak lingkungan yang positif.'
    },
    {
        image: '/images/ecosistem/Menteri_1.jpg',
        alt: 'Menteri Pariwisata Widiyanti Putri Wardhana memperhatikan inovasi lingkungan kami',
        title: 'Apresiasi Kementerian Pariwisata',
        description: 'Inovasi dan kontribusi kami di sektor lingkungan mendapat perhatian Menteri Pariwisata Widiyanti Putri Wardhana.'
    },
    {
        image: '/images/ecosistem/BACIRARO.png',
        alt: 'Logo ekosistem daur ulang Baciraro Recycle',
        title: 'Ekosistem Baciraro Recycle',
        description: 'Bagian dari ekosistem Baciraro Recycle dalam mendorong ekonomi sirkular dan pengelolaan limbah yang bertanggung jawab.'
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Parallax effect handler (optimized for mobile)
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        // Use passive listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-play slideshow functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_INTERVAL_MS);

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
                style={{ minHeight: '100vh' }}
            >                {/* Parallax Background Layer */}
                <div
                    className="absolute inset-0 w-full h-full parallax-element"
                    style={{
                        backgroundImage: 'url(/images/ling.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll', // Always scroll for mobile compatibility
                        transform: `translate3d(0, ${scrollY * (isMobile ? 0.1 : 0.3)}px, 0)`, // Hardware accelerated with translate3d
                        willChange: 'transform',
                        minHeight: '120vh'
                    }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-1" />

                {/* Dot pattern overlay */}
                <div className="absolute inset-0 dot-pattern opacity-20 z-2" />                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-auto">                        {/* Kolom Kiri - Konten Statis */}                        <div
                        className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1 text-center lg:text-left parallax-element"
                        style={{
                            transform: `translate3d(0, ${scrollY * (isMobile ? -0.05 : -0.1)}px, 0)`, // Hardware accelerated
                        }}
                    ><h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            <span className="text-white">Solusi Digital Terdepan untuk </span><span className="text-custom-orange">Bisnis Masa Depan</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
                            ORDERS hadir sebagai partner digital terpercaya yang menghadirkan inovasi teknologi untuk mengakselerasi pertumbuhan bisnis Anda.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4 justify-center lg:justify-start">                                <Link href="/contact">
                            <button className="bg-custom-orange text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto">
                                Hubungi Kami
                            </button>
                        </Link>
                            <Link href="/services">
                                <button className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 hover:shadow-lg transform hover:scale-105 w-full sm:w-auto">
                                    Lihat Layanan
                                </button>
                            </Link>
                        </div>                            {/* Eco Digital Initiative Card */}                            <SpotlightCard
                            className="mt-8 lg:mt-12 hover:bg-gray-900/80 transition-all duration-300"
                            spotlightColor="rgba(34, 197, 94, 0.4)"
                        >
                            <p className="font-bold text-green-400 text-sm tracking-wider">🌱 ECO DIGITAL INITIATIVE</p>
                            <h3 className="text-xl lg:text-2xl font-bold mt-2 text-white">Teknologi Ramah Lingkungan</h3>
                            <p className="text-gray-200 mt-2 text-sm lg:text-base">
                                Komitmen ORDERS dalam mengembangkan solusi digital yang berkelanjutan dan mendukung praktik ramah lingkungan.
                            </p>
                            <Link href="/ecodigital" className="inline-block text-green-400 font-semibold mt-4 group text-sm lg:text-base">
                                Pelajari Lebih Lanjut
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-1">
                                    →
                                </span>
                            </Link>
                        </SpotlightCard>

                        {/* Mitra Lingkungan */}                            <div className="mt-6 lg:mt-8">
                            <p className="text-xs lg:text-sm text-gray-300 font-medium tracking-wider">SUPPORTED BY:</p>                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 lg:gap-x-8 gap-y-3 lg:gap-y-4 mt-3 lg:mt-4">
                                <div className="hover:scale-105 transition-all duration-300 bg-white/10 p-2 lg:p-4 rounded-xl backdrop-blur-sm">
                                    <Image
                                        src="/images/sponsor/Baciraro.png"
                                        alt="Baciraro"
                                        width={60}
                                        height={30}
                                        className="lg:w-28 lg:h-14 object-contain rounded-lg"
                                    />
                                </div>
                                <div className="hover:scale-105 transition-all duration-300 bg-white/10 p-2 lg:p-4 rounded-xl backdrop-blur-sm">
                                    <Image
                                        src="/images/sponsor/TanaNyiurLestari.png"
                                        alt="Tana Nyiur Lestari"
                                        width={60}
                                        height={30}
                                        className="lg:w-28 lg:h-14 object-contain rounded-lg"
                                    />
                                </div>
                                <div className="hover:scale-105 transition-all duration-300 bg-white/10 p-2 lg:p-4 rounded-xl backdrop-blur-sm">
                                    <Image
                                        src="/images/sponsor/TrashRecycleCenter.png"
                                        alt="Trash Recycle Center"
                                        width={60}
                                        height={30}
                                        className="lg:w-28 lg:h-14 object-contain rounded-lg"
                                    />
                                </div>
                                <div className="hover:scale-105 transition-all duration-300 bg-white/10 p-2 lg:p-4 rounded-xl backdrop-blur-sm">
                                    <Image
                                        src="/images/sponsor/ELMAST.png"
                                        alt="ELMast"
                                        width={60}
                                        height={30}
                                        className="lg:w-28 lg:h-14 object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>                        {/* Kolom Kanan - Slideshow Dinamis */}
                        <div className="order-1 lg:order-2">
                            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-lg lg:max-w-none bg-gray-900">

                                {/* Slides Container */}
                                <div className="relative w-full h-full">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        >
                                            <Image
                                                src={slide.image}
                                                alt={slide.alt}
                                                fill
                                                className="w-full h-full"
                                                style={{
                                                    objectFit: isMobile ? 'contain' : 'cover',
                                                    objectPosition: isMobile ? 'center top' : 'center center'
                                                }}
                                                priority={index === 0}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {/* Overlay gradient untuk kontras */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                                            {/* Title & description overlay per slide (hanya saat aktif untuk SEO & aksesibilitas) */}
                                            {index === currentSlide && (
                                                <div className="absolute bottom-20 left-0 right-0 px-6">
                                                    <h4 className="text-lg sm:text-xl font-semibold text-white drop-shadow-md">
                                                        {slide.title}
                                                    </h4>
                                                    <p className="mt-2 text-xs sm:text-sm text-gray-200 max-w-md">
                                                        {slide.description}
                                                    </p>
                                                </div>
                                            )}
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
                                            onClick={() => goToSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'bg-custom-orange scale-125'
                                                : 'bg-white/50 hover:bg-white/70'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Slide Description Overlay (alt fallback) */}
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
                }                .bg-custom-orange-glow {
                    background-color: rgba(255, 108, 0, 0.1);
                }

                /* Parallax Performance Optimization */
                .parallax-element {
                    will-change: transform;
                    transform: translate3d(0, 0, 0);
                    backface-visibility: hidden;
                    perspective: 1000px;
                }

                /* Mobile Touch Optimization */
                @media (hover: none) and (pointer: coarse) {
                    /* Enable hardware acceleration for smooth parallax on touch devices */
                    .parallax-element {
                        -webkit-transform: translate3d(0, 0, 0);
                        transform: translate3d(0, 0, 0);
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        -webkit-perspective: 1000px;
                        perspective: 1000px;
                        -webkit-overflow-scrolling: touch;
                    }
                }                /* Mobile Optimization for Background with Parallax */
                @media (max-width: 768px) {
                    section {
                        min-height: 100vh !important;
                        min-height: 100dvh !important; /* Dynamic viewport height for mobile */
                    }
                    
                    /* Optimize background for mobile parallax */
                    .absolute.inset-0 {
                        background-attachment: scroll !important;
                        background-size: cover !important;
                        background-position: center center !important;
                        min-height: 120vh !important;
                        /* Transform will be handled by inline styles for mobile */
                    }
                    
                    /* Mobile slideshow container optimization */
                    .order-1.lg\\:order-2 > div {
                        height: 280px !important;
                        background-color: #1f2937 !important; /* Darker background to make contained images stand out */
                    }
                    
                    /* Ensure smooth scrolling on mobile */
                    * {
                        -webkit-transform: translate3d(0, 0, 0);
                        transform: translate3d(0, 0, 0);
                    }
                }

                @media (max-width: 480px) {
                    /* Very small screens - slightly shorter container */
                    .order-1.lg\\:order-2 > div {
                        height: 250px !important;
                        margin: 0 auto !important;
                    }
                }

                @media (max-width: 640px) {
                    /* Extra small screens */
                    .absolute.inset-0 {
                        background-size: cover !important;
                        background-position: center 20% !important; /* Adjust vertical position */
                        min-height: 130vh !important;
                    }
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
