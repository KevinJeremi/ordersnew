'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from '../app/styles.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Refs untuk dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);
    const mobileDropdownRef = useRef<HTMLDivElement>(null);

    // Services data for dropdown
    const services = [
        { title: "Pembuatan Website", description: "Company Profile, E-commerce, Landing Page" },
        { title: "Pembuatan Aplikasi", description: "Mobile App, Web App Fullstack" },
        { title: "Less Coding", description: "Pemrograman cepat dan efisien" },
        { title: "Desain Digital", description: "UI/UX, Logo, Poster, Social Media" },
        { title: "Moodboard", description: "Konsep visual panduan desain" },
        { title: "Prototype", description: "Model awal interaktif" },
        { title: "Photo Editing", description: "Penyuntingan foto profesional" },
        { title: "Video Editing", description: "Pembuatan dan editing video" }
    ];

    // Mendeteksi scroll untuk efek transparansi
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Set header menjadi transparan ketika scroll lebih dari 50px
            if (scrollPosition > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Handle mobile menu saat scroll jika diperlukan
            if (scrollPosition > 100 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // Function to handle navigation click and set active section
    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setIsMenuOpen(false);
        setIsServicesDropdownOpen(false);
    };

    // Function to handle service click
    const handleServiceClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setActiveSection('services');
        setIsServicesDropdownOpen(false);
        setIsMenuOpen(false);

        // Scroll to services section
        const servicesSection = document.getElementById('layanan');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Toggle dropdown
    const toggleServicesDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Toggling dropdown, current state:', isServicesDropdownOpen);
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };    // Sync dropdown state when menu closes
    useEffect(() => {
        if (!isMenuOpen && isServicesDropdownOpen) {
            setIsServicesDropdownOpen(false);
        }
    }, [isMenuOpen, isServicesDropdownOpen]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
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

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerVisible}`}>
            <div className={`${styles.container} ${styles.header_inner}`}>
                <div className="flex items-center">
                    <Link href="/" className={styles.logo} onClick={() => handleNavClick('home')}>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 relative hover:scale-105 transition-transform">
                                <Image
                                    src="/images/logo.png"
                                    alt="ORDERS Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    className="drop-shadow-sm hover:drop-shadow-md transition-all"
                                />
                            </div>
                            <div>
                                <span className="text-[#FF7A00] font-bold text-2xl tracking-wide">ORDERS</span>
                                <div className="text-xs text-[#3D8C95]">Organize. Develop. Thrive.</div>
                            </div>
                        </div>
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
                        <button
                            type="button"
                            className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''} flex items-center gap-1 bg-transparent border-none cursor-pointer`}
                            onClick={toggleServicesDropdown}
                        >
                            Layanan
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>                        {/* Services Dropdown */}
                        {isServicesDropdownOpen && (
                            <div className={styles.servicesDropdown}>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-[#061E44] mb-3 px-2">Layanan Kami</h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {services.map((service, index) => (
                                            <button
                                                key={index}
                                                onClick={handleServiceClick}
                                                className={styles.dropdownItem}
                                            >
                                                <div className={styles.dropdownTitle}>
                                                    {service.title}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
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
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <nav className={styles.mobileMenuNav}>
                            <Link
                                href="#tentang-kami"
                                className={`${styles.nav_link} ${activeSection === 'about' ? styles.nav_link_active : ''}`}
                                onClick={() => handleNavClick('about')}
                            >
                                Tentang Kami
                            </Link>

                            <div className="relative" ref={mobileDropdownRef}>
                                <button
                                    className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''} flex items-center justify-between w-full`}
                                    onClick={toggleServicesDropdown}
                                >
                                    Layanan
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Mobile Services Dropdown */}
                                {isServicesDropdownOpen && (
                                    <div className="mt-2 ml-4 space-y-1">
                                        {services.map((service, index) => (
                                            <button
                                                key={index}
                                                onClick={handleServiceClick}
                                                className="text-left block w-full p-2 text-sm text-gray-600 hover:text-[#FF7A00] hover:bg-[#FF7A00]/5 rounded transition-all duration-200"
                                            >
                                                {service.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
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
                    </div>
                )}
            </div>
        </header>
    );
}