/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'nunito': ['Nunito Sans']
        },
        colors: {
            'c-blue-dm': 'hsl(209, 23%, 22%)',
            'dark-blue-dm': 'hsl(207, 26%, 17%)',
            'dark-blue-wm': 'hsl(200, 15%, 8%)',
            'c-gray-lm': 'hsl(0, 0%, 52%)',
            'light-gray-lm': 'hsl(0, 0%, 98%)',
            'c-white': 'hsl(0, 0%, 100%)'
        },
    },
    plugins: [],
}

