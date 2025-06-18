'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
    images: { src: string; alt: string; title: string }[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Lightbox({ 
    images, 
    currentIndex, 
    isOpen, 
    onClose, 
    onNext, 
    onPrev 
}: LightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    onPrev();
                    break;
                case 'ArrowRight':
                    onNext();
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        
        // Prevent body scroll when lightbox is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen) return null;

    const currentImage = images[currentIndex];

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors"
                aria-label="Close lightbox"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
                <button
                    onClick={onPrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors"
                    aria-label="Previous image"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
                <button
                    onClick={onNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors"
                    aria-label="Next image"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}

            {/* Main Image */}
            <div className="max-w-7xl max-h-full mx-4 relative">
                <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[90vh] object-contain"
                    priority
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">{currentImage.title}</h3>
                    <p className="text-gray-300 text-sm">
                        {currentIndex + 1} of {images.length}
                    </p>
                </div>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                // We'll need to pass this functionality from parent
                            }}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                index === currentIndex ? 'border-white' : 'border-transparent opacity-60 hover:opacity-80'
                            }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
