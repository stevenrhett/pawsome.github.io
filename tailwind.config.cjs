/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        bgSvg: {
            'arrow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.04 12.37"><path d="M.5,6.19H14.35" fill="none" stroke="color" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8.86 0.5 14.54 6.19 8.86 11.87" fill="none" stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        extend: {
            backgroundImage: {
                'gradient-pattern':
                    'radial-gradient(100% 100% atTopRight, white, transparent 100)'
            },
            stroke: {
                'blue-200': '#90cdf4',
            },
            fill: {
                'blue-50': '#ebf8ff',
            },
        }, variants: {
            extend: {},
        }, plugins: [require('@tailwindcss/forms'),
            require('tailwindcss-bg-svg'),
        ],
    }
}



