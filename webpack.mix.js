const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.sass('./src/test.scss', './dist')
	.options({
		postCss: [tailwindcss('./tailwind.config.js')]
	})

mix.sass('./src/anothertest.scss', './dist')
	.options({
		postCss: [tailwindcss('./anothertest.tailwind.config.js')]
	});