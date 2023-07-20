/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            minHeight: {
                card: '23.4375rem'
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
