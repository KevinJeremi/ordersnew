'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import styles from '../app/styles.module.css';

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
    }, []);

    useEffect(() => {
        let ticking = false;

        const updateScrollY = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', updateScrollY, { passive: true });
        return () => window.removeEventListener('scroll', updateScrollY);
    }, [handleScroll]); return (<section
        className={styles.heroSection}
        style={{
            backgroundPositionY: `calc(0% + ${scrollY * 0.1}px)`,
        }}
    >
        {/* Overlay gelap untuk meningkatkan kontras */}
        <div className="absolute inset-0 bg-black/25 z-0"></div>

        <div className={`${styles.container} ${styles.heroContainer} relative z-10`}>
            <div
                className={`${styles.heroContent} ${styles.heroContentParallax}`}
                style={{
                    transform: `translateY(${scrollY * -0.1}px)`
                }}
            >                    <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                    <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Solusi Digital</span> <br />
                    <span className="text-white">untuk <span className="text-[#FF7A00]">Bisnis Modern</span></span>
                </h1>
                <p className="text-white text-lg mb-8 max-w-lg drop-shadow-lg font-medium">
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
            <div
                className={`${styles.heroImage} ${styles.heroContentParallax}`}
                style={{
                    transform: `translateY(${scrollY * -0.05}px)`
                }}
            >
            </div>
        </div>
    </section>
    );
}
