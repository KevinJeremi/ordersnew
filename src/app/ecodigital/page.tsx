import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaLeaf, FaRecycle, FaWater, FaGlobe } from 'react-icons/fa';

export default function EcodigitalPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>
                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden" style={{
                    backgroundImage: 'url(/images/ecosistem/p1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-teal-800/70 to-emerald-900/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-transparent rounded-full -translate-y-32 -translate-x-32"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-teal-400/10 to-transparent rounded-full translate-y-24 translate-x-24"></div>
                    <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-400/50 rounded-full"></div>
                    <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-teal-400/40 rounded-full"></div>
                    
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">                            <div className="inline-block mb-6">
                                <span className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-full flex items-center gap-2 w-fit mx-auto shadow-lg">
                                    <FaLeaf className="text-sm" />
                                    ECODIGITAL INITIATIVE
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                                Inisiatif <span className="text-green-400">Ecodigital</span> Kami
                            </h1>
                            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow">
                                Komitmen kami untuk mengurangi jejak karbon digital dan mengintegrasikan teknologi ramah lingkungan dalam setiap layanan yang kami berikan.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        {/* What is Ecodigital */}
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                                Apa itu <span className="text-green-600">Ecodigital</span>?
                            </h2>
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Ecodigital adalah pendekatan holistik kami dalam mengintegrasikan praktik ramah lingkungan ke dalam setiap aspek layanan digital yang kami tawarkan. Dari pengembangan website yang energy-efficient hingga strategi pemasaran digital yang berkelanjutan.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Kami percaya bahwa teknologi digital harus berkontribusi positif terhadap lingkungan, bukan sebaliknya. Oleh karena itu, kami berkomitmen untuk terus berinovasi dalam menciptakan solusi digital yang tidak hanya efektif untuk bisnis Anda, tetapi juga ramah lingkungan.
                                </p>
                            </div>
                        </div>

                        {/* Our Initiatives */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
                                Inisiatif <span className="text-teal-600">Berkelanjutan</span> Kami
                            </h2>                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition-shadow">
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <FaRecycle className="text-green-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Zero Waste Development</h3>
                                    <p className="text-gray-600 text-center">
                                        Menerapkan prinsip zero waste dalam proses pengembangan, dari coding hingga deployment.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100 hover:shadow-xl transition-shadow">
                                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <FaWater className="text-emerald-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Sustainable Design</h3>
                                    <p className="text-gray-600 text-center">
                                        Mendesain interface yang mengoptimalkan penggunaan energi pada perangkat pengguna.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-shadow">
                                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <FaGlobe className="text-blue-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Digital Education</h3>
                                    <p className="text-gray-600 text-center">
                                        Mengedukasi klien tentang praktik digital yang ramah lingkungan.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl shadow-lg p-6 border border-indigo-100 hover:shadow-xl transition-shadow">
                                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <FaLeaf className="text-indigo-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Green Innovation</h3>
                                    <p className="text-gray-600 text-center">
                                        Terus berinovasi menciptakan teknologi yang mendukung keberlanjutan.
                                    </p>
                                </div>
                            </div>                        </div>

                        {/* Call to Action */}
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Bergabunglah dengan <span className="text-green-600">Gerakan</span> Ecodigital
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Mari bersama-sama menciptakan masa depan digital yang lebih hijau dan berkelanjutan untuk generasi mendatang.
                            </p>                            <a
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <FaLeaf className="mr-2" />
                                Mulai Proyek Berkelanjutan
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
