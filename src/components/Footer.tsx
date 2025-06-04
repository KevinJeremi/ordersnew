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
                    <div className="flex items-center justify-center mb-6 space-x-6">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/teamorders25?igsh=YTJ5M2c0b3d2MXNj&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            aria-label="Follow us on Instagram"
                        >
                            <div className="w-10 h-10 bg-white/10 hover:bg-[#FF7A00] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/share/1CLDWp53W7/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            aria-label="Follow us on Facebook"
                        >
                            <div className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.494V14.706h-3.12v-3.62h3.12V8.413c0-3.09 1.892-4.787 4.651-4.787 1.325 0 2.465.098 2.8.142v3.25h-1.92c-1.505 0-1.794.716-1.794 1.77v2.32h3.588l-.467 3.62h-3.121V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/6282195965483?text=Halo!%20Saya%20tertarik%20dengan%20layanan%20ORDERS.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            aria-label="Chat with us on WhatsApp"
                        >
                            <div className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <p className="text-white/50 text-sm">© {new Date().getFullYear()} ORDERS. All rights reserved.</p>
                    <p className="text-white/30 text-xs mt-2">Organize. Develop. Thrive.</p>
                </div>
            </div>
        </footer>
    );
}
