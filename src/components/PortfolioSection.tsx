'use client';

import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Lightbox from "./Lightbox";

interface PortfolioItem {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    imageAlt: string;
    category: string;
}

export default function PortfolioSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
    const [currentFilter, setCurrentFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const searchParams = useSearchParams();

    const portfolioItems = [
        {
            title: "Rumah Sampah Digital",
            description: "Aplikasi mobile untuk manajemen rumah sampah digital dengan sistem tracking dan reward untuk pengguna.",
            technologies: ["Flutter", "Firebase", "Dart"],
            image: "/images/portofolio/RSD.png",
            imageAlt: "Rumah Sampah Digital App Screenshot",
            category: "mobile-app"
        },
        {
            title: "Bank Sampah Pinabetengan",
            description: "Platform digital untuk manajemen bank sampah dengan sistem pencatatan transaksi dan laporan otomatis.",
            technologies: ["React Native", "Django", "Python"],
            image: "/images/portofolio/PInabengan.png",
            imageAlt: "Bank Sampah Pinabetengan App Screenshot",
            category: "mobile-app"
        },
        {
            title: "Website Tanah Nyiur Lestari",
            description: "Website company profile dengan sistem informasi dan manajemen konten yang dinamis.",
            technologies: ["Django", "Python", "JavaScript"],
            image: "/images/portofolio/TNL.png",
            imageAlt: "Tanah Nyiur Lestari Website Screenshot",
            category: "website"
        },
        {
            title: "TRC Blockchain - Waste Management System",
            description: "TRC (Tonsea Recycle Center) adalah sistem manajemen sampah inovatif yang mengintegrasikan teknologi blockchain untuk memberikan reward berupa token TRC kepada pengguna yang berkontribusi dalam program daur ulang sampah.",
            technologies: ["Blockchain", "Smart Contract", "React", "Node.js"],
            image: "/images/portofolio/TRC.png",
            imageAlt: "TRC Blockchain Waste Management System Screenshot",
            category: "website"
        },
        {
            title: "Wisata Rakit Malalayang",
            description: "Aplikasi Android untuk wisata rakit di Malalayang dengan fitur reservasi online, pembayaran digital, manajemen jadwal terintegrasi, dan fitur ulasan pengunjung untuk meningkatkan layanan wisata lokal.",
            technologies: ["Flutter", "Dart", "Firebase"],
            image: "/images/portofolio/ChatGPT Image 8 Jun 2025, 23.43.03.png",
            imageAlt: "Wisata Rakit Malalayang App Screenshot",
            category: "mobile-app"
        }, 
        {
            title: "Solideo Kuliner App",
            description: "Aplikasi pemesanan makanan dengan sistem real-time ordering dan manajemen resto yang terintegrasi.",
            technologies: ["Flutter", "Firebase", "Dart"],
            image: "/images/portofolio/ss_solideo.jpg",
            imageAlt: "Solideo Kuliner App Screenshot",
            category: "mobile-app"
        },
        {
            title: "Website Desa Kapoya",
            description: "Website resmi Desa Kapoya, Minahasa Selatan, Sulawesi Utara dengan sistem informasi desa dan layanan publik digital.",
            technologies: ["Node.js", "Express", "MongoDB", "JavaScript"],
            image: "/images/portofolio/webdes.jpg",
            imageAlt: "Website Desa Kapoya Screenshot",
            category: "website"
        },
        {
            title: "Pharmacy Website",
            description: "Website sistem manajemen apotek dengan fitur inventory, penjualan, dan laporan yang terintegrasi dengan database.",
            technologies: ["CodeIgniter", "MySQL", "PHP"],
            image: "/images/portofolio/farmasi.png",
            imageAlt: "Pharmacy Website Screenshot",
            category: "website"
        },
        {
            title: "Identifikasi Tanaman Nilam",
            description: "Aplikasi mobile untuk identifikasi tanaman nilam menggunakan teknologi AI dan machine learning.",
            technologies: ["Flutter", "TensorFlow", "Python"],
            image: "/images/portofolio/Identifikasi_nilam.jpg",
            imageAlt: "Identifikasi Nilam App Screenshot",
            category: "mobile-app"
        },
        {
            title: "Desain Poster Modern",
            description: "Koleksi desain poster modern untuk berbagai kebutuhan branding dan marketing.",
            technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
            image: "/images/services/desaingrafis.png",
            imageAlt: "Modern Poster Design Collection",
            category: "desain"
        }
    ];

    // Filter functionality
    const filterItems = (category: string) => {
        if (category === 'all') {
            setFilteredItems(portfolioItems);
        } else {
            setFilteredItems(portfolioItems.filter(item => item.category === category));
        }
        setCurrentFilter(category);
        setActiveIdx(0);
    };

    // Initialize filter on component mount and when search params change
    useEffect(() => {
        const kategori = searchParams?.get('kategori');
        if (kategori) {
            filterItems(kategori);
        } else {
            filterItems('all');
        }
    }, [searchParams]);

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
    }, [filteredItems]);

    const filterButtons = [
        { id: 'all', label: 'Semua', count: portfolioItems.length },
        { id: 'website', label: 'Website', count: portfolioItems.filter(item => item.category === 'website').length },
        { id: 'mobile-app', label: 'Mobile App', count: portfolioItems.filter(item => item.category === 'mobile-app').length },
        { id: 'desain', label: 'Desain', count: portfolioItems.filter(item => item.category === 'desain').length }
    ];

    // Lightbox functions
    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const prevImage = () => {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    // Prepare lightbox images
    const lightboxImages = filteredItems.map(item => ({
        src: item.image,
        alt: item.imageAlt,
        title: item.title
    }));

    return (
        <section id="portofolio" className="bg-light py-8 md:py-12 relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF7A00]/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#3D8C95]/10 to-transparent rounded-tr-full"></div>
            <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-[#FF7A00]/20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-[#3D8C95]/20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container-content relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-3">Karya Kami</h2>
                    
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {filterButtons.map((button) => (
                            <button
                                key={button.id}
                                onClick={() => filterItems(button.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    currentFilter === button.id
                                        ? 'bg-[#FF7A00] text-white shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-[#FF7A00]/10 hover:text-[#FF7A00] border border-gray-200'
                                }`}
                            >
                                {button.label} ({button.count})
                            </button>
                        ))}
                    </div>
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
                                {filteredItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-4"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >                                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
                                            {/* Project Image */}
                                            <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 via-transparent to-[#3D8C95]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                <img
                                                    src={item.image}
                                                    alt={item.imageAlt}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                                                    onClick={() => openLightbox(index)}
                                                />
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
                            {filteredItems.map((_, idx) => (
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
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                    {filteredItems.map((item, index) => (<div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
                        {/* Project Image */}
                        <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 via-transparent to-[#3D8C95]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src={item.image}
                                alt={item.imageAlt}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                                onClick={() => openLightbox(index)}
                            />
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
                    ))}                </div>

                {/* Lightbox Component */}
                <Lightbox
                    images={lightboxImages}
                    currentIndex={lightboxIndex}
                    isOpen={lightboxOpen}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            </div>
        </section>
    );
}
