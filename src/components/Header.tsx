'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
    const router = useRouter();
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
    }, [pathname]);

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
    ];    // Navigation items for mobile menu
    const navigationItems = [
        { href: "/dashboard", label: "Dashboard", section: "dashboard", isExternal: true },
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
        setIsServicesDropdownOpen(false);
        setIsMobileServicesOpen(false);

        // All navigation now goes to separate pages
        // No need for scroll handling
    };

    // Handle service click
    const handleServiceClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setActiveSection('services');
        setIsServicesDropdownOpen(false);
        setIsMobileServicesOpen(false);
        setIsMenuOpen(false);        // Navigate to dashboard page which contains services
        router.push('/dashboard');
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
                        Dashboard
                    </Link>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            className={`${styles.nav_link} ${activeSection === 'services' ? styles.nav_link_active : ''} flex items-center gap-1 bg-transparent border-none cursor-pointer hover:scale-105 active:scale-95 transition-transform`}
                            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        >
                            Layanan
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Desktop Mega Menu */}
                        <div
                            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${isServicesDropdownOpen
                                ? 'opacity-100 scale-100 visible'
                                : 'opacity-0 scale-95 invisible'
                                }`}
                        >
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-[#061E44] mb-4">Layanan Kami</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {services.map((service, index) => {
                                        const IconComponent = service.icon;
                                        return (
                                            <button
                                                key={index}
                                                onClick={handleServiceClick}
                                                className="text-left p-3 rounded-xl hover:bg-[#FF7A00]/10 transition-all duration-200 group border border-transparent hover:border-[#FF7A00]/20 hover:scale-[1.02] active:scale-[0.98]"
                                                style={{
                                                    opacity: isServicesDropdownOpen ? 1 : 0,
                                                    transform: isServicesDropdownOpen ? 'translateY(0)' : 'translateY(10px)',
                                                    transitionDelay: isServicesDropdownOpen ? `${index * 50}ms` : '0ms'
                                                }}
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
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Call to Action for Pricing */}
                                <div
                                    className="mt-6 p-4 bg-gradient-to-r from-[#FF7A00]/10 to-[#3D8C95]/10 rounded-xl border border-[#FF7A00]/20"
                                    style={{
                                        opacity: isServicesDropdownOpen ? 1 : 0,
                                        transform: isServicesDropdownOpen ? 'translateY(0)' : 'translateY(10px)',
                                        transitionDelay: isServicesDropdownOpen ? '400ms' : '0ms',
                                        transitionProperty: 'all',
                                        transitionDuration: '0.3s',
                                        transitionTimingFunction: 'ease'
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="font-semibold text-[#061E44] text-sm mb-1">
                                                Tertarik dengan layanan kami?
                                            </h4>
                                            <p className="text-xs text-gray-600">
                                                Lihat paket harga dan penawaran terbaik
                                            </p>
                                        </div>
                                        <Link
                                            href="/pricing"
                                            className="px-4 py-2 bg-[#FF7A00] text-white text-sm font-medium rounded-lg hover:bg-[#e56a00] transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-1"
                                            onClick={() => {
                                                setIsServicesDropdownOpen(false);
                                                handleNavClick('pricing', true);
                                            }}
                                        >
                                            <span>Cek Harga</span>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
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
                                ))}

                                <div
                                    className={`transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                                    style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}
                                >
                                    <button
                                        className="w-full text-left p-4 rounded-xl hover:bg-[#FF7A00]/10 text-[#061E44] flex items-center justify-between"
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                    >
                                        Layanan
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div
                                        className={`mt-2 ml-4 space-y-1 transition-all duration-300 overflow-hidden ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        {services.map((service, index) => (
                                            <button
                                                key={index}
                                                onClick={handleServiceClick}
                                                className="text-left block w-full p-3 text-sm text-gray-600 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 rounded-lg transition-all duration-200"
                                                style={{
                                                    opacity: isMobileServicesOpen ? 1 : 0,
                                                    transform: isMobileServicesOpen ? 'translateX(0)' : 'translateX(-10px)',
                                                    transitionDelay: isMobileServicesOpen ? `${index * 50}ms` : '0ms'
                                                }}
                                            >
                                                <div className="font-medium">{service.title}</div>
                                            </button>
                                        ))}

                                        {/* Mobile CTA for Pricing */}
                                        <div
                                            className="mt-3 p-3 bg-[#FF7A00]/5 border border-[#FF7A00]/20 rounded-lg"
                                            style={{
                                                opacity: isMobileServicesOpen ? 1 : 0,
                                                transform: isMobileServicesOpen ? 'translateX(0)' : 'translateX(-10px)',
                                                transitionDelay: isMobileServicesOpen ? `${services.length * 50 + 100}ms` : '0ms',
                                                transitionProperty: 'all',
                                                transitionDuration: '0.3s',
                                                transitionTimingFunction: 'ease'
                                            }}
                                        >
                                            <div className="text-center">
                                                <p className="text-xs text-[#061E44] font-medium mb-2">
                                                    💰 Lihat Paket & Harga Terbaik
                                                </p>
                                                <Link
                                                    href="/pricing"
                                                    className="w-full block px-3 py-2 bg-[#FF7A00] text-white text-sm font-medium rounded-md hover:bg-[#e56a00] transition-all duration-200 text-center"
                                                    onClick={() => {
                                                        setIsMobileServicesOpen(false);
                                                        setIsMenuOpen(false);
                                                        handleNavClick('pricing', true);
                                                    }}
                                                >
                                                    Cek Harga Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        </header>
    );
}