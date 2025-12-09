'use client';

<<<<<<< HEAD
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import {
    chatBotAPI,
    createMessage,
    formatTimestamp,
    saveChatHistory,
    loadChatHistory,
    clearChatHistory,
    FALLBACK_RESPONSES,
    type ChatMessage
} from '@/lib/chatbot';

interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
=======
import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
>>>>>>> d9b347a145e1982adbef0cb28c7047974dd041da
    timestamp: Date;
}

interface ChatBotProps {
    className?: string;
<<<<<<< HEAD
}

export default function ChatBot({ className = '' }: ChatBotProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initialize chat with welcome message and load history
    useEffect(() => {
        const history = loadChatHistory();
        if (history.length > 0) {
            setMessages(history);
        } else {
            setMessages([createMessage(FALLBACK_RESPONSES.WELCOME, 'assistant')]);
        }
    }, []);

    // Save chat history whenever messages change
    useEffect(() => {
        if (messages.length > 0) {
            saveChatHistory(messages);
        }
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = createMessage(input.trim(), 'user');
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chatBotAPI.sendMessage(input.trim());
            const assistantMessage = createMessage(response.message, 'assistant', response.model);
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error: any) {
            let errorMessage = FALLBACK_RESPONSES.GENERIC_ERROR;

            if (error.message.includes('503')) {
                errorMessage = FALLBACK_RESPONSES.CONNECTION_ERROR;
            } else if (error.message.includes('model')) {
                errorMessage = FALLBACK_RESPONSES.MODEL_ERROR;
            }

            const assistantMessage = createMessage(errorMessage, 'assistant');
            setMessages(prev => [...prev, assistantMessage]);
        } finally {
=======
    useCustomPosition?: boolean;
    onClose?: () => void;
}

export default function ChatBot({ className = '', useCustomPosition = false, onClose }: ChatBotProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `Halo! 👋 Saya Owen, AI Assistant dari ORDERS Digital Solutions! Saya siap membantu Anda😉`,
            isUser: false,
            timestamp: new Date()
        }
    ]); const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]); const resetChat = () => {
        setIsResetting(true);

        // Show reset message temporarily
        const resetMessage = {
            id: 'reset-msg',
            text: '🔄 Chat telah direset! Memulai percakapan baru...',
            isUser: false,
            timestamp: new Date()
        };

        setMessages([resetMessage]);

        // After 1 second, show welcome message
        setTimeout(() => {
            setMessages([
                {
                    id: '1',
                    text: `Halo! 👋 Saya Owen, AI Assistant dari ORDERS Digital Solutions! Saya siap membantu Anda😉`,
                    isUser: false,
                    timestamp: new Date()
                }
            ]);
            setIsResetting(false);
        }, 1000);

        setInputValue('');
        setIsLoading(false);
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Use Groq AI API with streaming
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputValue,
                    conversationHistory: messages.slice(-10) // Send last 10 messages for context
                }),
            });

            if (response.ok && response.body) {
                // Handle streaming response
                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                // Create initial bot message
                const botMessageId = (Date.now() + 1).toString();
                const initialBotMessage: Message = {
                    id: botMessageId,
                    text: '',
                    isUser: false,
                    timestamp: new Date()
                };

                setMessages(prev => [...prev, initialBotMessage]);
                setIsLoading(false);

                let accumulatedText = '';

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value);
                    const lines = chunk.split('\n');

                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const data = line.slice(6);
                            if (data === '[DONE]') {
                                return;
                            }

                            try {
                                const parsed = JSON.parse(data);
                                if (parsed.content) {
                                    accumulatedText += parsed.content;

                                    // Update the bot message with accumulated text
                                    setMessages(prev => prev.map(msg =>
                                        msg.id === botMessageId
                                            ? { ...msg, text: accumulatedText }
                                            : msg
                                    ));
                                }
                            } catch (e) {
                                // Ignore parsing errors for malformed chunks
                            }
                        }
                    }
                }
            } else {
                throw new Error('API request failed');
            }
        } catch (error) {
            console.error('Chat error:', error);
            const errorResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: `Maaf, terjadi kesalahan saat menghubungi AI. 😅

Untuk bantuan langsung, silakan hubungi:
📱 WhatsApp: +62 821-9596-5483
📧 Email: info@orders.id

Tim kami siap membantu Anda! �`,
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorResponse]);
>>>>>>> d9b347a145e1982adbef0cb28c7047974dd041da
            setIsLoading(false);
        }
    };

