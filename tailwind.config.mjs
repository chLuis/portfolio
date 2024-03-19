/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xxs': '380px',
				'xs' : '500px',
			},
			animation: {
				'fade-in' : 'fadein 0.3s ease-in-out'
			},
			keyframes: {
				fadein : {
					'0%' : {opacity : 0},
					'100%' : {opacity : 1}
				}
			}
		},
	},
	plugins: [],
}
