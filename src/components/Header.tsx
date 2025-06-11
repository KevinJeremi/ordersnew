'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
    XMarkIcon
} from '@heroicons/react/24/outline';
import styles from '../app/styles.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false); const router = useRouter();
    const pathname = usePathname();

    // Update active section based on current pathname
    useEffect(() => {
        if (pathname === '/') {
            setActiveSection('home');
        } else if (pathname === '/dashboard') {
            setActiveSection('dashboard');
        } else if (pathname === '/pricing') {
            setActiveSection('pricing');
        } else if (pathname === '/portfolio') {
            setActiveSection('portfolio');
        } else if (pathname === '/team') {
            setActiveSection('team');
        } else if (pathname === '/contact') {
            setActiveSection('contact');
        }
    }, [pathname]);    // Navigation items for mobile menu
    const navigationItems = [
        { href: "/dashboard", label: "Layanan Kami", section: "dashboard", isExternal: true },
        { href: "/pricing", label: "Harga", section: "pricing", isExternal: true },
        { href: "/portfolio", label: "Portofolio", section: "portfolio", isExternal: true },
        { href: "/team", label: "Tim Kami", section: "team", isExternal: true },
        { href: "/contact", label: "Kontak", section: "contact", isExternal: true }
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
    }, [isMenuOpen]);    // Handle navigation click
    const handleNavClick = (section: string, isExternal?: boolean) => {
        // activeSection will be updated automatically by useEffect when pathname changes
        setIsMenuOpen(false);

        // All navigation now goes to separate pages
        // No need for scroll handling
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white border-b border-gray-200 shadow-md'
                : 'bg-white shadow-sm'
                }`}
        >
            <div className={`${styles.container} ${styles.header_inner} transition-all duration-300 ${isScrolled ? 'py-2 lg:py-4' : 'py-4'}`}>
                <div className="flex items-center">
                    <Link href="/" className={styles.logo} onClick={() => handleNavClick('home')}>
                        <div className="flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300">
                            <div className={`relative transition-all duration-300 hover:scale-110 hover:rotate-2 ${isScrolled ? 'w-9 h-9 lg:w-12 lg:h-12' : 'w-12 h-12'}`}>
                                <Image
                                    src="/images/logo.png"
                                    alt="ORDERS Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    className="drop-shadow-sm"
                                />
                            </div>
                            <div>
                                <span className={`text-[#FF7A00] font-bold tracking-wide transition-all duration-300 ${isScrolled ? 'text-xl lg:text-2xl' : 'text-2xl'}`}>ORDERS</span>
                                <div className={`text-xs text-[#3D8C95] transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 invisible lg:opacity-100 lg:h-auto lg:visible' : 'opacity-100 h-auto visible'}`}>Organize. Develop. Thrive.</div>
                            </div>
                        </div>
                    </Link>
                </div>                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <Link
                        href="/dashboard"
                        className={`${styles.nav_link} ${activeSection === 'dashboard' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('dashboard', true)}
                    >
                        Layanan Kami
                    </Link>                    <Link
                        href="/pricing"
                        className={`${styles.nav_link} ${activeSection === 'pricing' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('pricing', true)}
                    >
                        Harga
                    </Link>                    <Link
                        href="/portfolio"
                        className={`${styles.nav_link} ${activeSection === 'portfolio' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('portfolio', true)}
                    >
                        Portofolio
                    </Link>
                    <Link
                        href="/team"
                        className={`${styles.nav_link} ${activeSection === 'team' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('team', true)}
                    >
                        Tim Kami
                    </Link>
                    <Link
                        href="/contact"
                        className={`${styles.nav_link} ${activeSection === 'contact' ? styles.nav_link_active : ''}`}
                        onClick={() => handleNavClick('contact', true)}
                    >
                        Kontak
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuButton} hover:scale-110 active:scale-90 transition-transform p-3 rounded-lg hover:bg-gray-100`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        width="32"
                        height="32"
                        className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'} text-gray-700`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <>
                {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-[#061E44]">Menu</h2>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 hover:scale-110 active:scale-90 transition-all"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto -mr-3 pr-3">
                            <nav className="space-y-2">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                                        style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                                    >
                                        <Link
                                            href={item.isExternal ? item.href : "/"}
                                            className={`block p-4 rounded-xl transition-all duration-200 ${activeSection === item.section
                                                ? 'bg-[#FF7A00] text-white'
                                                : 'hover:bg-[#FF7A00]/10 text-[#061E44]'
                                                }`}
                                            onClick={(e) => {
                                                if (!item.isExternal) {
                                                    e.preventDefault();
                                                }
                                                handleNavClick(item.section, item.isExternal);
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}                            </nav>
                        </div>
                    </div>
                </div>
            </>
        </header>
    );
}