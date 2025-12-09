'use client';

import WhatsAppButton from './WhatsAppButton';
import ChatBot from './ChatBot';

export default function FloatingActionButtons() {
    return (
        <>
            {/* ChatBot Component - sudah memiliki logika open/close sendiri */}
            <ChatBot />

            {/* WhatsApp Button */}
            <WhatsAppButton />
        </>
    );
}
