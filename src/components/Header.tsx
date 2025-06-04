'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from '../app/styles.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    // State untuk transparansi header saat scroll
    const [isScrolled, setIsScrolled] = useState(false);

    // Daftar layanan untuk dropdown
    const services = [
        { name: 'Web Development', href: '#layanan-web' },
        { name: 'Mobile App', href: '#layanan-mobile' },
        { name: 'UI/UX Design', href: '#layanan-uiux' },
        { name: 'Digital Marketing', href: '#layanan-marketing' },
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
                setIsMenuOpen(false); // Close mobile menu when scrolling significantly
            }

            // Close dropdown menu when scrolling
            if (isDropdownOpen) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen, isDropdownOpen]);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Function to handle navigation click and set active section
    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setIsMenuOpen(false);
        setIsDropdownOpen(false); // Close dropdown when navigating
    };

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
                                <span className="text-[#ea580c] font-bold text-2xl tracking-wide">ORDERS</span>
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
                    <div className="relative inline-block" ref={dropdownRef}>
                        <button
                            className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''} flex items-center`}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="true"
                        >
                            Layanan
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                            >
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-lg border border-gray-100 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out z-50">
                                <div className="py-2">
                                    {services.map((service, index) => (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            className="block px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-[#ea580c] transition-colors duration-200"
                                            onClick={() => handleNavClick('services')}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
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
                    aria-expanded={isMenuOpen}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width="24"
                        height="24"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        )}
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
                            <div>
                                <button
                                    className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''} flex items-center w-full justify-between`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    aria-expanded={isDropdownOpen}
                                    aria-haspopup="true"
                                >
                                    <span>Layanan</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    >
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {/* Mobile Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="pl-4 bg-white/30 rounded-md mt-2 mb-2">
                                        {services.map((service, index) => (
                                            <Link
                                                key={index}
                                                href={service.href}
                                                className="block py-2 text-sm text-gray-700 hover:text-[#ea580c] transition-colors duration-200"
                                                onClick={() => handleNavClick('services')}
                                            >
                                                {service.name}
                                            </Link>
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