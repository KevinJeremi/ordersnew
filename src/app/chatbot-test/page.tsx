'use client';

import { useState, useEffect } from 'react';
import { chatBotAPI } from '@/lib/chatbot';

export default function ChatBotTest() {
  const [status, setStatus] = useState<{
    ollama: boolean;
    loading: boolean;
    error?: string;
  }>({
    ollama: false,
    loading: true
  });

  const [testMessage, setTestMessage] = useState('');
  const [testResponse, setTestResponse] = useState<string | null>(null);
  const [testLoading, setTestLoading] = useState(false);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    setStatus(prev => ({ ...prev, loading: true }));
    
    try {
      const ollamaStatus = await chatBotAPI.checkOllamaStatus();
      setStatus({
        ollama: ollamaStatus,
        loading: false
      });
    } catch (error) {
      setStatus({
        ollama: false,
        loading: false,
        error: 'Failed to check status'
      });
    }
  };

  const testChat = async () => {
    if (!testMessage.trim()) return;
    
    setTestLoading(true);
    setTestResponse(null);
    
    try {
      const response = await chatBotAPI.sendMessage(testMessage);
      setTestResponse(response.message);
    } catch (error: any) {
      setTestResponse(`Error: ${error.message}`);
    } finally {
      setTestLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            ChatBot AI - Test Interface
          </h1>

          {/* Status Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              System Status
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Ollama Service</span>
                  {status.loading ? (
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span className={`px-2 py-1 rounded text-sm ${
                      status.ollama 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {status.ollama ? '✅ Online' : '❌ Offline'}
                    </span>
                  )}
                </div>
                {!status.ollama && !status.loading && (
                  <p className="text-sm text-gray-600 mt-2">
                    Please run: <code className="bg-gray-200 px-1 rounded">ollama serve</code>
                  </p>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">ChatBot UI</span>
                  <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-800">
                    ✅ Ready
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Look for the chat button in bottom-right corner
                </p>
              </div>
            </div>

            <button
              onClick={checkStatus}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Refresh Status
            </button>
          </div>

          {/* Test Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Test Chat API
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Test Message
                </label>
                <input
                  type="text"
                  value={testMessage}
                  onChange={(e) => setTestMessage(e.target.value)}
                  placeholder="Type a message to test..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && testChat()}
                />
              </div>
              
              <button
                onClick={testChat}
                disabled={!testMessage.trim() || testLoading}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400 transition-colors"
              >
                {testLoading ? 'Testing...' : 'Test Chat'}
              </button>

              {testResponse && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Response:</h3>
                  <p className="text-gray-700 whitespace-pre-wrap">{testResponse}</p>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Setup Instructions
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Make sure Ollama is installed on your PC</li>
                <li>Run <code className="bg-white px-1 rounded">ollama pull llama3</code> to download the model</li>
                <li>Run <code className="bg-white px-1 rounded">ollama serve</code> to start the service</li>
                <li>Or use the provided scripts: <code className="bg-white px-1 rounded">start-ollama.bat</code> or <code className="bg-white px-1 rounded">start-ollama.ps1</code></li>
                <li>The chatbot should now be working!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
