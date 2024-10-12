/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-text': '#0f151a',
				'light-background': '#eef2f6',
				'light-primary': '#2c4963',
				'light-secondary': '#92b5d3',
				'light-accent': '#396d9d',
				'dark-text': '#e5ebf0',
				'dark-background': '#090d11',
				'dark-primary': '#9cb9d3',
				'dark-secondary': '#2c4f6d',
				'dark-accent': '#6296c6',
			},
			
			  
		},
	},
	darkMode:'class',
	plugins: [],
}

