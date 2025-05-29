'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/styles.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            {/* Decorative circles */}      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-white/5 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white/5 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
            <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-white/5"></div>
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>

            {/* Additional decorative elements */}
            <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-[#FF7A00]/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-[#3D8C95]/30 animate-ping" style={{ animationDuration: '4s' }}></div>

            <div className={`${styles.container} ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                        <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Solusi Digital</span> <br />
                        <span className="text-white">untuk <span className="text-[#FF7A00]">Bisnis Modern</span></span>
                    </h1>
                    <p className="text-white/90 text-lg mb-8 max-w-lg drop-shadow-md font-medium">
                        Kami membantu bisnis Anda berkembang dengan teknologi terkini yang inovatif dan terpercaya.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Link href="#kontak" className={styles.primaryButton}>
                            Hubungi Kami
                        </Link>
                        <Link href="#layanan" className={styles.outlineButton}>
                            Lihat Layanan
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <div className="relative h-64 w-64 md:h-80 md:w-80 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-slow"></div>
                        <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>            <div className="absolute inset-8 bg-white/30 backdrop-blur-sm rounded-full flex flex-col items-center justify-center shadow-lg">
                            <div className="w-24 h-24 relative mb-2">
                                <Image
                                    src="/images/logo.png"
                                    alt="ORDERS Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </div>              <div className="text-[#FF7A00] font-bold text-4xl drop-shadow-sm">ORDERS</div>
                            <div className="text-sm text-white/90 mt-1">Organize. Develop. Thrive.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
