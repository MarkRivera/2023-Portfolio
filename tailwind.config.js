/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
			colors: {
				primary: "#11001c",
				secondary: "#e38125",
				darkLogo: "#412408"
				// Need color for my name and links
				// Need color for social media
				// Hover states
			}
		},
  },
  plugins: []
}