<<<<<<< HEAD
    const clearChat = () => {
        clearChatHistory();
        setMessages([createMessage(FALLBACK_RESPONSES.WELCOME, 'assistant')]);
    }; return (
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${className}`}>
            {/* Chat Toggle Button */}
            <AnimatePresence>
                {!isOpen && (<motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(true)}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:shadow-2xl"
                    aria-label="Open Orders AI Chat"
                >
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                    <div className="absolute -top-2 -right-2 bg-teal text-white text-xs rounded-full px-2 py-1 font-medium">
                        AI
                    </div>
                </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (<motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="chat-window bg-white rounded-large shadow-2xl w-80 sm:w-96 h-[500px] sm:h-[600px] max-sm:w-full max-sm:h-full max-sm:rounded-none flex flex-col overflow-hidden border border-gray-100"
                >
                    {/* Header */}                        <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-3 h-3 bg-teal rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-3 h-3 bg-teal rounded-full animate-ping opacity-75"></div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Orders AI</h3>
                                <p className="text-blue-100 text-sm">AI Assistant • Online</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={clearChat}
                                className="text-blue-200 hover:text-white text-sm px-2 py-1 rounded hover:bg-white/10 transition-colors"
                                aria-label="Clear chat history"
                            >
                                Clear
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-blue-200 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
                                aria-label="Close chat"
                            >
                                <XMarkIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>{/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-light to-white">
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] sm:max-w-[80%] rounded-large px-4 py-3 text-sm shadow-sm ${message.role === 'user'
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                        : 'bg-white text-dark border border-gray-100'
                                        }`}
                                >
                                    <div className="whitespace-pre-wrap">{message.content}</div>
                                    <div className={`text-xs mt-2 ${message.role === 'user'
                                        ? 'text-blue-100'
                                        : 'text-medium'
                                        }`}>
                                        {formatTimestamp(message.timestamp)}
                                        {message.role === 'assistant' && (
                                            <span className="ml-2 text-teal font-medium">Orders AI</span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex justify-start"
                            >
                                <div className="bg-white rounded-large px-4 py-3 text-sm text-medium shadow-sm border border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-xs text-medium">Orders AI is thinking...</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>                        {/* Input */}
                    <form onSubmit={sendMessage} className="p-4 border-t border-gray-100 bg-white">
                        <div className="flex space-x-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask Orders AI anything..."
                                className="flex-1 border border-gray-200 rounded-large px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 bg-light"
                                disabled={isLoading}
                            />
                            <motion.button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 disabled:from-gray-300 disabled:to-gray-300 text-white rounded-large p-3 transition-all duration-200 shadow-sm"
                            >                                    <PaperAirplaneIcon className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
                )}
            </AnimatePresence>
