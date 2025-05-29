'use client';

import { useRef, useState, useEffect } from "react";

export default function PortfolioSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    // Update activeIdx on scroll
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const onScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const containerWidth = slider.clientWidth;
            const newActiveIdx = Math.round(scrollLeft / containerWidth);
            setActiveIdx(newActiveIdx);
        };

        slider.addEventListener("scroll", onScroll, { passive: true });
        return () => slider.removeEventListener("scroll", onScroll);
    }, []);

    const portfolioItems = [
        {
            title: "E-commerce Platform",
            description: "Website e-commerce dengan sistem pembayaran terintegrasi dan manajemen inventaris.",
            technologies: ["React", "Node.js", "MongoDB"],
            imageAlt: "E-commerce Platform Screenshot"
        },
        {
            title: "Aplikasi Manajemen Klinik",
            description: "Sistem booking appointment dan manajemen pasien untuk klinik kesehatan.",
            technologies: ["Flutter", "Firebase", "Laravel"],
            imageAlt: "Clinic Management App Screenshot"
        },
        {
            title: "Dashboard Analytics",
            description: "Dashboard analitik yang komprehensif untuk visualisasi data bisnis.",
            technologies: ["Next.js", "TypeScript", "D3.js"],
            imageAlt: "Analytics Dashboard Screenshot"
        }
    ]; return (
        <section id="portofolio" className="bg-light py-16 md:py-24 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF7A00]/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#3D8C95]/10 to-transparent rounded-tr-full"></div>
            <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-[#FF7A00]/20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-[#3D8C95]/20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container-content relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block text-[#FF7A00] font-semibold mb-2">PORTOFOLIO</span>
                    <h2 className="text-4xl font-bold mb-3">Karya Terbaik Kami</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Beberapa proyek digital terbaik yang telah kami kerjakan dengan dedikasi dan inovasi untuk klien-klien kami.
                    </p>
                </div>

                {/* Mobile Slider */}
                <div className="md:hidden">
                    <div className="relative">
                        <div
                            ref={sliderRef}
                            className="overflow-x-auto scrollbar-hide"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            <div className="flex">
                                {portfolioItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-4"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >                                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
                                            {/* Modern Image Container with Gradient Overlay */}
                                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 via-transparent to-[#3D8C95]/10 z-10"></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/20 to-[#3D8C95]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                                    <div className="text-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#FF7A00] mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                        </svg>
                                                        <p className="text-[#061E44] font-medium text-sm">Project Preview</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Modern Content Section */}
                                            <div className="p-6 relative z-10">
                                                {/* Background Pattern */}
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-bl-full group-hover:from-[#FF7A00]/10 transition-all duration-500"></div>

                                                <h3 className="text-xl font-bold text-[#061E44] mb-3 group-hover:text-[#FF7A00] transition-colors duration-300">{item.title}</h3>
                                                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                                                {/* Technology Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech, techIndex) => (
                                                        <span key={techIndex} className="bg-gradient-to-r from-[#FF7A00]/10 to-[#3D8C95]/10 text-[#061E44] px-3 py-1.5 rounded-full text-sm font-medium border border-[#FF7A00]/20 hover:border-[#FF7A00]/40 hover:bg-gradient-to-r hover:from-[#FF7A00]/20 hover:to-[#3D8C95]/20 transition-all duration-300">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>                        {/* Slider Dots Indicator */}
                        <div className="flex justify-center items-center mt-6 space-x-2 bg-transparent">
                            {portfolioItems.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    className={`h-3 w-3 rounded-full border-0 outline-none shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] focus-visible:ring-offset-2 transition-all duration-300 ${activeIdx === idx
                                        ? 'bg-[#FF7A00] scale-110'
                                        : 'bg-[#FF7A00]/30 hover:bg-[#FF7A00]/50'
                                        }`}
                                    onClick={() => {
                                        const slider = sliderRef.current;
                                        if (slider) {
                                            const containerWidth = slider.clientWidth;
                                            slider.scrollTo({ left: idx * containerWidth, behavior: 'smooth' });
                                        }
                                    }}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
                            {/* Modern Image Container with Gradient Overlay */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 via-transparent to-[#3D8C95]/10 z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00]/20 to-[#3D8C95]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#FF7A00] mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        <p className="text-[#061E44] font-medium text-sm">Project Preview</p>
                                    </div>
                                </div>
                            </div>

                            {/* Modern Content Section */}
                            <div className="p-6 relative z-10">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-bl-full group-hover:from-[#FF7A00]/10 transition-all duration-500"></div>

                                <h3 className="text-xl font-bold text-[#061E44] mb-3 group-hover:text-[#FF7A00] transition-colors duration-300">{item.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {item.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-gradient-to-r from-[#FF7A00]/10 to-[#3D8C95]/10 text-[#061E44] px-3 py-1.5 rounded-full text-sm font-medium border border-[#FF7A00]/20 hover:border-[#FF7A00]/40 hover:bg-gradient-to-r hover:from-[#FF7A00]/20 hover:to-[#3D8C95]/20 transition-all duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
