/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bone: '#F5F5F5',
                black: '#000000',
                accent: {
                    DEFAULT: '#474DF0', // Logo purple
                    hover: '#3538C8',
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                DEFAULT: '0px',
                'none': '0px',
                'sm': '0px',
                'md': '0px',
                'lg': '0px',
                'xl': '0px',
                '2xl': '0px',
                '3xl': '0px',
                'full': '0px', 
            },
            borderWidth: {
                DEFAULT: '1px',
            }
        }
    },
    plugins: [],
}
