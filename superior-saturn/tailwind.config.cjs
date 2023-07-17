/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding: {
				'17px': '17px'
			},
			colors: {
				'github-logo': '#1f2328',
				'linkedin-logo': '#0a66c2'
			}
		},
	},
	plugins: [],
}
