/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			primary: ['Raleway', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
			serif: ['Cinzel Decorative', 'serif'],
		},
		extend: {
			colors: {
				'primary': '#000064',
				'secondary': '#00ffff',
				'tertiary': '#197278',
			},
		}
	},
	plugins: [],
}
