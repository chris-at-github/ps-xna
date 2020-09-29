var mix = require('laravel-mix');

// Stopping at 95% emitting
// @see: https://github.com/JeffreyWay/laravel-mix/issues/1126
mix.setPublicPath('.');

// No Noise
// @see: https://laravel.com/docs/5.6/mix#notifications
mix.disableSuccessNotifications();

var spritemap = require('svg-spritemap-webpack-plugin');
var iconfont = require('iconfont-plugin-webpack');

var ImageminPlugin = require('imagemin-webpack-plugin').default;
var imageminMozjpeg = require('imagemin-mozjpeg');

// // Autoload jQuery
// // @see: https://github.com/JeffreyWay/laravel-mix/blob/master/docs/autoloading.md
// mix.autoload({
// 	jquery: ['$', 'window.jQuery']
// });

// Disable Process CSS Urls
// @see: https://laravel.com/docs/5.7/mix#working-with-stylesheets
mix.options({
	processCssUrls: false
});

// Shot
// @see: https://github.com/JeffreyWay/laravel-mix/issues/1086
// var argv = require('yargs').argv;
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
mix.js('typo3conf/ext/xna/Resources/Public/Js/xna.js', 'assets/js/xna.js')
	.webpackConfig({
		output: {
			publicPath: '/assets/'
		},

		plugins: [
			new spritemap('typo3conf/ext/xna/Resources/Public/Svg/Sprite/*.svg', {
				output: {
					filename: 'assets/svg/sprite.svg',
					svgo: true,
					svg: {
						sizes: false
					}
				},
				sprite: {
					generate: {
						// Generate <use> tags within the spritemap as the <view> tag will use this
						use: true,
						//
						// // Generate <view> tags within the svg to use in css via fragment identifier url
						// // and add -fragment suffix for the identifier to prevent naming colissions with the symbol identifier
						// view: '-fragment',

						// Generate <symbol> tags within the SVG to use in HTML via <use> tag
						symbol: true
					},
				},
			}),

			new iconfont({
				src: './typo3conf/ext/xna/Resources/Public/Svg/Font', // required - directory where your .svg files are located
				family: 'icons', // optional - the `font-family` name. if multiple iconfonts are generated, the dir names will be used.
				dest: {
					font: './assets/fonts/[family].[type]', // required - paths of generated font files
					css: './typo3conf/ext/xna/Resources/Public/Sass/xna/_icons.scss' // required - paths of generated css files
				},
				watch: {
					pattern: './typo3conf/ext/xna/Resources/Public/Svg/Font/*.svg', // required - watch these files to reload
					cwd: undefined // optional - current working dir for watching
				},
			}),

			new ImageminPlugin({
				test: /\.(jpe?g|png|gif)$/i,
				plugins: [
					imageminMozjpeg({
						quality: 90,
					})
				]
			})
		]
	});

mix.babel('assets/js/xna.js', 'assets/js/xna.js');
mix.copy('typo3conf/ext/xna/Resources/Public/Js/xna-inline.js', 'assets/js/xna-inline.js');

mix.copy('./typo3conf/ext/xna/Resources/Public/Images/*', './assets/images')
	.copy('./typo3conf/ext/xna/Resources/Public/Svg/Embed/*', './assets/svg')
	.copy('./typo3conf/ext/xna/Resources/Public/Fonts/*', './assets/fonts')
	.copy('./typo3conf/ext/xna/Resources/Public/Icons/*', './assets/icons');

mix.sass('typo3conf/ext/xna/Resources/Public/Sass/editor.scss', 'assets/css/editor.css')
	.sass('typo3conf/ext/xna/Resources/Public/Sass/xna.scss', 'assets/css/xna.css')
	.options({
			postCss: [
				require('postcss-cachebuster'),
				require('postcss-combine-duplicated-selectors')({
					removeDuplicatedProperties: true
				})
			]
		}
	);

mix.sass('typo3conf/ext/xna/Resources/Public/Sass/xna-inline.scss', 'assets/css/xna-inline.css')
	.options({
			postCss: [
				require('postcss-cachebuster'),
				require('postcss-combine-duplicated-selectors')({
					removeDuplicatedProperties: true
				}),
				require('postcss-urlrewrite')({
					imports: true,
					properties: true,
					rules: [
						{ from: '../fonts', to: 'assets/fonts'}
					]
				})
			]
		}
	);