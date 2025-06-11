'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../app/styles.module.css';

const TeamSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Team members data moved before useEffect
  const teamMembers = [
    {
      name: 'Aldy Loing',
      position: 'Team Leader',
      image: '/images/team/p1.png'
    },
    {
      name: 'Owen Kalumata',
      position: 'Project Manager',
      image: '/images/team/p5.png'
    },
    {
      name: 'Friestha Arikalang',
      position: 'Team Creative',
      image: '/images/team/p4.png'
    },
    {
      name: 'Jazel Kandou',
      position: 'Quality Control',
      image: '/images/team/p3.png'
    },
    {
      name: 'Kevin Pesik',
      position: 'Developer',
      image: '/images/team/p2.png'
    },
    {
      name: 'Rizky Mema',
      position: 'UI/UX Designer',
      image: '/images/team/p7.png'
    },
    {
      name: 'Natasya Lumingkewas',
      position: 'Finance Officer',
      image: '/images/team/p10.png'
    },
    {
      name: 'Giordyano Anhar',
      position: 'Creative Director',
      image: '/images/team/p8.png'
    }
  ];

  // Update activeIdx on scroll with improved calculation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const containerWidth = slider.clientWidth;

      // More accurate calculation with threshold
      const rawIndex = scrollLeft / containerWidth;
      const newActiveIdx = Math.round(rawIndex);

      // Ensure the index is within bounds
      const clampedIdx = Math.max(0, Math.min(newActiveIdx, teamMembers.length - 1));

      // Only update if index actually changed
      if (clampedIdx !== activeIdx) {
        setActiveIdx(clampedIdx);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    slider.addEventListener("scroll", throttledScroll, { passive: true });
    return () => slider.removeEventListener("scroll", throttledScroll);
  }, [activeIdx, teamMembers.length]);

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    const slider = sliderRef.current;
    if (slider) {
      const containerWidth = slider.clientWidth;
      slider.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth'
      });
      setActiveIdx(index);
    }
  };

  return (
    <section className={styles.teamSection} id="team">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF7A00]/10 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#3D8C95]/10 to-transparent rounded-tr-full"></div>
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-[#FF7A00]/20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-[#3D8C95]/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 left-1/4 w-4 h-4 rounded-full bg-[#061E44]/20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gradient-to-r from-[#FF7A00]/30 to-[#3D8C95]/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-[#FF7A00]/40 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>

      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <span className="inline-block text-[#FF7A00] font-semibold mb-2">OUR TEAM</span>
          <h2 className="text-4xl font-bold mb-3">Meet Our Roaster</h2>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div
              ref={sliderRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
                      {/* Modern Image Container with Gradient Overlay */}
                      <div className="relative h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 via-transparent to-[#3D8C95]/10 z-10"></div>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          style={{
                            objectFit: 'cover',
                            objectPosition: member.name === 'Giordyano Anhar' ? 'center 60%' : 'center 50%'
                          }}
                          priority={index < 2}
                          className="group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>

                      {/* Modern Content Section */}
                      <div className="p-6 relative z-10">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-bl-full group-hover:from-[#FF7A00]/10 transition-all duration-500"></div>
                        <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-[#3D8C95]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>

                        {/* Name and Position Display */}
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-[#061E44] mb-2 group-hover:text-[#FF7A00] transition-colors duration-300">{member.name}</h3>
                          <div className="inline-block bg-[#ea580c] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {member.position}
                          </div>
                        </div>                        {/* Instagram Link */}
                        <div className="flex justify-center">
                          <a href="#" className="group/social relative" aria-label="Instagram">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5 hover:from-[#FF7A00] hover:to-[#FF7A00]/80 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover/social:shadow-[#FF7A00]/25">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF7A00] group-hover/social:text-white transition-colors duration-300">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots Indicator - Fixed */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              {teamMembers.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`h-3 w-3 rounded-full border-0 outline-none shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] focus-visible:ring-offset-2 transition-all duration-300 ${activeIdx === idx
                    ? 'bg-[#FF7A00] scale-110'
                    : 'bg-[#FF7A00]/30 hover:bg-[#FF7A00]/50'
                    }`}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className={`hidden md:grid ${styles.teamGrid}`}>
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF7A00]/5 before:via-transparent before:to-[#3D8C95]/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
              {/* Modern Image Container with Gradient Overlay */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 via-transparent to-[#3D8C95]/10 z-10"></div>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: member.name === 'Giordyano Anhar' ? 'center 60%' : 'center 50%'
                  }}
                  priority={index < 2}
                  className="group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Modern Content Section */}
              <div className="p-5 relative z-10">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FF7A00]/5 to-transparent rounded-bl-full group-hover:from-[#FF7A00]/10 transition-all duration-500"></div>
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-[#3D8C95]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>

                {/* Name and Position Display */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#061E44] mb-2 group-hover:text-[#FF7A00] transition-colors duration-300">{member.name}</h3>
                  <div className="inline-block bg-[#ea580c] text-white px-3 py-1.5 rounded-full text-xs font-medium mb-3">
                    {member.position}
                  </div>
                </div>                {/* Instagram Link */}
                <div className="flex justify-center">
                  <a href="#" className="group/social relative" aria-label="Instagram">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5 hover:from-[#FF7A00] hover:to-[#FF7A00]/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover/social:shadow-[#FF7A00]/25">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF7A00] group-hover/social:text-white transition-colors duration-300">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;