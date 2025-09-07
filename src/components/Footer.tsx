'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

// Data untuk link footer agar lebih mudah dikelola
const footerSections = [
    {
        title: 'Layanan',
        links: [
            { label: 'Pembuatan Aplikasi', href: '/dashboard' },
            { label: 'Pembuatan Website', href: '/dashboard' },
            { label: 'Desain Digital', href: '/dashboard' },
            { label: 'Portfolio', href: '/portfolio' },
        ]
    },
    {
        title: 'Perusahaan',
        links: [
            { label: 'Tentang Kami', href: '/dashboard' },
            { label: 'Tim Kami', href: '/team' },
            { label: 'Karir', href: '/contact' },
            { label: 'Kontak', href: '/contact' },
        ]
    },
    {
        title: 'Dukungan',
        links: [
            { label: 'Dokumentasi', href: '/pricing' },
            { label: 'FAQ', href: '/pricing' },
            { label: 'Kebijakan Privasi', href: '/contact' },
        ]
    }
];

const socialLinks = [
    { 
        href: "https://www.instagram.com/teamorders25?igsh=YTJ5M2c0b3d2MXNj&utm_source=qr", 
        icon: FaInstagram, 
        label: 'Instagram',
        hoverColor: 'hover:bg-pink-600'
    },
    { 
        href: "https://www.facebook.com/share/1CLDWp53W7/?mibextid=wwXIfr", 
        icon: FaFacebookF, 
        label: 'Facebook',
        hoverColor: 'hover:bg-blue-600'
    },
    { 
        href: "https://wa.me/6282195965483?text=Halo!%20Saya%20tertarik%20dengan%20layanan%20ORDERS.", 
        icon: FaWhatsapp, 
        label: 'WhatsApp',
        hoverColor: 'hover:bg-green-500'
    },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    
                    {/* Kolom 1: Logo dan Deskripsi */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 relative">
                                <Image
                                    src="/images/logo.png"
                                    alt="ORDERS Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div>
                                <span className="text-orange-500 font-bold text-2xl">ORDERS</span>
                                <p className="text-xs text-cyan-400 tracking-wider">Organize. Develop. Thrive.</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Solusi digital modern untuk membantu bisnis Anda bertumbuh dan beradaptasi di era digital.
                        </p>
                    </div>

                    {/* Kolom 2, 3, 4: Links Dinamis */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold text-white mb-5">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                                            <FaArrowRight className="w-3 h-3 text-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Garis Pemisah dan Bagian Bawah */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} ORDERS. All rights reserved.
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${social.hoverColor} hover:scale-110`}
                                    aria-label={social.label}
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}