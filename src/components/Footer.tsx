'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-12">
            <div className="container-content">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">          <div>
                    <div className="flex items-center gap-2 mb-4">                <div className="w-8 h-8 relative">
                        <Image
                            src="/images/logo.png"
                            alt="ORDERS Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                            className="brightness-150"
                        />
                    </div>
                        <div>
                            <span className="text-[#FF7A00] font-bold text-xl">ORDERS</span>
                            <div className="text-xs text-[#3D8C95]">Organize. Develop. Thrive.</div>
                        </div>
                    </div>
                    <p className="text-white/70 mb-4">
                        Solusi digital terbaik untuk bisnis modern yang ingin berkembang di era digital.
                    </p>
                </div>                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">Pembuatan Aplikasi</Link></li>
                            <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">Pembuatan Website</Link></li>
                            <li className="ml-4">
                                <ul className="mt-1 space-y-1 text-sm">
                                    <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">• Company Profile</Link></li>
                                    <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">• E-commerce</Link></li>
                                    <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">• Landing Page</Link></li>
                                    <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">• Portfolio</Link></li>
                                    <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">• Blog</Link></li>
                                </ul>
                            </li>
                            <li><Link href="#layanan" className="hover:text-[#FF7A00] transition-colors">Desain Digital</Link></li>
                            <li><Link href="#portfolio" className="hover:text-[#FF7A00] transition-colors">Portfolio</Link></li>
                            <li><Link href="#kontak" className="hover:text-[#FF7A00] transition-colors">Konsultasi</Link></li>
                        </ul>
                    </div><div>
                        <h4 className="text-lg font-semibold text-white mb-4">Perusahaan</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="#tentang" className="hover:text-[#FF7A00] transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#tim" className="hover:text-[#FF7A00] transition-colors">Tim Kami</Link></li>
                            <li><Link href="#kontak" className="hover:text-[#FF7A00] transition-colors">Karir</Link></li>
                            <li><Link href="#kontak" className="hover:text-[#FF7A00] transition-colors">Kontak</Link></li>
                        </ul>
                    </div>                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Dukungan</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="#" className="hover:text-[#FF7A00] transition-colors">Dokumentasi</Link></li>
                            <li><Link href="#" className="hover:text-[#FF7A00] transition-colors">FAQ</Link></li>
                            <li><Link href="#kontak" className="hover:text-[#FF7A00] transition-colors">Dukungan 24/7</Link></li>
                            <li><Link href="#" className="hover:text-[#FF7A00] transition-colors">Kebijakan Privasi</Link></li>
                        </ul>
                    </div>
                </div>          <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <div className="flex items-center justify-center mb-4">
                    </div>
                    <p className="text-white/50 text-sm">© {new Date().getFullYear()} ORDERS. All rights reserved.</p>
                    <p className="text-white/30 text-xs mt-2">Organize. Develop. Thrive.</p>
                </div>
            </div>
        </footer>
    );
}
