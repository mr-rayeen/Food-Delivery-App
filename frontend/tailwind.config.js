/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "nice": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
			},
		},
	},
	plugins: [],
};

