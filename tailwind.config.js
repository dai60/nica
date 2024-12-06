/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                "roboto-condensed": ["'Roboto Condensed'", "sans-serif"],
            }
        },
    },
    plugins: [],
}
