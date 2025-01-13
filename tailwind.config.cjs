/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			primary: ['Inter Tight', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
			serif: ['Cinzel Decorative', 'serif'],
		},
		extend: {
			colors: {
				'primary': '#fdb913ff',
				'secondary': '#1C1400',
				'tertiary': '#c9234aff',
			},
		}
	},
	plugins: [],
}
