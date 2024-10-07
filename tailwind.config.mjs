/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-text': '#e8f2eb',
				'dark-background': '#050a07',
				'dark-primary': '#46a461',
				'dark-secondary': '#225d33',
				'dark-accent': '#319b51',
				'light-text': '#0d1710',
				'light-background': '#f5faf7',
				'light-primary': '#5bb975',
				'light-secondary': '#a2ddb3',
				'light-accent': '#64ce84',
			  },
			  
		},
	},
	darkMode:'class',
	plugins: [],
}

