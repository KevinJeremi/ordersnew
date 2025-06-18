'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import ChatBot from './ChatBot';

export default function FloatingActionButtons() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
            {/* ChatBot Modal */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-full right-0 mb-3"
                    >
                        <ChatBot 
                            useCustomPosition={true}
                            onClose={() => setIsChatOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Action Buttons Container */}
            <div className="flex space-x-3">
                {/* ChatBot Toggle Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className={`${
                        isChatOpen 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'bg-[#FF7A00] hover:bg-orange-600'
                    } text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl`}
                    aria-label={isChatOpen ? "Tutup chat" : "Buka chat"}
                >
                    {isChatOpen ? (
                        // Close Icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Chat Icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    )}
                </motion.button>

                {/* WhatsApp Button */}
                <WhatsAppButton />
            </div>
        </div>
    );
}
