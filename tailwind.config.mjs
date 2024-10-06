/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-text': '#f6eaed',
				'dark-background': '#130609',
				'dark-primary': '#e58ba1',
				'dark-secondary': '#921635',
				'dark-accent': '#8c2640',
				'light-text': '#15090c',
				'light-background': '#f9ecef',
				'light-primary': '##741a31',
				'light-secondary': '#e96d8c',
				'light-accent': '#d9738c',
			   },	   
		},
	},
	darkMode:'class',
	plugins: [],
}

