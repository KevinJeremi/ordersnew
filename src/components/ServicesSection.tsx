'use client';

import { useRef, useState, useEffect } from "react";

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Update activeIdx on scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const containerWidth = slider.clientWidth;
      const newActiveIdx = Math.round(scrollLeft / containerWidth);
      setActiveIdx(newActiveIdx);
    };

    slider.addEventListener("scroll", onScroll, { passive: true });
    return () => slider.removeEventListener("scroll", onScroll);
  }, []); const services = [
    {
      title: "Pembuatan Aplikasi",
      description: "Aplikasi mobile dan web yang powerful untuk berbagai kebutuhan bisnis dengan teknologi terdepan. Kompatibel di semua device Mobile, Tablet, Laptop & PC.",
      items: ["Mobile App (Flutter/React Native)", "Web App (Fullstack)", "Progressive Web App", "Cross Platform App", "✓ Mobile Compatible", "✓ Tablet Compatible", "✓ Laptop Compatible", "✓ PC Compatible"],
      iconPath: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    },
    {
      title: "Pembuatan Website",
      description: "Website profesional dan responsif untuk berbagai kebutuhan bisnis dengan desain modern dan fungsionalitas terdepan. Kompatibel di semua device Mobile, Tablet, Laptop & PC.",
      items: ["Company Profile", "E-commerce", "Landing Page", "Portfolio", "Blog", "✓ Mobile Responsive", "✓ Tablet Responsive", "✓ Laptop Responsive", "✓ PC Responsive"],
      iconPath: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9zm0 0a8.997 8.997 0 007.843-4.582M12 21a8.997 8.997 0 01-7.843-4.582m15.686 0A11.953 11.953 0 0112 2.25c-2.998 0-5.74 1.1-7.843 2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    },
    {
      title: "Desain Digital",
      description: "Solusi desain kreatif dan digital yang komprehensif untuk kebutuhan branding dan konten bisnis Anda.",
      items: ["UI/UX", "Logo", "Poster", "Social Media Content", "Moodboard", "Prototype", "Photo Editing", "Video Editing"],
      iconPath: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
    }
  ];
  return (
    <section id="layanan" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#3D8C95]/10 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#FF7A00]/10 to-transparent rounded-tl-full"></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 rounded-full bg-[#3D8C95]/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-10 w-8 h-8 rounded-full bg-[#FF7A00]/20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container-content relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[#FF7A00] font-semibold mb-2">LAYANAN KAMI</span>
          <h2 className="text-4xl font-bold mb-3">Solusi Digital Terpadu</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Kami menyediakan berbagai solusi digital inovatif untuk membantu bisnis Anda bertumbuh dan meningkatkan efisiensi operasional di era digital.
          </p>
        </div>{/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div
              ref={sliderRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                    style={{ scrollSnapAlign: 'start' }}
                  >                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 p-6">
                      {/* Modern Icon Container */}
                      <div className="relative mb-6">
                        <div className="bg-gradient-to-br from-[#FF7A00]/10 to-[#3D8C95]/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:from-[#FF7A00]/20 group-hover:to-[#3D8C95]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#FF7A00] group-hover:text-[#3D8C95] transition-colors duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                          </svg>
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#3D8C95]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-[#061E44] group-hover:text-[#FF7A00] transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                      {/* Service Items List */}
                      <ul className="grid grid-cols-2 gap-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#3D8C95] mr-3 flex-shrink-0"></div>
                            <span className="group-hover:text-[#061E44] transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>            {/* Slider Dots Indicator */}
            <div className="flex justify-center items-center mt-6 space-x-2 bg-transparent">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`h-3 w-3 rounded-full border-0 outline-none shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] focus-visible:ring-offset-2 transition-all duration-300 ${activeIdx === idx
                    ? 'bg-[#FF7A00] scale-110'
                    : 'bg-[#FF7A00]/30 hover:bg-[#FF7A00]/50'
                    }`}
                  onClick={() => {
                    const slider = sliderRef.current;
                    if (slider) {
                      const containerWidth = slider.clientWidth;
                      slider.scrollTo({ left: idx * containerWidth, behavior: 'smooth' });
                    }
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 p-8">
              {/* Modern Icon Container */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-[#FF7A00]/10 to-[#3D8C95]/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:from-[#FF7A00]/20 group-hover:to-[#3D8C95]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#FF7A00] group-hover:text-[#3D8C95] transition-colors duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                  </svg>
                </div>
                {/* Background Pattern */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#3D8C95]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-[#061E44] group-hover:text-[#FF7A00] transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Service Items List */}
              <ul className="grid grid-cols-2 gap-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#3D8C95] mr-3 flex-shrink-0"></div>
                    <span className="group-hover:text-[#061E44] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
