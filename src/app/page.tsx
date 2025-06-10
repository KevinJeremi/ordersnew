// filepath: c:\React\my-next-app\src\app\page.tsx
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <HeroSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
