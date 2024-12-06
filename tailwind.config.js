/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#404445",
                secondary: "#5F6B81",
                green: "#43C45F",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                "roboto-condensed": ["'Roboto Condensed'", "sans-serif"],
            }
        },
    },
    plugins: [],
}
