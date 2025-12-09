'use client';

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
    timestamp: Date;
}

interface ChatBotProps {
    className?: string;
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
            setIsLoading(false);
        }
    };

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
        </div>
    );
}
