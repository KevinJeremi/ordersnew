import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2F80ED',
                secondary: '#FF8210',
                teal: '#10B981',
                dark: '#1F2937',
                medium: '#4B5563',
                light: '#F9FAFB',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            maxWidth: {
                'content': '1200px',
            },
            borderRadius: {
                'large': '16px',
            },
        },
    },
    plugins: [],
}

export default config
