var mix = require('laravel-mix');
		mix.setPublicPath('.');

// var argv = require('yargs').argv;

var spritemap = require('svg-spritemap-webpack-plugin');

// const spriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Autoload jQuery
// @see: https://github.com/JeffreyWay/laravel-mix/blob/master/docs/autoloading.md
mix.autoload({
	jquery: ['$', 'window.jQuery']
});

// Shot
// @see: https://github.com/JeffreyWay/laravel-mix/issues/1086
// var shot = null
// if(argv.env.shot !== undefined) {
// 	shot = argv.env.shot;
// }

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('typo3conf/ext/wax/Resources/Public/Js/wax.js', 'fileadmin/Resources/Public/Js/wax.js')
 	.sass('typo3conf/ext/wax/Resources/Public/Sass/wax.scss', 'fileadmin/Resources/Public/Css/wax.css')
	.sass('typo3conf/ext/wax/Resources/Public/Sass/editor.scss', 'fileadmin/Resources/Public/Css/editor.css')
	.webpackConfig({
		plugins: [
			new spritemap({
				src: 'typo3conf/ext/wax/Resources/Public/Svg/Sprite/*.svg',
				filename: 'fileadmin/Resources/Public/Svg/spritemap.svg',
				svgo: false
			})
		]
	});