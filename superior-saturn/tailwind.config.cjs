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
			},
			keyframes: {
				moveImages: {
					'0%': {transform: 'translateX(0)'},
					// '10%': {transform: 'translateX(calc(-200px*7))'},
					'100%':{transform: 'translateX(calc(-160px*21))'}
				},
			},
			animation: {
				moveImages: 'moveImages 68s linear infinite',
			},
		},
	},
	plugins: [],
}
