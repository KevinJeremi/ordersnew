'use client';
import { useState, useEffect } from 'react';
import {
    FaLightbulb,
    FaRocket,
    FaUsers,
    FaCode
} from 'react-icons/fa';
import styles from '../app/styles.module.css';

export default function AboutSection() {
    // For animation when elements enter viewport
    const [isVisible, setIsVisible] = useState(false); useEffect(() => {
        // Set visibility after component mounts for entrance animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []); return (
        <section id="tentang-kami" className="relative overflow-hidden py-12 md:py-16">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-teal-50 to-teal-100 rounded-tr-full opacity-60"></div>
            <div className="absolute top-1/3 left-10 w-6 h-6 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-teal-400 rounded-full opacity-20"></div>

            {/* Main Content Container */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-3">
                        <span className="bg-gradient-to-r from-orange-600 to-orange-400 text-white text-sm font-medium py-1 px-3 rounded-full">
                            TENTANG KAMI
                        </span>
                    </div>
                </div>

                {/* Split Layout Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Illustration */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full filter blur-xl opacity-70"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full filter blur-lg opacity-70"></div>
                            <img
                                src="/images/logo_about.png"
                                alt="Digital transformation illustration"
                                className="relative z-10 w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <h3 className="text-2xl font-bold mb-4">Inovasi dari Anak Muda <span className="text-orange-500">Berbakat</span></h3>
                        <p className="mb-6 text-gray-600">
                            Orders adalah startup kecil yang didirikan oleh sekelompok anak muda kreatif dan penuh energi. Kami datang dari berbagai latar belakang dengan keahlian unik, namun memiliki satu visi yang sama: menghadirkan solusi digital yang memukau dan efektif.
                        </p>

                        {/* Modern Creative Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                            <div className="bg-gradient-to-br from-white to-orange-50 p-5 rounded-xl shadow-sm border border-orange-100 transform transition-all hover:scale-105 hover:shadow-md group">
                                <div className="flex items-center mb-3">
                                    <div className="bg-orange-500 text-white p-2.5 rounded-lg mr-3 group-hover:scale-110 transition-all">
                                        <FaUsers />
                                    </div>
                                    <h4 className="font-semibold text-gray-800">Tim Muda Berbakat</h4>
                                </div>
                                <p className="text-gray-500 text-sm">Digerakkan oleh beragam talenta muda dengan jiwa inovatif dan semangat kolaborasi</p>
                            </div>


                        </div>                        {/* Quote */}
                        <div className="mb-8 p-4 border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent italic text-gray-700">
                            "Kami percaya bahwa kemajuan digital harus dapat diakses oleh semua bisnis, besar maupun kecil. Inilah yang mendorong kami untuk terus berinovasi."
                        </div>
                    </div>
                </div>                {/* Additional creative highlight section */}
                <div className="mt-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-teal-50 rounded-2xl opacity-30"></div>
                    <div className="relative p-6 md:p-8 border border-gray-100 rounded-2xl shadow-sm">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">Dari <span className="text-orange-500">Kami</span> Untuk <span className="text-teal-500">Indonesia</span></h3>
                                <p className="text-gray-600 mb-4">
                                    Sebagai startup yang digerakkan oleh anak muda, kami membawa perspektif segar dan ide-ide inovatif dalam setiap proyek. Dengan gabungan talenta dari berbagai bidang—desainer, developer, dan ahli strategi—kami menciptakan produk digital yang tidak hanya fungsional tetapi juga memikat secara visual.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Kreatif</span>
                                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Inovatif</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Kolaboratif</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Passionate</span>
                                </div>
                            </div>                            <div className="flex flex-row gap-3 justify-center md:justify-end">
                                <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-lg shadow-sm w-28 md:w-32 transform transition-all hover:scale-105 hover:shadow-md">
                                    <FaLightbulb className="text-orange-500 text-xl md:text-2xl mb-2" />
                                    <span className="text-base md:text-lg font-bold text-gray-800">15+</span>
                                    <span className="text-xs text-gray-500 text-center">Ide Inovatif</span>
                                </div>
                                <div className="flex flex-col items-center p-3 md:p-4 bg-white rounded-lg shadow-sm w-28 md:w-32 transform transition-all hover:scale-105 hover:shadow-md">
                                    <FaCode className="text-teal-500 text-xl md:text-2xl mb-2" />
                                    <span className="text-base md:text-lg font-bold text-gray-800">1000+</span>
                                    <span className="text-xs text-gray-500 text-center">Baris Kode</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
