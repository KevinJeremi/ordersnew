'use client';

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import styles from '../app/styles.module.css';

export default function WhyOrdersSection() {
    return (
        <section id="kenapa-orders" className={styles.whyOrdersSection}>
            <div className={`${styles.container}`}>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 text-[#1F2937]">Kenapa Memilih ORDERS?</h2>
                    <p className="max-w-3xl mx-auto text-[#4B5563]">
                        Kami menawarkan solusi digital berkualitas tinggi dengan harga terjangkau dan layanan terbaik
                        untuk membantu bisnis Anda berkembang di era digital.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Bagian Gambar */}
                    <div className="lg:w-1/2 relative">
                        <div className={styles.whyOrdersImageContainer}>
                            <Image
                                src="/images/whyorders.png"
                                alt="Kenapa Memilih ORDERS"
                                width={600}
                                height={500}
                                className={styles.whyOrdersImage}
                                priority
                            />
                            <div className={styles.whyOrdersImageOverlay}></div>
                        </div>
                    </div>

                    {/* Bagian Konten */}
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-6 text-[#061E44] border-l-4 border-[#FF7A00] pl-4">
                            Solusi Digital yang Berfokus pada Kebutuhan Anda
                        </h3>

                        <div className={styles.whyOrdersFeatures}>                            <div className={styles.whyOrdersFeatureItem}>
                            <div className={styles.whyOrdersCheckIcon}><FaCheck /></div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#1F2937]">Harga Terjangkau</h4>
                            </div>
                        </div>

                            <div className={styles.whyOrdersFeatureItem}>
                                <div className={styles.whyOrdersCheckIcon}><FaCheck /></div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#1F2937]">Kecepatan & Kualitas</h4>
                                </div>
                            </div>

                            <div className={styles.whyOrdersFeatureItem}>
                                <div className={styles.whyOrdersCheckIcon}><FaCheck /></div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#1F2937]">Dukungan 24/7</h4>
                                </div>
                            </div>

                            <div className={styles.whyOrdersFeatureItem}>
                                <div className={styles.whyOrdersCheckIcon}><FaCheck /></div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#1F2937]">Solusi Kustom</h4>
                                </div>
                            </div>

                            <div className={styles.whyOrdersFeatureItem}>
                                <div className={styles.whyOrdersCheckIcon}><FaCheck /></div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#1F2937]">Teknologi Terkini</h4>
                                </div>
                            </div>

                            <div className={styles.whyOrdersFeatureItem}>
                                <div className={styles.whyOrdersCheckIcon}><FaCheck /></div>
                                <div>
                                    <h4 className="text-xl font-semibold text-[#1F2937]">Proses Transparan</h4>
                                </div>
                            </div>
                        </div>                    </div>
                </div>
            </div>
        </section>
    );
}
