/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#404445",
                secondary: "#5F6B81",
                green: "#43C45F",
                "footer-primary": "#98A3B5",
                "footer-secondary": "#7A7C88",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                "roboto-condensed": ["'Roboto Condensed'", "sans-serif"],
            }
        },
    },
    plugins: [],
}
