'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaLeaf, FaArrowRight, FaUsers, FaLightbulb, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Konsep baru dengan fokus pada Green Jobs
const features = [
    { icon: FaLightbulb, text: 'Inovasi Berkelanjutan' },
    { icon: FaUsers, text: 'Pengembangan Talenta' },
    { icon: FaBriefcase, text: 'Peluang Karir Hijau' },
];

export default function EcodigitalSection() {
    return (
        <section id="ecodigital" className="relative h-screen min-h-[800px] w-full flex items-center justify-center text-white overflow-hidden pt-20 sm:pt-24">
            {/* 1. Background Image (Optimized with next/image) */}
            <Image
                src="/images/ecosistem/p1.jpg"
                alt="Lingkungan hijau dan teknologi berkelanjutan"
                layout="fill"
                objectFit="cover"
                className="-z-20"
                quality={90}
            />
            {/* 2. Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-teal-800/70 to-emerald-900/80 -z-10"></div>

            {/* 3. Main Content Layout - Centered */}
            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <div className="max-w-3xl text-center">
                        <div className="bg-black/40 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            >
                                <span className="bg-green-500/30 text-green-200 text-sm font-medium py-2 px-4 rounded-full flex items-center gap-2 w-fit mx-auto shadow-lg border border-green-400/50">
                                    <FaLeaf />
                                    GREEN JOB INITIATIVE
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white my-6 leading-tight drop-shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                            >
                                Membangun Masa Depan yang Berkelanjutan
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                className="text-lg text-gray-200 mb-8 leading-relaxed drop-shadow max-w-2xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                            >
                                Kami tidak hanya menciptakan teknologi hijau, tapi juga membuka jalan bagi generasi baru talenta digital di sektor ekonomi berkelanjutan.
                            </motion.p>

                            {/* Features Icons */}
                            <motion.div
                                className="flex gap-4 mb-10 max-w-md mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                            >
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div key={index} className="bg-white/10 p-4 rounded-xl border border-white/20 text-center flex-1 transform transition-all hover:scale-110 hover:bg-white/20 shadow-lg cursor-pointer">
                                            <Icon className="text-green-300 text-3xl mx-auto mb-2" />
                                            <span className="text-sm font-medium text-white">{feature.text}</span>
                                        </div>
                                    );
                                })}
                            </motion.div>

                            {/* Action Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 group"
                                >
                                    Hubungi Kami
                                    <FaArrowRight className="ml-3 text-base group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