=======
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    }; return (
        <div className={`${isFullscreen
            ? 'fixed inset-0 z-[9999] w-full h-full'
            : useCustomPosition
                ? 'relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[400px] sm:h-[480px] md:h-[550px]'
                : 'fixed bottom-4 right-4 z-50 w-[calc(100vw-3rem)] max-w-64 h-[calc(100vh-12rem)] max-h-72 sm:w-72 sm:h-80'
            } bg-white ${isFullscreen ? '' : 'rounded-xl'} shadow-2xl border border-gray-200 flex flex-col overflow-hidden backdrop-blur-sm`}>            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF7A00] to-orange-500 text-white p-2 sm:p-3 md:p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-xs sm:text-sm md:text-base truncate">🤖 Owen - ORDERS Assistant</h3>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-xs opacity-90 truncate">AI Powered</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-1 flex-shrink-0">
                    <button
                        onClick={resetChat}
                        className={`text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5 transition-all duration-200 ${isResetting ? 'animate-spin' : ''}`}
                        title="Reset Chat"
                        disabled={isResetting}
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5 transition-all duration-200"
                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                    >
                        {isFullscreen ? (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
                            </svg>
                        ) : (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7V3.5M3 7H7.5M3 7l4.5-4.5M21 7V3.5M21 7h-4.5M21 7l-4.5-4.5M3 17v3.5M3 17h4.5M3 17l4.5 4.5M21 17v3.5M21 17h-4.5M21 17l-4.5 4.5" />
                            </svg>
                        )}
                    </button>
                    <button
                        onClick={() => {
                            if (onClose) {
                                onClose();
                            }
                        }}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5 transition-all duration-200"
                        title="Close Chat"
                    >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>            {/* Messages */}
            <div className={`flex-1 overflow-y-auto ${isFullscreen
                ? 'p-3 sm:p-4 md:p-6 lg:p-8'
                : 'p-2 sm:p-3'
                } space-y-2 sm:space-y-3 bg-gradient-to-b from-gray-50 to-white scrollbar-hide`}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex ${message.isUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-1 sm:space-x-2 ${isFullscreen
                            ? 'max-w-[85%] sm:max-w-[80%] md:max-w-[70%]'
                            : 'max-w-[95%] sm:max-w-[90%]'
                            }`}>
                            {/* Avatar */}
                            <div className={`flex-shrink-0 ${isFullscreen
                                ? 'w-7 h-7 md:w-8 md:h-8'
                                : 'w-5 h-5 sm:w-6 sm:h-6'
                                } rounded-full flex items-center justify-center ${message.isUser
                                    ? 'bg-[#FF7A00] text-white'
                                    : 'bg-gray-200 text-gray-600'
                                }`}>                                {message.isUser ? (
                                    <svg className={`${isFullscreen
                                        ? 'w-3.5 h-3.5 md:w-4 md:h-4'
                                        : 'w-2.5 h-2.5 sm:w-3 sm:h-3'
                                        }`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                ) : (
                                    <svg className={`${isFullscreen
                                        ? 'w-3.5 h-3.5 md:w-4 md:h-4'
                                        : 'w-2.5 h-2.5 sm:w-3 sm:h-3'
                                        }`} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                )}
                            </div>

                            {/* Message Bubble */}
                            <div
                                className={`${isFullscreen
                                    ? 'px-3 py-2 text-sm md:px-4 md:py-3 md:text-base'
                                    : 'px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm'
                                    } rounded-xl shadow-sm ${message.isUser
                                        ? 'bg-[#FF7A00] text-white rounded-br-md'
                                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                                    }`}
                            >
                                <div className="whitespace-pre-wrap break-words leading-relaxed">
                                    {message.text}
                                </div>
                                <div className={`${isFullscreen
                                    ? 'text-xs md:text-sm'
                                    : 'text-[9px] sm:text-xs'
                                    } mt-1 ${message.isUser ? 'text-orange-100' : 'text-gray-400'
                                    }`}>
                                    {message.timestamp.toLocaleTimeString('id-ID', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">                        <div className="flex items-end space-x-1 sm:space-x-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <div className="bg-white border border-gray-200 px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl rounded-bl-md shadow-sm">
                            <div className="flex space-x-0.5 sm:space-x-1">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>
                    </div>
                    </div>
                )}
                <div ref={messagesEndRef} /> {/* Scroll target */}
            </div>            {/* Input */}
            <div className={`border-t border-gray-100 bg-white ${isFullscreen
                ? 'p-3 sm:p-4 md:p-6'
                : 'p-2 sm:p-3'
                }`}>
                {/* Quick Reply Buttons */}
                <div className={`${isFullscreen
                    ? 'mb-3 sm:mb-4'
                    : 'mb-2 sm:mb-3'
                    } flex flex-wrap gap-1 sm:gap-2`}>
                    {[
                        { text: "🌐 Harga Website", query: "Berapa harga buat website company profile?" },
                        { text: "📱 Aplikasi Mobile", query: "Saya butuh aplikasi mobile untuk bisnis" },
                        { text: "🎨 Desain & Logo", query: "Berapa harga desain logo dan branding?" },
                        { text: "📞 Kontak", query: "Berapa nomor WhatsApp ORDERS?" }
                    ].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setInputValue(item.query);
                                setTimeout(handleSendMessage, 100);
                            }}
                            className={`${isFullscreen
                                ? 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm'
                                : 'px-2 py-1 text-[9px] sm:text-xs'
                                } bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors border border-gray-200 hover:border-gray-300`}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>

                <div className="flex space-x-1 sm:space-x-2 items-end">                    <div className="flex-1 relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ketik pesan atau pilih menu..."
                        className={`w-full ${isFullscreen
                            ? 'px-3 py-2.5 pr-9 text-sm sm:px-4 sm:py-3 sm:pr-10 sm:text-base'
                            : 'px-2 py-1.5 sm:px-3 sm:py-2 pr-6 sm:pr-8 text-xs sm:text-sm'
                            } border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A00] transition-colors bg-gray-50 focus:bg-white`}
                    />
                    {inputValue && (
                        <button
                            onClick={() => setInputValue('')}
                            className={`absolute ${isFullscreen
                                ? 'right-2.5 sm:right-3'
                                : 'right-1.5 sm:right-2'
                                } top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors`}
                        >
                            <svg className={`${isFullscreen
                                ? 'w-3.5 h-3.5 sm:w-4 sm:h-4'
                                : 'w-2.5 h-2.5 sm:w-3 sm:h-3'
                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                    <button
                        onClick={resetChat}
                        className={`text-gray-500 hover:text-[#FF7A00] hover:bg-orange-50 ${isFullscreen
                            ? 'p-2.5 sm:p-3'
                            : 'p-1.5 sm:p-2'
                            } rounded-xl transition-all duration-200 ${isResetting ? 'animate-spin text-[#FF7A00]' : ''}`}
                        title="Reset Chat"
                        disabled={isResetting}
                    >
                        <svg className={`${isFullscreen
                            ? 'w-4 h-4 sm:w-5 sm:h-5'
                            : 'w-3 h-3 sm:w-4 sm:h-4'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isLoading}
                        className={`bg-[#FF7A00] hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white ${isFullscreen
                            ? 'p-2.5 sm:p-3'
                            : 'p-1.5 sm:p-2'
                            } rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none`}
                    >                        {isLoading ? (
                        <svg className={`${isFullscreen ? 'w-5 h-5' : 'w-3 h-3 sm:w-4 sm:h-4'} animate-spin`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    ) : (
                        <svg className={`${isFullscreen ? 'w-5 h-5' : 'w-3 h-3 sm:w-4 sm:h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    )}
                    </button>
                </div>
            </div>
>>>>>>> d9b347a145e1982adbef0cb28c7047974dd041da
        </div>
    );
}
