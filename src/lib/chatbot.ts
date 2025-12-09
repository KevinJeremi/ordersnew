// ChatBot utility functions and types

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: Date;
  model?: string;
}

export interface ChatError {
  message: string;
  code?: string;
  status?: number;
}

export class ChatBotAPI {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async sendMessage(message: string): Promise<{ message: string; model: string }> {
    const response = await fetch(`${this.baseUrl}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  }
}

export const chatBotAPI = new ChatBotAPI();

// Helper functions for message formatting
export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const createMessage = (
  content: string,
  role: ChatMessage['role'],
  model?: string
): ChatMessage => ({
  id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  content,
  role,
  timestamp: new Date(),
  model
});

// Storage helpers for chat history
export const saveChatHistory = (messages: ChatMessage[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('chatbot-history', JSON.stringify(messages));
  }
};

export const loadChatHistory = (): ChatMessage[] => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('chatbot-history');
    if (saved) {
      try {
        return JSON.parse(saved).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (error) {
        console.error('Failed to load chat history:', error);
      }
    }
  }
  return [];
};

export const clearChatHistory = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('chatbot-history');
  }
};

// Predefined responses for common scenarios
export const FALLBACK_RESPONSES = {
  CONNECTION_ERROR: "Maaf, Orders AI tidak dapat terhubung ke server AI. Silakan coba lagi dalam beberapa saat.",
  MODEL_ERROR: "Model AI tidak tersedia. Silakan coba lagi nanti.",
  GENERIC_ERROR: "Terjadi kesalahan pada Orders AI. Silakan coba lagi dalam beberapa saat.",
  WELCOME: "👋 Halo! Saya Owen, asisten digital dari Orders. Saya siap membantu Anda dengan pertanyaan tentang layanan digital, teknologi, atau topik lainnya. Ada yang bisa saya bantu hari ini?",
  THINKING: "Orders AI sedang memproses..."
};
