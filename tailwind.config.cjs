/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'verdana': ['Verdana', 'sans-serif'],
			},
			colors: {
				"ferris": "#FC7C14",
				"blue-ferris": "#3273DC",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
