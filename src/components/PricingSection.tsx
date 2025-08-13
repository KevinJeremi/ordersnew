// filepath: c:\React\my-next-app\src\components\PricingSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Website Package interface
interface WebsitePackage {
    name: string;
    price: string;
    features: string[];
    maintenance: string;
    revisions: string;
    bonus?: string;
}

// Mobile App Package interface
interface MobileAppPackage {
    name: string;
    price: string;
    features: string[];
}

// Design Service interface
interface DesignService {
    name: string;
    price: string;
    description: string;
}

// Hosting Package interface
interface HostingPackage {
    duration: string;
    price: string;
}

// Tab component
const Tab = ({
    label,
    isActive,
    onClick
}: {
    label: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${isActive
            ? 'bg-[#FF7A00] text-white shadow-lg'
            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#FF7A00]'
            }`}
    >
        {label}
    </button>
);

// Function to get demo URL based on package name
const getDemoUrl = (packageName: string): string => {
    switch (packageName) {
        case 'Starter':
            return '/1.html';
        case 'Company':
            return '/2.html';
        case 'Business':
            return '/3.html';
        case 'Ultimate':
            return '/4.html';
        default:
            return '/portfolio?kategori=website';
    }
};

// Website Package Card component
const WebsitePackageCard = ({
    pkg,
    index
}: {
    pkg: WebsitePackage;
    index: number;
}) => (<motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transform hover:scale-105 transition-all duration-300 relative border border-gray-100 flex flex-col h-full"
>

    <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#061E44] mb-2">{pkg.name}</h3>
        <div className="text-3xl font-bold text-[#FF7A00] mb-4">{pkg.price}</div>
    </div>        <div className="space-y-3 mb-6 flex-1">
        {pkg.features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
            </div>
        ))}

        <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 text-sm">{pkg.maintenance}</span>
        </div>

        <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 text-sm">{pkg.revisions}</span>
        </div>

        {pkg.bonus && (
            <div className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#FF7A00] text-sm font-medium">{pkg.bonus}</span>
            </div>
        )}
    </div>

    <div className="flex flex-col gap-2">
        <a
            href={`https://wa.me/6282195965483?text=Halo!%20Saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 bg-[#061E44] hover:bg-[#FF7A00] text-white font-medium rounded-lg transition-all duration-300 text-center block"
        >
            Pesan Sekarang
        </a>
        {pkg.name === 'Undangan Digital' ? (
            <div className="flex flex-col gap-2">
                <a
                    href="/undangan1.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-6 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-medium rounded-lg transition-all duration-300 text-center block"
                >
                    Lihat Contoh 1
                </a>
                <a
                    href="/udangan2.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-6 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-medium rounded-lg transition-all duration-300 text-center block"
                >
                    Lihat Contoh 2
                </a>
            </div>
        ) : (
            <a
                href={getDemoUrl(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-6 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-medium rounded-lg transition-all duration-300 text-center block"
            >
                Lihat Contoh
            </a>
        )}
    </div>
</motion.div>
);

// Mobile App Package Card component
const MobileAppPackageCard = ({
    pkg,
    index
}: {
    pkg: MobileAppPackage;
    index: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
        <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#061E44] mb-2">{pkg.name}</h3>
            <div className="text-3xl font-bold text-[#FF7A00] mb-4">{pkg.price}</div>
        </div>        <div className="space-y-3 mb-6 flex-1">
            {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                </div>
            ))}
        </div>

        <div className="flex flex-col gap-2">
            <a
                href={`https://wa.me/6282195965483?text=Halo!%20Saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-[#061E44] hover:bg-[#FF7A00] text-white font-medium rounded-lg transition-all duration-300 text-center block"
            >
                Pesan Sekarang
            </a>
            <a
                href="/portfolio?kategori=mobile-app"
                className="w-full py-2 px-6 bg-transparent border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-medium rounded-lg transition-all duration-300 text-center block"
            >
                Lihat Contoh
            </a>
        </div>
    </motion.div>
);

// Design Service Card component
const DesignServiceCard = ({
    service,
    index
}: {
    service: DesignService;
    index: number;
}) => (<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-gray-100 hover:border-[#FF7A00]/30 group flex flex-col h-full"
>
    <div className="flex items-start justify-between mb-4 flex-1">
        <div className="flex-1">
            <h4 className="font-bold text-[#061E44] text-lg mb-2 group-hover:text-[#FF7A00] transition-colors duration-300">
                {service.name}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
        </div>
        <div className="ml-4">
            <div className="bg-[#FF7A00]/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4V5z" />
                </svg>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-[#FF7A00]">{service.price}</span>
        <div className="flex gap-2">
            <a
                href={`https://wa.me/6282195965483?text=Halo!%20Saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.name)}.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#061E44] hover:bg-[#FF7A00] text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
                Pesan
            </a>
            <a
                href="/portfolio?kategori=desain"
                className="px-4 py-2 bg-transparent border border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
                Contoh
            </a>
        </div>
    </div>
</motion.div>
);

// Hosting Package Card component
const HostingPackageCard = ({
    pkg,
    index
}: {
    pkg: HostingPackage;
    index: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition-all duration-300 flex justify-between items-center"
    >
        <span className="font-semibold text-[#061E44]">{pkg.duration}</span>
        <span className="text-[#FF7A00] font-bold">{pkg.price}</span>
    </motion.div>
);

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState('website');
    const websiteSliderRef = useRef<HTMLDivElement>(null);
    const mobileSliderRef = useRef<HTMLDivElement>(null);
    const designSliderRef = useRef<HTMLDivElement>(null);
    const [websiteActiveIdx, setWebsiteActiveIdx] = useState(0);
    const [mobileActiveIdx, setMobileActiveIdx] = useState(0);
    const [designActiveIdx, setDesignActiveIdx] = useState(0);    // Update activeIdx on scroll for website slider
    useEffect(() => {
        const slider = websiteSliderRef.current;
        if (!slider) return;

        const onScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const containerWidth = slider.clientWidth;
            const newActiveIdx = Math.round(scrollLeft / containerWidth);
            setWebsiteActiveIdx(newActiveIdx);
        };

        slider.addEventListener("scroll", onScroll, { passive: true });
        return () => slider.removeEventListener("scroll", onScroll);
    }, [activeTab]);    // Update activeIdx on scroll for mobile slider
    useEffect(() => {
        const slider = mobileSliderRef.current;
        if (!slider) return;

        const onScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const containerWidth = slider.clientWidth;
            const newActiveIdx = Math.round(scrollLeft / containerWidth);
            setMobileActiveIdx(newActiveIdx);
        };

        slider.addEventListener("scroll", onScroll, { passive: true });
        return () => slider.removeEventListener("scroll", onScroll);
    }, [activeTab]);    // Update activeIdx on scroll for design slider
    useEffect(() => {
        const slider = designSliderRef.current;
        if (!slider) return;

        const onScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const containerWidth = slider.clientWidth;
            const newActiveIdx = Math.round(scrollLeft / containerWidth);
            setDesignActiveIdx(newActiveIdx);
        };

        slider.addEventListener("scroll", onScroll, { passive: true });
        return () => slider.removeEventListener("scroll", onScroll);
    }, [activeTab]);

    // Reset active index when tab changes
    useEffect(() => {
        setWebsiteActiveIdx(0);
        setMobileActiveIdx(0);
        setDesignActiveIdx(0);

        // Reset scroll position for all sliders when tab changes
        if (websiteSliderRef.current) {
            websiteSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
        if (mobileSliderRef.current) {
            mobileSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
        if (designSliderRef.current) {
            designSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeTab]);    // Website packages data
    const websitePackages: WebsitePackage[] = [        {
            name: 'Starter',
            price: 'Mulai dari Rp 300.000',
            features: [
                '✅ Landing Page/Company Profile (1-3 Halaman)',
                '✅ Responsive Design (Mobile & Desktop)',
                '✅ Contact Form & Google Maps Integration',
                '✅ Basic SEO Setup (Meta Tags, Keywords)',
                '✅ SSL Certificate & Domain Setup'
            ],
            maintenance: 'Biaya Maintenance: Rp 100.000 / bulan',
            revisions: 'Maksimal 3x Revisi'
        },{
            name: 'Company',
            price: 'Mulai dari Rp 750.000',
            features: [
                '✅ Multi Page Website (5-8 Halaman)',
                '✅ Gallery & Portfolio Section',
                '✅ Advanced SEO Optimization',
                '✅ Social Media Integration',
                '✅ Admin Panel Lengkap dengan User Management',
                '✅ Contact Form dengan Email Notification',
                '✅ Testimonial & Review System'
            ],
            maintenance: 'Biaya Maintenance: Rp 200.000 / bulan',
            revisions: 'Maksimal 5x Revisi'
        },        {
            name: 'Business',
            price: 'Mulai dari Rp 1.700.000',
            features: [
                '✅ E-commerce Platform dengan Katalog Produk',
                '✅ Payment Gateway Integration (Midtrans/Xendit)',
                '✅ Inventory Management System',
                '✅ User Registration & Login System',
                '✅ Email Marketing Integration',
                '✅ Analytics Dashboard & Reports',
                '✅ API Integration (Shipping, Payment)',
                '✅ Advanced Admin Panel dengan Multi-Role',
                '✅ Shopping Cart & Wishlist'
            ],
            maintenance: 'Biaya Maintenance: Rp 500.000 / bulan',
            revisions: 'Maksimal 10x Revisi'
        },        {
            name: 'Ultimate',
            price: 'Mulai dari Rp 5.000.000',
            features: [
                '✅ Custom Web Application (Unlimited Pages)',
                '✅ Complex Database Architecture',
                '✅ Multiple User Roles & Permissions',
                '✅ Advanced Security Features (2FA, Encryption)',
                '✅ Third-party API Integrations',
                '✅ Custom CMS Development',
                '✅ Performance Optimization & CDN',
                '✅ Dedicated Support Team',
                '✅ Mobile App Integration Ready',
                '✅ Advanced Analytics & Reporting',
                '✅ Automated Backup & Recovery',
                '✅ Enterprise-level Scalability & Architecture'
            ],
            maintenance: 'Biaya Maintenance: Rp 1.000.000 / bulan',
            revisions: 'Maksimal 15x Revisi'
        },
        {
            name: 'Undangan Digital',
            price: 'Rp 150.000',
            features: [
                '✅ Doa & Ucapan Interaktif',
                '✅ Animation Menarik & Modern',
                '✅ Sistem Reservasi Kehadiran',
                '✅ Google Calendar Integration',
                '✅ Fitur Music Background',
                '✅ Galeri Foto & Video',
                '✅ Peta Lokasi Interaktif',
                '✅ Fitur Cerita Cinta',
                '✅ Tombol Share Social Media',
                '✅ Request Desain Custom',
                '✅ Countdown Timer Pernikahan',
                '✅ Template Design Premium'
            ],
            maintenance: 'Tanpa Biaya Maintenance',
            revisions: 'Maksimal 3x Revisi',
            bonus: '🆕 PAKET BARU! Special Price!'
        }
    ];

    // Mobile app packages data
    const mobileAppPackages: MobileAppPackage[] = [
        {
            name: 'Bronze',
            price: 'Rp 2.000.000',
            features: [
                'Aplikasi Mobile (Maks. 5 Screen)',
                'Integrasi Data Sederhana (Firebase/Supabase)'
            ]
        },
        {
            name: 'Silver',
            price: 'Rp 3.000.000',
            features: [
                'Aplikasi Mobile (Maks. 10 Screen)',
                'Integrasi Data Sederhana (Firebase/Supabase)'
            ]
        },
        {
            name: 'Gold',
            price: 'Rp 5.000.000',
            features: [
                'Aplikasi Mobile (Maks. 30 Screen)',
                'Integrasi Data Kompleks (Firebase/Supabase)'
            ]
        }
    ];

    // Mobile app general features
    const mobileAppFeatures = [
        'Konsultasi & Perencanaan Proyek',
        'Pengembangan Aplikasi Mobile (Android)',
        'Integrasi API Pihak Ketiga',
        'Pengujian & Peluncuran Aplikasi',
        'Free Maintenance & Dukungan Selama 1 Bulan'
    ];    // Design services data
    const designServices: DesignService[] = [
        {
            name: 'UI/UX Desain',
            price: 'Mulai dari Rp 200.000',
            description: 'Termasuk Moodboard, Prototype & 3x Revisi'
        },
        {
            name: 'Desain Logo',
            price: 'Mulai dari Rp 250.000',
            description: 'Termasuk Revisi Tanpa Batas'
        },
        {
            name: 'Desain Poster',
            price: 'Mulai dari Rp 50.000',
            description: 'Termasuk 3x Revisi (+ sertifikat jika diperlukan)'
        },
        {
            name: 'Edit Foto',
            price: 'Mulai dari Rp 25.000',
            description: 'Editing foto profesional untuk berbagai kebutuhan'
        },
        {
            name: 'Edit Video',
            price: 'Mulai dari Rp 75.000',
            description: 'Editing video untuk konten marketing dan media sosial'
        }
    ];

    // Hosting packages data
    const hostingPackages: HostingPackage[] = [
        { duration: '3 Bulan', price: 'Rp 350.000' },
        { duration: '6 Bulan', price: 'Rp 500.000' },
        { duration: '1 Tahun', price: 'Rp 750.000' },
        { duration: '3 Tahun', price: 'Rp 1.800.000' }
    ]; const tabs = [
        { id: 'website', label: 'Website' },
        { id: 'mobile', label: 'Aplikasi Mobile' },
        { id: 'design', label: 'Desain & Konten' }]; return (
            <section id="pricing-packages" className="py-8 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tabs */}
                    <div className="flex justify-center mb-8 md:mb-12">
                        <div className="flex space-x-2 bg-gray-100 p-2 rounded-lg">
                            {tabs.map((tab) => (
                                <Tab
                                    key={tab.id}
                                    label={tab.label}
                                    isActive={activeTab === tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                />
                            ))}
                        </div>
                    </div>                {/* Tab Content */}
                    <div className="min-h-[400px] md:min-h-[600px]">{/* Website Tab */}
                        {activeTab === 'website' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Mobile Slider */}
                                <div className="md:hidden">
                                    <div className="relative">
                                        <div
                                            ref={websiteSliderRef}
                                            className="overflow-x-auto scrollbar-hide"
                                            style={{ scrollSnapType: 'x mandatory' }}
                                        >
                                            <div className="flex">
                                                {websitePackages.map((pkg, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-full flex-shrink-0 px-4"
                                                        style={{ scrollSnapAlign: 'start' }}
                                                    >
                                                        <WebsitePackageCard pkg={pkg} index={index} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>                                    {/* Slider Dots Indicator */}
                                        <div className="flex justify-center items-center mt-6 space-x-2">
                                            {websitePackages.map((pkg, idx) => (
                                                <button
                                                    key={`website-dot-${idx}`}
                                                    type="button"
                                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${websiteActiveIdx === idx
                                                        ? 'bg-[#FF7A00] scale-110'
                                                        : 'bg-[#FF7A00]/30 hover:bg-[#FF7A00]/50'
                                                        }`}
                                                    onClick={() => {
                                                        const slider = websiteSliderRef.current;
                                                        if (slider) {
                                                            const containerWidth = slider.clientWidth;
                                                            slider.scrollTo({ left: idx * containerWidth, behavior: 'smooth' });
                                                            setWebsiteActiveIdx(idx);
                                                        }
                                                    }}
                                                    aria-label={`Go to website slide ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Grid */}
                                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    {websitePackages.map((pkg, index) => (
                                        <WebsitePackageCard key={pkg.name} pkg={pkg} index={index} />
                                    ))}
                                </div>

                                {/* Important Notes */}
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-8">
                                    <h4 className="font-semibold text-[#061E44] mb-3">Catatan Penting:</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Harga paket di atas belum termasuk biaya hosting.</li>
                                        <li>• Biaya maintenance hanya mencakup perubahan/update konten, bukan penambahan fitur.</li>
                                        <li>• Biaya penambahan fitur baru mulai dari Rp 100.000.</li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}                    {/* Mobile App Tab */}
                        {activeTab === 'mobile' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Mobile Slider */}
                                <div className="md:hidden">
                                    <div className="relative">
                                        <div
                                            ref={mobileSliderRef}
                                            className="overflow-x-auto scrollbar-hide"
                                            style={{ scrollSnapType: 'x mandatory' }}
                                        >
                                            <div className="flex">
                                                {mobileAppPackages.map((pkg, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-full flex-shrink-0 px-4"
                                                        style={{ scrollSnapAlign: 'start' }}
                                                    >
                                                        <MobileAppPackageCard pkg={pkg} index={index} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>                                    {/* Slider Dots Indicator */}
                                        <div className="flex justify-center items-center mt-6 space-x-2">
                                            {mobileAppPackages.map((pkg, idx) => (
                                                <button
                                                    key={`mobile-dot-${idx}`}
                                                    type="button"
                                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${mobileActiveIdx === idx
                                                        ? 'bg-[#FF7A00] scale-110'
                                                        : 'bg-[#FF7A00]/30 hover:bg-[#FF7A00]/50'
                                                        }`}
                                                    onClick={() => {
                                                        const slider = mobileSliderRef.current;
                                                        if (slider) {
                                                            const containerWidth = slider.clientWidth;
                                                            slider.scrollTo({ left: idx * containerWidth, behavior: 'smooth' });
                                                            setMobileActiveIdx(idx);
                                                        }
                                                    }}
                                                    aria-label={`Go to mobile slide ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Grid */}
                                <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
                                    {mobileAppPackages.map((pkg, index) => (
                                        <MobileAppPackageCard key={pkg.name} pkg={pkg} index={index} />
                                    ))}
                                </div>

                                {/* General Features */}
                                <div className="bg-white rounded-xl p-6 shadow-lg mt-8">
                                    <h4 className="font-semibold text-[#061E44] mb-4 text-center">
                                        Fitur Termasuk (Semua Paket)
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {mobileAppFeatures.map((feature, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}                    {/* Design Services Tab */}
                        {activeTab === 'design' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="max-w-6xl mx-auto">


                                    {/* Mobile Slider */}
                                    <div className="md:hidden">
                                        <div className="relative">
                                            <div
                                                ref={designSliderRef}
                                                className="overflow-x-auto scrollbar-hide"
                                                style={{ scrollSnapType: 'x mandatory' }}
                                            >                                            <div className="flex">
                                                {designServices.map((service, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-full flex-shrink-0 px-4"
                                                        style={{ scrollSnapAlign: 'start' }}
                                                    >
                                                        <DesignServiceCard service={service} index={index} />
                                                    </div>
                                                ))}
                                            </div>
                                            </div>                                        {/* Slider Dots Indicator */}
                                            <div className="flex justify-center items-center mt-6 space-x-2">
                                                {designServices.map((service, idx) => (
                                                    <button
                                                        key={`design-dot-${idx}`}
                                                        type="button"
                                                        className={`h-3 w-3 rounded-full transition-all duration-300 ${designActiveIdx === idx
                                                            ? 'bg-[#FF7A00] scale-110'
                                                            : 'bg-[#FF7A00]/30 hover:bg-[#FF7A00]/50'
                                                            }`}
                                                        onClick={() => {
                                                            const slider = designSliderRef.current;
                                                            if (slider) {
                                                                const containerWidth = slider.clientWidth;
                                                                slider.scrollTo({ left: idx * containerWidth, behavior: 'smooth' });
                                                                setDesignActiveIdx(idx);
                                                            }
                                                        }}
                                                        aria-label={`Go to design slide ${idx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>                                    {/* Desktop Grid */}                                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {designServices.map((service, index) => (
                                            <DesignServiceCard key={service.name} service={service} index={index} />
                                        ))}
                                    </div>

                                    {/* CTA for Design Services */}
                                    <div className="mt-12 text-center bg-gradient-to-r from-[#FF7A00]/10 to-orange-200/10 rounded-2xl p-8">
                                        <h4 className="text-xl font-bold text-[#061E44] mb-2">
                                            Butuh Solusi Kreatif Khusus?
                                        </h4>
                                        <p className="text-gray-600 mb-4">
                                            Konsultasikan kebutuhan desain dan konten Anda dengan tim kreatif kami
                                        </p>
                                        <a
                                            href="https://wa.me/6282195965483?text=Halo!%20Saya%20ingin%20konsultasi%20mengenai%20layanan%20desain%20dan%20konten."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 bg-[#FF7A00] hover:bg-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                                            </svg>
                                            Konsultasi Gratis
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}                </div>
                </div>
            </section>
        );
}

// Separate Hosting Section Component
export function HostingSection() {
    const hostingSliderRef = useRef<HTMLDivElement>(null);
    const [hostingActiveIdx, setHostingActiveIdx] = useState(0);

    // Update activeIdx on scroll for hosting slider
    useEffect(() => {
        const slider = hostingSliderRef.current;
        if (!slider) return;

        const onScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const containerWidth = slider.clientWidth;
            const newActiveIdx = Math.round(scrollLeft / containerWidth);
            setHostingActiveIdx(newActiveIdx);
        };

        slider.addEventListener("scroll", onScroll, { passive: true });
        return () => slider.removeEventListener("scroll", onScroll);    }, []);

    // Hosting packages data - Updated pricing based on market reference  
    const hostingPackages: HostingPackage[] = [
        { duration: '3 Bulan', price: 'Rp 350.000' },
        { duration: '6 Bulan', price: 'Rp 650.000' },
        { duration: '1 Tahun', price: 'Rp 1.200.000' },
        { duration: '3 Tahun', price: 'Rp 3.200.000' }
    ]; return (
        <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#061E44] mb-4">
                        Paket Hosting
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Pilihan paket hosting yang terjangkau dan reliable untuk website Anda
                    </p>
                </div>

                {/* Mobile Slider */}
                <div className="md:hidden">
                    <div className="relative">
                        <div
                            ref={hostingSliderRef}
                            className="overflow-x-auto scrollbar-hide"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            <div className="flex">
                                {hostingPackages.map((pkg, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-4"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                                        >
                                            <div className="bg-gradient-to-r from-[#FF7A00] to-orange-500 p-4 text-center">
                                                <h3 className="text-white font-bold text-lg">{pkg.duration}</h3>
                                            </div>
                                            <div className="p-6 text-center">
                                                <div className="text-3xl font-bold text-[#061E44] mb-2">{pkg.price}</div>
                                                <div className="text-sm text-gray-500">Paket hosting lengkap</div>
                                                <div className="mt-4 space-y-2">
                                                    <div className="flex items-center justify-center text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        SSL Certificate
                                                    </div>
                                                    <div className="flex items-center justify-center text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        24/7 Support
                                                    </div>
                                                    <div className="flex items-center justify-center text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Backup Otomatis
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Dots Indicator */}
                        <div className="flex justify-center items-center mt-6 space-x-2">
                            {hostingPackages.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${hostingActiveIdx === idx
                                        ? 'bg-[#FF7A00] scale-110'
                                        : 'bg-[#FF7A00]/30 hover:bg-[#FF7A00]/50'
                                        }`}
                                    onClick={() => {
                                        const slider = hostingSliderRef.current;
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
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hostingPackages.map((pkg, index) => (
                        <motion.div
                            key={pkg.duration}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                        >
                            <div className="bg-gradient-to-r from-[#FF7A00] to-orange-500 p-4 text-center">
                                <h3 className="text-white font-bold text-lg">{pkg.duration}</h3>
                            </div>
                            <div className="p-6 text-center">
                                <div className="text-3xl font-bold text-[#061E44] mb-2">{pkg.price}</div>
                                <div className="text-sm text-gray-500">Paket hosting lengkap</div>
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center justify-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        SSL Certificate
                                    </div>
                                    <div className="flex items-center justify-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        24/7 Support
                                    </div>
                                    <div className="flex items-center justify-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Backup Otomatis
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}                </div>
            </div>
        </section>
    );
}