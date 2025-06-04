'use client';

import { useRef, useState, useEffect } from "react";
import Image from 'next/image';

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  // Add state for selected service
  const [selectedService, setSelectedService] = useState(0);
  // Add state for expanded service on mobile
  const [expandedService, setExpandedService] = useState<number | null>(null);

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
  }, []);

  const services = [
    {
      title: "Pembuatan Website",
      description: "Company Profile, E-commerce, Landing Page, Portfolio, Blog",
      icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z",
      bgColor: "bg-orange-50",
      iconBgColor: "text-orange-500",
      image: "/images/services/web.png"
    },
    {
      title: "Pembuatan Aplikasi",
      description: "Mobile App (Flutter/React Native), Web App (Fullstack)",
      icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
      bgColor: "bg-teal-50",
      iconBgColor: "text-teal-500",
      image: "/images/services/android.png"
    },
    {
      title: "Less Coding",
      description: "Pemrograman cepat dan efisien dengan pendekatan low-code dan editing",
      icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z",
      bgColor: "bg-orange-50",
      iconBgColor: "text-orange-500",
      image: "/images/services/less.png"
    },
    {
      title: "Desain Digital",
      description: "UI/UX, Logo, Poster, Social Media Content",
      icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 018.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
      bgColor: "bg-teal-50",
      iconBgColor: "text-teal-500",
      image: "/images/services/desaingrafis.png"
    },
    {
      title: "Moodboard",
      description: "Konsep visual yang menjadi panduan dalam proses pengembangan desain",
      icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
      bgColor: "bg-orange-50",
      iconBgColor: "text-orange-500",
      image: "/images/services/mood_board.png"
    },
    {
      title: "Prototype",
      description: "Model awal yang interaktif untuk pengujian dan pengembangan lebih lanjut",
      icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
      bgColor: "bg-teal-50",
      iconBgColor: "text-teal-500",
      image: "/images/services/prototype.png"
    },
    {
      title: "Photo Editing",
      description: "Penyuntingan dan manipulasi foto profesional untuk kebutuhan visual Anda",
      icon: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
      bgColor: "bg-orange-50",
      iconBgColor: "text-orange-500",
      image: "/images/services/video_foto.png"
    },
    {
      title: "Video Editing",
      description: "Pembuatan dan penyuntingan video untuk konten marketing dan media sosial",
      icon: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375m1.125-1.125H5.25m13.5 0a1.125 1.125 0 01-1.125 1.125m0-2.25a1.125 1.125 0 00-1.125 1.125m1.125-1.125h1.5m-1.5 0a1.125 1.125 0 01-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0112 18.375m9.75-12.75c0 .621-.504 1.125-1.125 1.125H5.25a1.125 1.125 0 110-2.25h15.75a1.125 1.125 0 011.125 1.125z",
      bgColor: "bg-teal-50",
      iconBgColor: "text-teal-500",
      image: "/images/services/video.png"
    },
  ];

  // Memisahkan services menjadi left dan right
  const leftServices = services.slice(0, 4);
  const rightServices = services.slice(4, 8);

  return (<section id="layanan" className="bg-gradient-to-br from-gray-50 to-orange-50/30 py-16 md:py-24 relative overflow-hidden">
    <div className="container-content relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Layanan Kami</h2>
      </div>      {/* Mobile View (Dropdown Layout) - Visible only on small screens */}
      <div className="md:hidden space-y-4 px-2">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow hover:shadow-md transition-all duration-300">
            {/* Service Header - Always Visible */}
            <div 
              className="p-4 cursor-pointer flex items-center justify-between"
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="flex items-center flex-1 min-w-0">
                <div className={`${service.bgColor} p-3 rounded-lg mr-3 flex-shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 ${service.iconBgColor}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 truncate">{service.title}</h3>
              </div>
              
              {/* Dropdown Arrow */}
              <div className="ml-4 flex-shrink-0">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>

            {/* Expanded Content - Image and Description */}
            <div className={`overflow-hidden transition-all duration-500 ${expandedService === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-4 pb-6 border-t border-gray-100">
                {/* Service Image */}
                <div className="mt-4 mb-4 flex justify-center">
                  <div className="relative w-full max-w-sm bg-white p-3 rounded-xl shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="rounded-lg w-full h-auto object-contain"
                      priority={expandedService === index}
                    />
                  </div>
                </div>
                
                {/* Service Description */}
                <div className="px-2">
                  <p className="text-gray-700 text-sm leading-relaxed text-center font-medium">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View (Three-Column Layout) - Hidden on small screens */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
        {/* Left Column Services */}
        <div className="space-y-5">
          {leftServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-5 shadow hover:shadow-md transition-all duration-300 group cursor-pointer ${selectedService === index ? 'ring-2 ring-orange-500' : ''}`}
              onClick={() => setSelectedService(index)}
            >
              {/* Icon Container */}
              <div className="flex items-center mb-3">
                <div className={`${service.bgColor} p-2.5 rounded-lg mr-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-5 h-5 ${service.iconBgColor}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">{service.title}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>        {/* Center Image Column */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-lg bg-white p-6 rounded-2xl shadow-2xl">
            <Image
              src={services[selectedService].image}
              alt={services[selectedService].title}
              width={600}
              height={380}
              className="rounded-xl w-full h-auto object-contain transition-all duration-500"
              priority
            />
            {/* Service Title Overlay */}
            <div className="absolute bottom-2 left-2 right-2">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                <h4 className="text-white font-semibold text-sm text-center">{services[selectedService].title}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Services */}
        <div className="space-y-5">
          {rightServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-5 shadow hover:shadow-md transition-all duration-300 group cursor-pointer ${selectedService === index + 4 ? 'ring-2 ring-orange-500' : ''}`}
              onClick={() => setSelectedService(index + 4)}
            >
              {/* Icon Container */}
              <div className="flex items-center mb-3">
                <div className={`${service.bgColor} p-2.5 rounded-lg mr-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-5 h-5 ${service.iconBgColor}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">{service.title}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
