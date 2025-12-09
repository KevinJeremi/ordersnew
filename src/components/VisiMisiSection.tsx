'use client';
import { useState, useEffect } from 'react';
import { FaEye, FaBullseye } from 'react-icons/fa';
import styles from '../app/styles.module.css';

export default function VisiMisiSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="visi-misi" className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
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
                            VISI & MISI
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Komitmen Kami untuk <span className="text-orange-500">Indonesia</span>
                    </h2>
                </div>

                {/* Visi & Misi Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Visi Card */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 h-full transform transition-all hover:scale-105 hover:shadow-xl group">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl mr-4 group-hover:scale-110 transition-all">
                                    <FaEye className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Menjadi mitra digital terdepan yang mendorong inovasi dan pertumbuhan berkelanjutan bagi setiap bisnis di Indonesia.
                            </p>
                        </div>
                    </div>

                    {/* Misi Card */}
                    <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100 h-full transform transition-all hover:scale-105 hover:shadow-xl group">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-xl mr-4 group-hover:scale-110 transition-all">
                                    <FaBullseye className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Memberikan solusi digital berkualitas tinggi yang fleksibel dan terjangkau, serta mengedepankan praktik ramah lingkungan dalam setiap proyek.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom highlight section */}
                <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                </div>
            </div>
        </section>
    );
}
