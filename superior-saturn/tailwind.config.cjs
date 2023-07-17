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
					// '50%': {transform: 'translate(100vw)'},
					'100%':{transform: 'translateX(calc(-250px*7))'}
				},
				translateInfinite: {
					'100%': {transform: 'translate(calc(-180px*12))'}
				}
			},
			animation: {
				moveImages: 'moveImages 60s linear infinite',
				translateInfinite: 'translateInfinite 25s linear infinite'
			}
		},
	},
	plugins: [],
}
