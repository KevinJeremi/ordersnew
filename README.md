# Digital Solutions Company - Next.js App with AI ChatBot

This is a modern Next.js application for a digital solutions company, featuring an integrated AI chatbot.

## 🚀 Features

- **Modern Design**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **AI ChatBot**: Integrated chatbot for intelligent conversations
- **Responsive Design**: Mobile-first approach with beautiful animations
- **3D Elements**: Interactive 3D components using Three.js
- **Contact Forms**: Email integration with EmailJS
- **Multiple Pages**: Portfolio, Services, Team, Pricing, and Contact pages

## 🤖 AI ChatBot Features

- **Cloud AI**: Powered by advanced AI models via Algion API
- **Real-time Chat**: Instant responses with typing indicators
- **Persistent History**: Chat history saved in localStorage
- **Error Handling**: Graceful error handling with helpful messages
- **Modern UI**: Sleek chat interface with animations
- **Mobile Responsive**: Works perfectly on all devices

## 📋 Prerequisites

Before running this application, make sure you have:

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **API Key** from Algion (https://api.algion.dev)

## 🛠️ Installation

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd my-next-app

# Install dependencies
npm install
```

### 2. Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Then edit `.env.local` and add your API credentials:

```env
OPENAI_API_KEY=your_algion_api_key_here
OPENAI_BASE_URL=https://api.algion.dev/v1
OPENAI_MODEL=gpt-5.1
```

**Important**: Never commit `.env.local` to version control. It's already included in `.gitignore`.

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 Testing the ChatBot

1. Visit [http://localhost:3000/chatbot-test](http://localhost:3000/chatbot-test) for the test interface
2. Or look for the AI chat button in the bottom-right corner of any page
3. Click to open the chat window and start chatting with Owen, the AI assistant!

## 📁 Project Structure

```
src/
├── app/
│   ├── api/chat/          # ChatBot API endpoint
│   ├── chatbot-test/      # ChatBot test page
│   └── [other pages]/     # Portfolio, Team, etc.
├── components/
│   ├── ChatBot.tsx        # Main ChatBot component
│   └── [other components]/
├── lib/
│   └── chatbot.ts         # ChatBot utilities
└── public/
    └── images/            # Static assets
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file if you need to customize:

```env
# Ollama API URL (default: http://localhost:11434)
OLLAMA_API_URL=http://localhost:11434

# AI Model (default: llama3)
AI_MODEL=llama3
```

### Customizing the ChatBot

#### Change AI Model:
Edit `src/app/api/chat/route.ts` and modify the model name:
```typescript
model: 'llama3', // Change to your preferred model
```

#### Customize System Prompt:
Modify the system message in `src/app/api/chat/route.ts`:
```typescript
{
  role: 'system',
  content: 'Your custom system prompt here...'
}
```

#### Styling:
Edit `src/components/ChatBot.tsx` to customize the appearance.

## 🚨 Troubleshooting

### ChatBot Not Working?

1. **Check Ollama Status**:
   ```bash
   ollama list  # Should show llama3
   ```

2. **Restart Ollama**:
   ```bash
   ollama serve
   ```

3. **Test Connection**:
   Visit [http://localhost:3000/chatbot-test](http://localhost:3000/chatbot-test)

### Common Issues:

- **"Model not found"**: Run `ollama pull llama3`
- **"Service not running"**: Run `ollama serve`
- **Port conflicts**: Make sure ports 3000 and 11434 are available

## 📱 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📦 Technologies Used

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **AI**: Ollama, Llama3
- **Icons**: Heroicons
- **Email**: EmailJS

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy!

**Note**: The AI chatbot will only work locally unless you set up Ollama on your server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the chatbot functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

If you encounter any issues with the chatbot setup:

1. Check the [ChatBot Setup Guide](./CHATBOT_SETUP.md)
2. Visit the test page at `/chatbot-test`
3. Ensure Ollama is running with `ollama serve`

---

**Enjoy chatting with your AI assistant! 🤖✨**
