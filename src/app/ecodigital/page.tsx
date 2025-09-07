import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EcodigitalSection from '@/components/EcodigitalSection'; // Impor komponen baru
import { FaLeaf, FaRecycle, FaWater, FaGlobe, FaServer, FaUsers, FaArrowRight } from 'react-icons/fa';

// Data untuk kartu inisiatif agar lebih mudah dikelola
const initiatives = [
    {
        icon: FaServer,
        title: "Hosting Ramah Lingkungan",
        description: "Kami bermitra dengan penyedia hosting yang menggunakan 100% energi terbarukan.",
        color: "green"
    },
    {
        icon: FaRecycle,
        title: "Pengembangan Efisien",
        description: "Menerapkan kode yang dioptimalkan untuk mengurangi beban server dan konsumsi energi.",
        color: "teal"
    },
    {
        icon: FaWater,
        title: "Desain Berkelanjutan",
        description: "Mendesain antarmuka yang ringan dan cepat untuk mengurangi penggunaan energi di perangkat pengguna.",
        color: "emerald"
    },
    {
        icon: FaUsers,
        title: "Edukasi & Transparansi",
        description: "Mengedukasi klien tentang praktik digital berkelanjutan dan melaporkan jejak karbon proyek.",
        color: "sky"
    }
];

export default function EcodigitalPage() {
    return (
        <>
            <Header />
            <main>
                {/* 1. Hero Section Baru yang Imersif */}
                <EcodigitalSection />

                {/* 2. Konten Utama dengan Desain yang Disesuaikan */}
                <section className="py-20 sm:py-24 bg-gray-50">
                    <div className="container mx-auto px-4">

                        {/* Penjelasan Apa itu Ecodigital */}
                        <div className="max-w-4xl mx-auto mb-20 text-center">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Apa itu <span className="text-green-600">Ecodigital</span>?
                            </h2>
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                    Ecodigital adalah pendekatan holistik kami dalam mengintegrasikan praktik ramah lingkungan ke dalam setiap aspek layanan digital. Ini bukan hanya tentang menggunakan server 'hijau', tetapi tentang keseluruhan siklus hidup produk digital—mulai dari konsep, desain, pengembangan, hingga pemeliharaan.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium text-gray-700">
                                    Tujuan kami adalah menciptakan solusi digital yang tidak hanya efektif untuk bisnis Anda, tetapi juga memberikan dampak positif bagi planet kita.
                                </p>
                            </div>
                        </div>

                        {/* Inisiatif Kami */}
                        <div className="mb-20">
                            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                                Pilar Inisiatif <span className="text-teal-600">Berkelanjutan</span> Kami
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {initiatives.map((item, index) => {
                                    const Icon = item.icon;
                                    const colors = {
                                        green: { bg: 'bg-green-100', text: 'text-green-700', shadow: 'hover:shadow-green-500/20' },
                                        teal: { bg: 'bg-teal-100', text: 'text-teal-700', shadow: 'hover:shadow-teal-500/20' },
                                        emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700', shadow: 'hover:shadow-emerald-500/20' },
                                        sky: { bg: 'bg-sky-100', text: 'text-sky-700', shadow: 'hover:shadow-sky-500/20' },
                                    };
                                    const color = colors[item.color as keyof typeof colors] || colors.green;

                                    return (
                                        <div key={index} className={`bg-white rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${color.shadow}`}>
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${color.bg}`}>
                                                <Icon className={`text-3xl ${color.text}`} />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center bg-white p-10 rounded-3xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                Bergabunglah dengan Gerakan Ecodigital
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Mari bersama-sama menciptakan masa depan digital yang lebih hijau dan berkelanjutan untuk generasi mendatang.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 group"
                            >
                                Mulai Proyek Berkelanjutan
                                <FaArrowRight className="ml-3 text-base group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
