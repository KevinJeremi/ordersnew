'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    CodeBracketIcon,
    PaintBrushIcon,
    ViewColumnsIcon,
    CubeIcon,
    PhotoIcon,
    VideoCameraIcon,
    XMarkIcon
} from '@heroicons/react/24/outline';
import styles from '../app/styles.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Services data with icons
    const services = [
        {
            title: "Pembuatan Website",
            description: "Company Profile, E-commerce, Landing Page",
            icon: GlobeAltIcon
        },
        {
            title: "Pembuatan Aplikasi",
            description: "Mobile App, Web App Fullstack",
            icon: DevicePhoneMobileIcon
        },
        {
            title: "Less Coding",
            description: "Pemrograman cepat dan efisien",
            icon: CodeBracketIcon
        },
        {
            title: "Desain Digital",
            description: "UI/UX, Logo, Poster, Social Media",
            icon: PaintBrushIcon
        },
        {
            title: "Moodboard",
            description: "Konsep visual panduan desain",
            icon: ViewColumnsIcon
        },
        {
            title: "Prototype",
            description: "Model awal interaktif",
            icon: CubeIcon
        },
        {
            title: "Photo Editing",
            description: "Penyuntingan foto profesional",
            icon: PhotoIcon
        },
        {
            title: "Video Editing",
            description: "Pembuatan dan editing video",
            icon: VideoCameraIcon
        }
    ];

    // Handle scroll for solid background effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);

            if (scrollPosition > 100 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // Handle navigation click
    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setIsMenuOpen(false);
        setIsServicesDropdownOpen(false);
        setIsMobileServicesOpen(false);
    };

    // Handle service click
    const handleServiceClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setActiveSection('services');
        setIsServicesDropdownOpen(false);
        setIsMobileServicesOpen(false);
        setIsMenuOpen(false);

        const servicesSection = document.getElementById('layanan');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesDropdownOpen(false);
            }
        };

        if (isServicesDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isServicesDropdownOpen]);

    // Animation variants
    const headerVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
    };

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: { duration: 0.2 }
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const mobileMenuVariants = {
        hidden: {
            x: "100%",
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        visible: {
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const mobileMenuItemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white border-b border-gray-200 shadow-md'
                : 'bg-white shadow-sm'
                }`}
            variants={headerVariants}
            initial="visible"
            animate="visible"
        >
            <div className={`${styles.container} ${styles.header_inner}`}>
                <div className="flex items-center">
                    <Link href="/" className={styles.logo} onClick={() => handleNavClick('home')}>
                        <motion.div
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="w-12 h-12 relative"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="ORDERS Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    className="drop-shadow-sm"
                                />
                            </motion.div>
                            <div>
                                <span className="text-[#FF7A00] font-bold text-2xl tracking-wide">ORDERS</span>
                                <div className="text-xs text-[#3D8C95]">Organize. Develop. Thrive.</div>
                            </div>
                        </motion.div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <Link
                        href="#tentang-kami"
                        className={`${styles.nav_link} ${activeSection === 'about' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('about')}
                    >
                        Tentang Kami
                    </Link>

                    <div className="relative" ref={dropdownRef}>
                        <motion.button
                            type="button"
                            className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''} flex items-center gap-1 bg-transparent border-none cursor-pointer`}
                            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Layanan
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </motion.button>

                        {/* Desktop Mega Menu */}
                        <AnimatePresence>
                            {isServicesDropdownOpen && (
                                <motion.div
                                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                >
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-[#061E44] mb-4">Layanan Kami</h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {services.map((service, index) => {
                                                const IconComponent = service.icon;
                                                return (
                                                    <motion.button
                                                        key={index}
                                                        onClick={handleServiceClick}
                                                        className="text-left p-3 rounded-xl hover:bg-[#FF7A00]/10 transition-all duration-200 group border border-transparent hover:border-[#FF7A00]/20"
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <IconComponent className="w-5 h-5 text-[#FF7A00] mt-1 group-hover:scale-110 transition-transform" />
                                                            <div>
                                                                <div className="font-medium text-[#061E44] text-sm group-hover:text-[#FF7A00] transition-colors">
                                                                    {service.title}
                                                                </div>
                                                                <div className="text-xs text-gray-500 mt-1">
                                                                    {service.description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href="#pricing"
                        className={`${styles.nav_link} ${activeSection === 'pricing' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('pricing')}
                    >
                        Harga
                    </Link>
                    <Link
                        href="#portofolio"
                        className={`${styles.nav_link} ${activeSection === 'portfolio' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('portfolio')}
                    >
                        Portofolio
                    </Link>
                    <Link
                        href="#team"
                        className={`${styles.nav_link} ${activeSection === 'team' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('team')}
                    >
                        Tim Kami
                    </Link>
                    <Link
                        href="#kontak"
                        className={`${styles.nav_link} ${activeSection === 'contact' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('contact')}
                    >
                        Kontak
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width="24"
                        height="24"
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </motion.svg>
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl z-50"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-8">
                                    <h2 className="text-xl font-bold text-[#061E44]">Menu</h2>
                                    <motion.button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 rounded-full hover:bg-gray-100"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <XMarkIcon className="w-6 h-6" />
                                    </motion.button>
                                </div>

                                <div className="flex-grow overflow-y-auto -mr-3 pr-3">
                                    <motion.nav
                                        className="space-y-2"
                                        variants={staggerContainer}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {[
                                            { href: "#tentang-kami", label: "Tentang Kami", section: "about" },
                                            { href: "#pricing", label: "Harga", section: "pricing" },
                                            { href: "#portofolio", label: "Portofolio", section: "portfolio" },
                                            { href: "#team", label: "Tim Kami", section: "team" },
                                            { href: "#kontak", label: "Kontak", section: "contact" }
                                        ].map((item, index) => (
                                            <motion.div key={index} variants={mobileMenuItemVariants}>
                                                <Link
                                                    href={item.href}
                                                    className={`block p-4 rounded-xl transition-all duration-200 ${activeSection === item.section
                                                        ? 'bg-[#FF7A00] text-white'
                                                        : 'hover:bg-[#FF7A00]/10 text-[#061E44]'
                                                        }`}
                                                    onClick={() => handleNavClick(item.section)}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.div>
                                        ))}

                                        <motion.div variants={mobileMenuItemVariants}>
                                            <motion.button
                                                className="w-full text-left p-4 rounded-xl hover:bg-[#FF7A00]/10 text-[#061E44] flex items-center justify-between"
                                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                            >
                                                Layanan
                                                <motion.svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </motion.svg>
                                            </motion.button>

                                            <AnimatePresence>
                                                {isMobileServicesOpen && (
                                                    <motion.div
                                                        className="mt-2 ml-4 space-y-1"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {services.map((service, index) => (
                                                            <motion.button
                                                                key={index}
                                                                onClick={handleServiceClick}
                                                                className="text-left block w-full p-3 text-sm text-gray-600 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 rounded-lg transition-all duration-200"
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.05 }}
                                                            >
                                                                <div className="font-medium">{service.title}</div>
                                                            </motion.button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.nav>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}