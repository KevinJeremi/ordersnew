'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../app/styles.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll to show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setIsMenuOpen(false); // Close mobile menu when hiding
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Function to handle navigation click and set active section
    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setIsMenuOpen(false);
    };    return (
        <header className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
            <div className={`${styles.container} ${styles.header_inner}`}>
                <div className="flex items-center">
                    <Link href="/" className={styles.logo} onClick={() => handleNavClick('home')}>
                        <div className="flex items-center gap-3">              <div className="w-12 h-12 relative hover:scale-105 transition-transform">
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
                    <Link
                        href="#layanan"
                        className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('services')}
                    >
                        Layanan
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
                </nav>{/* Mobile Menu Button */}
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
                    <div className={styles.mobileMenu}>            <nav className={styles.mobileMenuNav}>
                        <Link
                            href="#tentang-kami"
                            className={`${styles.nav_link} ${activeSection === 'about' ? styles.nav_link_active : ''}`}
                            onClick={() => handleNavClick('about')}
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="#layanan"
                            className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''}`}
                            onClick={() => handleNavClick('services')}
                        >
                            Layanan
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
