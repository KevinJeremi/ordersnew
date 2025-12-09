'use client';
import { useState, useEffect } from 'react';
import {
    FaLightbulb,
    FaRocket,
    FaUsers,
    FaCode,
    FaEye,
    FaBullseye
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
                </div>

                {/* Visi & Misi Section - Integrated into About */}
                <div className="mt-16">
                    <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-block mb-3">
                            <span className="bg-gradient-to-r from-teal-600 to-teal-400 text-white text-sm font-medium py-1 px-3 rounded-full">
                                VISI & MISI KAMI
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            Komitmen Kami untuk <span className="text-orange-500">Indonesia</span>
                        </h3>
                    </div>

                    {/* Visi & Misi Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                        {/* Visi Card */}
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100 h-full transform transition-all hover:scale-105 hover:shadow-xl group">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 md:p-4 rounded-xl mr-4 group-hover:scale-110 transition-all">
                                        <FaEye className="text-xl md:text-2xl" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-800">Visi</h4>
                                </div>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    Menjadi mitra digital terdepan yang mendorong inovasi dan pertumbuhan berkelanjutan bagi setiap bisnis di Indonesia.
                                </p>
                            </div>
                        </div>

                        {/* Misi Card */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-teal-100 h-full transform transition-all hover:scale-105 hover:shadow-xl group">
                                <div className="flex items-center mb-6">
                                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 md:p-4 rounded-xl mr-4 group-hover:scale-110 transition-all">
                                        <FaBullseye className="text-xl md:text-2xl" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-gray-800">Misi</h4>
                                </div>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    Memberikan solusi digital berkualitas tinggi yang fleksibel dan terjangkau, serta mengedepankan praktik ramah lingkungan dalam setiap proyek.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom highlight section for vision mission */}
                    <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-teal-50 rounded-2xl opacity-50"></div>
                            <div className="relative p-6 md:p-8 border border-gray-100 rounded-2xl shadow-sm">
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                                        Bersama Membangun <span className="text-orange-500">Masa Depan Digital</span> Indonesia
                                    </h4>
                                    <p className="text-gray-600 max-w-3xl mx-auto">
                                        Dengan kombinasi teknologi terdepan dan komitmen terhadap keberlanjutan, kami hadir untuk mendampingi perjalanan transformasi digital bisnis Anda menuju era yang lebih hijau dan inovatif.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>                </div>
            </div>
        </section>
    );
}
