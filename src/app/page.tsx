// filepath: c:\React\my-next-app\src\app\page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import WhyOrdersSection from '@/components/WhyOrdersSection';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <HeroSection />
        <AboutSection />
        <WhyOrdersSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
