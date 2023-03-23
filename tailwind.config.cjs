module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-pattern':
                    'radial-gradient(100% 100% at top right, white, transparent)'
            },
            stroke: {
                'blue-200': '#90cdf4',
            },
            fill: {
                'blue-50': '#ebf8ff',
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }
}


