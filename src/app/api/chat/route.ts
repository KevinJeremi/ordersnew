import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
});

export async function POST(request: NextRequest) {
    console.log('ChatBot API called');

    try {
        const { message } = await request.json();
        console.log('Received message:', message);

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        console.log('Sending message to AI...');
        const response = await client.chat.completions.create({
            model: process.env.OPENAI_MODEL || "gpt-5.1",
            messages: [
                {
                    role: "system",
                    content: `nama kamu Owen, asisten digital dari Orders — penyedia layanan web, apps, desain, dan solusi teknologi. 
                  
                  Jawab dengan bahasa Indonesia yang santai, profesional, singkat, dan to the point. Gaya bicara ramah, helpful, kadang ceria. Hindari jawaban panjang.
                  
                  Kalau ditanya tentang Orders, jelaskan bahwa Orders adalah perusahaan layanan digital: website, mobile app, desain grafis, dan solusi teknologi.`
                },
                {
                    role: "user",
                    content: message
                }
            ]
        });

        console.log('Received response from AI');

        return NextResponse.json({
            message: response.choices[0].message.content,
            model: process.env.OPENAI_MODEL || 'gpt-5.1'
        });

    } catch (error: any) {
        console.error('Chat API error:', error);
        console.error('Error details:', error.message);

        return NextResponse.json(
            { error: `Internal server error: ${error.message}` },
            { status: 500 }
        );
    }
}
