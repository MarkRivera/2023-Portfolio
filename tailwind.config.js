/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
			colors: {
				primary: "#11001c",
				secondary: "#e38125",
				darkLogo: "#412408",
				gradientPink: "#da62c4",
				darkGradientPink: "#da62c433",
				accent: "#9b0aee",
				grayAccent: "#ffffff33"
				// Need color for my name and links
				// Need color for social media
				// Hover states
			}
		},
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
}
