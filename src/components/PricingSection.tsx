'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Package data interface
interface PackageData {
    name: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    features: string[];
    estimatedTime: string;
}

// Service data interface
interface ServiceData {
    name: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    description: string;
    icon: React.ReactNode;
}

// Feature check component with checkmark icon
const FeatureCheck = ({ feature, isHighlighted = false }: { feature: string; isHighlighted?: boolean }) => (
    <div className="flex items-start space-x-2 mb-2">
        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={isHighlighted ? "#F97316" : "#0D9488"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
        <span className="text-sm text-gray-600">{feature}</span>
    </div>
);

// Package card component
const PricingCard = ({
    name,
    price,
    originalPrice,
    discount,
    features,
    estimatedTime,
    index
}: {
    name: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    features: string[];
    estimatedTime: string;
    index: number;
}) => {
    return (<motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transform hover:scale-105 transition-all duration-300 flex flex-col h-full border border-gray-100 relative group"
    >        {/* Discount badge removed from here and moved inline with package name */}

        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full opacity-30"></div>

        {/* Card content wrapper with flex-grow to push button to bottom */}        <div className="flex flex-col h-full">
            {/* Package name with inline discount badge */}            <div className="flex flex-wrap items-center mb-2 gap-2">
                <h3 className="text-xl font-bold text-gray-800 relative z-10">{name}</h3>
                {discount && (
                    <div className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full shadow-md whitespace-nowrap">
                        Diskon {discount}
                    </div>
                )}
            </div>

            {/* Estimated time badge */}
            <div className="text-xs font-medium px-2 py-1 bg-teal-50 text-teal-600 rounded-full inline-block mb-4 w-fit relative z-10">
                {estimatedTime}
            </div>

            {/* Features list - flex-grow to take up available space */}
            <div className="flex-grow relative z-10 mb-6">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-2 mb-2">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                ))}
            </div>

            {/* Price and CTA - always at bottom */}
            <div className="relative z-10 mt-auto">
                <div className="mb-4">
                    {originalPrice && (
                        <div className="text-sm text-gray-500 line-through mb-1">
                            {originalPrice}
                        </div>
                    )}
                    <div className="text-2xl font-bold text-orange-500">
                        {price}
                    </div>
                </div>
                <button className="w-full py-3 px-6 bg-gray-700 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Pesan Sekarang</span>
                </button>
            </div>
        </div>
    </motion.div>
    );
};

// Service card component
const ServiceCard = ({ service, index }: { service: ServiceData; index: number }) => (
    <div className="relative pt-6">
        {/* Discount badge for services - positioned outside the card */}
        {/* Service discount badge moved to inline with name */}

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-100 group relative mt-2"
        >        <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>                <div className="flex-grow">
                    <div className="flex flex-wrap items-center mb-2 gap-2">
                        <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                        {service.discount && (
                            <div className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full shadow-md whitespace-nowrap">
                                Diskon {service.discount}
                            </div>
                        )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            {service.originalPrice && (
                                <div className="text-sm text-gray-500 line-through mb-1">
                                    {service.originalPrice}
                                </div>
                            )}
                            <span className="text-2xl font-bold text-orange-500">
                                {service.price}
                            </span>
                        </div>
                        <button className="px-4 py-2 bg-gray-700 hover:bg-orange-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            Pesan
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

// Main component
export default function PricingSection() {
    const pricingSectionRef = useRef<HTMLDivElement>(null);    // Define packages data
    const packages: PackageData[] = [
        {
            name: "Starter",
            price: "Rp 150.000",
            originalPrice: "Rp 500.000",
            discount: "70%",
            features: [
                "Landing Page/Blog Sederhana",
                "1–3 Halaman",
                "Form Kontak"
            ],
            estimatedTime: "3–5 hari"
        },
        {
            name: "Company",
            price: "Rp 500.000",
            originalPrice: "Rp 1.000.000",
            discount: "50%",
            features: [
                "Company Profile",
                "5–7 Halaman",
                "Form Kontak",
                "Google Maps",
                "Social Media Integration"
            ],
            estimatedTime: "7–14 hari"
        },
        {
            name: "Business",
            price: "Rp 1.000.000",
            originalPrice: "Rp 2.000.000",
            discount: "50%",
            features: [
                "E-Commerce Website",
                "10–15 Halaman",
                "Product Management",
                "Checkout System",
                "Payment Gateway",
                "Admin Dashboard"
            ],
            estimatedTime: "14–21 hari"
        },
        {
            name: "Ultimate",
            price: "Rp 2.500.000",
            originalPrice: "Rp 4.000.000",
            discount: "38%",
            features: [
                "Custom Web Application",
                "User Authentication",
                "Database Integration",
                "API Development",
                "Admin Dashboard",
                "Analytic Tools",
                "Multi-language Support"
            ],
            estimatedTime: "21–30 hari"
        }
    ];

    // General features included in all packages
    const generalFeatures = [
        "Mobile Responsive",
        "Tablet Responsive",
        "Laptop & PC Responsive",
        "SEO Friendly",
        "Desain Modern & Bersih",
        "Free SSL Certificate",
        "Browser Compatibility",
        "Free Konsultasi sebelum deal",
        "Technical Support 24/7",
        "Support: Free maintenance 1 bulan pertama"
    ];    // Premium features removed as requested    // Define services data
    const services: ServiceData[] = [
        {
            name: "UI/UX Design",
            price: "Rp 50.000",
            originalPrice: "Rp 800.000",
            discount: "94%",
            description: "Desain interface dan user experience yang modern dan user-friendly",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: "Logo Design",
            price: "Rp 50.000",
            originalPrice: "Rp 300.000",
            discount: "83%",
            description: "Pembuatan logo profesional yang mencerminkan identitas brand Anda",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
            )
        },
        {
            name: "Poster Design",
            price: "Rp 50.000",
            originalPrice: "Rp 150.000",
            discount: "67%",
            description: "Desain poster menarik untuk promosi event, produk, atau layanan",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: "Social Media Content",
            price: "Rp 50.000",
            originalPrice: "Rp 200.000",
            discount: "75%",
            description: "Konten visual untuk Instagram, Facebook, dan platform media sosial lainnya",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
            )
        },
        {
            name: "Moodboard Design",
            price: "Rp 50.000",
            originalPrice: "Rp 250.000",
            discount: "80%",
            description: "Panduan visual dan konsep desain untuk project branding atau website",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            name: "Prototype Design",
            price: "Rp 50.000",
            originalPrice: "Rp 600.000",
            discount: "92%",
            description: "Prototype interaktif untuk aplikasi mobile atau web",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: "Photo Editing",
            price: "Rp 50.000",
            originalPrice: "Rp 100.000",
            discount: "50%",
            description: "Edit dan retouch foto profesional untuk kebutuhan bisnis",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            )
        },
        {
            name: "Video Editing",
            price: "Rp 50.000",
            originalPrice: "Rp 400.000",
            discount: "88%",
            description: "Edit video promosi, tutorial, atau konten media sosial",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )
        }
    ]; return (
        <section
            id="pricing"
            ref={pricingSectionRef}
            className="py-20 bg-gray-50 relative overflow-hidden"
            style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23F97316\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                backgroundSize: '200px 200px'
            }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-orange-100/20 dark:bg-orange-900/10 filter blur-3xl"></div>
            <div className="absolute top-1/3 left-10 w-6 h-6 bg-teal-400 rounded-full opacity-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-10"></div>
            <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-teal-300 rounded-full opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-3">
                        <span className="bg-orange-500 text-white text-sm font-medium py-1 px-3 rounded-full">
                            HARGA
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket & Harga <span className="text-orange-500">Pembuatan Website</span></h2>
                </div>                {/* Pricing cards grid */}
                {/* Mobile: Horizontal Scroll */}
                <div className="md:hidden">
                    <div className="overflow-x-auto scrollbar-hide pb-4">
                        <div className="flex space-x-4 px-4" style={{ width: 'max-content' }}>                            {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.05 * index, duration: 0.5 }}
                                className="flex-shrink-0 w-80"
                            >
                                <PricingCard
                                    name={pkg.name}
                                    price={pkg.price}
                                    originalPrice={pkg.originalPrice}
                                    discount={pkg.discount}
                                    features={pkg.features}
                                    estimatedTime={pkg.estimatedTime}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                        </div>
                    </div>
                    {/* Scroll indicator for mobile */}
                    <div className="flex justify-center mt-4">
                        <div className="flex space-x-2">
                            {packages.map((_, index) => (
                                <div
                                    key={index}
                                    className="w-2 h-2 rounded-full bg-orange-300"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">                    {packages.map((pkg, index) => (
                    <motion.div
                        key={pkg.name}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.05 * index, duration: 0.5 }}
                    >
                        <PricingCard
                            name={pkg.name}
                            price={pkg.price}
                            originalPrice={pkg.originalPrice}
                            discount={pkg.discount}
                            features={pkg.features}
                            estimatedTime={pkg.estimatedTime}
                            index={index}
                        />
                    </motion.div>
                ))}
                </div>

                {/* General features section */}                <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
                    <h3 className="text-xl font-bold text-center mb-6 text-orange-500">
                        Fitur Semua Paket
                    </h3>                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
                        {generalFeatures.map((feature, index) => (
                            <FeatureCheck key={index} feature={feature} />
                        ))}
                    </div>
                </div>

                {/* CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold mb-4 text-black">Butuh solusi custom?</h3>

                    <a
                        href="#kontak"
                        className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-block"
                    >
                        Konsultasikan
                    </a>
                </motion.div>
            </div>

            {/* Digital Design Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-32">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3">
                        <span className="bg-orange-500 text-white text-sm font-medium py-1 px-3 rounded-full">
                            DESAIN DIGITAL
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        List Layanan & Harga <span className="text-orange-500">Desain Digital</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-900">
                        Layanan desain digital profesional untuk kebutuhan branding dan pemasaran Anda
                    </p>

                </div>                {/* Services Grid */}
                {/* Mobile: Horizontal Scroll */}                <div className="md:hidden mb-16">
                    <div className="overflow-x-auto scrollbar-hide pb-4">
                        <div className="flex space-x-6 px-4" style={{ width: 'max-content' }}>
                            {services.map((service, index) => (
                                <div key={service.name} className="flex-shrink-0 w-80">
                                    <ServiceCard service={service} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Scroll indicator for mobile */}
                    <div className="flex justify-center mt-4">
                        <div className="flex space-x-2">
                            {services.slice(0, 4).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-2 h-2 rounded-full bg-orange-300"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <ServiceCard key={service.name} service={service} index={index} />
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="text-center"
                >
                    <a
                        href="#kontak"
                        className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                        <span>Lihat Semua Layanan</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}