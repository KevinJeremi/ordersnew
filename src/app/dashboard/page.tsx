'use client';

import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function DashboardPage() {
    return (
        <>
            <Header />            {/* Main Content */}
            <main>
                {/* About Section */}
                <AboutSection />

                {/* Services Section */}
                <ServicesSection />
            </main>

            <Footer />
            <ScrollToTop />
        </>
    );
}
