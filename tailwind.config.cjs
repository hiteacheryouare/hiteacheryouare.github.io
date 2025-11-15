/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			primary: ['Inter Tight', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
			serif: ['Cinzel Decorative', 'serif'],
			fancySerif: ['DM Serif Text', 'serif'],
			mono: ['JetBrains Mono', 'monospace'],
		},
		extend: {
			colors: {
				'primary': '#035bff',
				'primary-dark': '#66b3ff',
				'secondary': '#03AAFF',
				'tertiary': '#ff8f3a',
			},
		}
	},
	plugins: [],
}