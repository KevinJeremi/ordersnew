import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EcodigitalSection from '@/components/EcodigitalSection';
import { FaArrowRight, FaSeedling, FaUserGraduate, FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

export default function EcodigitalPage() {
    return (
        <>
            <Header />
            <main>
                {/* 1. Hero Section Baru yang Imersif */}
                <EcodigitalSection />

                {/* 2. Konten Utama dengan Desain yang Disesuaikan */}
                <section className="py-20 sm:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 space-y-32">

                        <Reveal>
                            {/* Ekosistem Baciraro (moved to top) */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 bg-white">
                                        <Image
                                            src="/images/ecosistem/BACIRARO.png"
                                            alt="Logo Ekosistem Baciraro Recycle sebagai pusat kolaborasi circular economy"
                                            fill
                                            className="object-contain p-6"
                                            sizes="(max-width:768px)100vw,50vw"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                        Ekosistem <span className="text-teal-600">Baciraro Recycle</span>
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Baciraro Recycle adalah mitra kunci dalam inisiatif Ecodigital kami—sebuah ekosistem yang mendorong <strong>circular economy</strong> melalui pemetaan aliran limbah, peningkatan keterlacakan material, serta pemberdayaan pelaku lokal dalam rantai pengelolaan sampah.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={120}>
                            {/* Apa itu Ecodigital */}
                            <div className="max-w-5xl mx-auto text-center">
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                    Apa itu <span className="text-green-600">Ecodigital</span>?
                                </h2>
                                <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-teal-50 pointer-events-none" />
                                    <div className="relative z-10 space-y-5 text-left md:text-center">
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Ecodigital adalah kerangka strategis kami untuk memastikan setiap solusi teknologi yang kami bangun selaras dengan prinsip keberlanjutan. Bukan hanya soal memilih server hemat energi, tetapi bagaimana desain, arsitektur, infrastruktur, alur data, dan siklus hidup produk digital meminimalkan jejak lingkungan sekaligus memaksimalkan dampak sosial positif.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                            Kami melihat teknologi sebagai katalis ekonomi sirkular—mendukung penelusuran material, optimasi rantai pasok, edukasi perilaku, hingga orkestrasi ekosistem daur ulang melalui data yang akurat dan dapat ditindaklanjuti.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Pendekatan ini memadukan efisiensi energi, desain ringan, pengukuran emisi, serta integrasi ekosistem mitra untuk menghasilkan nilai yang terukur. Inilah jalan kami membangun masa depan digital yang regeneratif, bukan sekadar berkelanjutan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={180}>
                            {/* Orkestrasi Ekosistem */}
                            <div className="bg-white rounded-3xl p-10 shadow-xl ring-1 ring-gray-100 relative overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40" />
                                <div className="absolute -bottom-24 -left-10 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40" />
                                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                    <div className="order-2 lg:order-1 space-y-6">
                                        <h3 className="text-3xl font-bold text-gray-800">
                                            Orkestrasi <span className="text-green-600">Ekosistem Daur Ulang</span>
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Melalui pendekatan platform, kami menghubungkan berbagai pemangku kepentingan—komunitas, operator lapangan, pengolah material, regulator, dan pelaku usaha—dalam satu alur data terpadu. Hal ini meningkatkan transparansi, menurunkan inefisiensi, dan membuka peluang ekonomi baru berbasis limbah bernilai.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Sistem dirancang modular: integrasi IoT ringan, dashboard dampak, API pelaporan, hingga otomasi notifikasi. Semua diarahkan untuk menumbuhkan <em>loop</em> penggunaan ulang material dan menekan pembuangan akhir.
                                        </p>
                                    </div>
                                    <div className="relative order-1 lg:order-2 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 bg-gray-900">
                                        <Image
                                            src="/images/ecosistem/Baciraro_ecosistem.jpg"
                                            alt="Diagram/visual Baciraro ecosystem yang menggambarkan konektivitas aktor daur ulang"
                                            fill
                                            className="object-cover opacity-95"
                                            sizes="(max-width:768px)100vw,50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={240}>
                            {/* Masa Depan Kerja Berkelanjutan */}
                            <div>
                                <div className="max-w-4xl mx-auto text-center mb-12">
                                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                        Membangun Masa Depan Kerja yang <span className="text-emerald-600">Berkelanjutan</span>
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Kami tidak hanya merancang platform hijau, tetapi juga membuka jalur bagi generasi talenta digital yang siap berkontribusi dalam ekonomi rendah karbon dan inklusif.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    <Reveal delay={0}>
                                        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 hover:shadow-emerald-200 transition">
                                            <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                                                <FaSeedling className="text-emerald-600 text-2xl" />
                                            </div>
                                            <h3 className="font-semibold text-xl text-gray-800 mb-3">Inovasi Berkelanjutan</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Eksplorasi solusi AI & data untuk efisiensi sumber daya, pengurangan emisi, serta optimalisasi rantai nilai.
                                            </p>
                                        </div>
                                    </Reveal>
                                    <Reveal delay={120}>
                                        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 hover:shadow-teal-200 transition">
                                            <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                                                <FaUserGraduate className="text-teal-600 text-2xl" />
                                            </div>
                                            <h3 className="font-semibold text-xl text-gray-800 mb-3">Pengembangan Talenta</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Program mentoring, kontribusi open source, dan laboratorium mini untuk meningkatkan kapasitas teknis & etika keberlanjutan.
                                            </p>
                                        </div>
                                    </Reveal>
                                    <Reveal delay={240}>
                                        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 hover:shadow-green-200 transition">
                                            <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-5">
                                                <FaBriefcase className="text-green-600 text-2xl" />
                                            </div>
                                            <h3 className="font-semibold text-xl text-gray-800 mb-3">Peluang Karir Hijau</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Menciptakan peran baru di bidang analitik dampak, desain rendah emisi, dan orkestrasi ekosistem daur ulang.
                                            </p>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={300}>
                            {/* CTA */}
                            <div className="text-center bg-white p-12 rounded-3xl shadow-xl border border-gray-100 max-w-5xl mx-auto">
                                <h2 className="text-4xl font-bold text-gray-800 mb-5">
                                    Bergabunglah dengan Gerakan Ecodigital
                                </h2>
                                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                                    Mari bersama mendorong transformasi digital yang menghasilkan nilai bisnis sekaligus menumbuhkan regenerasi lingkungan.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 group"
                                >
                                    Mulai Proyek Berkelanjutan
                                    <FaArrowRight className="ml-3 text-base group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
