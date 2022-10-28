const mix = require('laravel-mix');
const assets = require('./package').assets;
const spritemap = require('svg-spritemap-webpack-plugin');

// var iconfont = require('iconfont-plugin-webpack');

// Stopping at 95% emitting
// @see: https://github.com/JeffreyWay/laravel-mix/issues/1126
mix.setPublicPath('.');

// No Noise
// @see: https://laravel.com/docs/5.6/mix#notifications
mix.disableSuccessNotifications();

// Disable Process CSS Urls
// @see: https://laravel.com/docs/5.7/mix#working-with-stylesheets
mix.options({
	processCssUrls: false
});

// ---------------------------------------------------------------------------------------------------------------------
// SVG Sprite
mix.webpackConfig({
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

			// new iconfont({
			// 	src: './typo3conf/ext/xna/Resources/Public/Svg/Font', // required - directory where your .svg files are located
			// 	family: 'icons', // optional - the `font-family` name. if multiple iconfonts are generated, the dir names will be used.
			// 	dest: {
			// 		font: './assets/fonts/[family].[type]', // required - paths of generated font files
			// 		css: './typo3conf/ext/xna/Resources/Public/Sass/xna/_icons.scss' // required - paths of generated css files
			// 	},
			// 	watch: {
			// 		pattern: './typo3conf/ext/xna/Resources/Public/Svg/Font/*.svg', // required - watch these files to reload
			// 		cwd: undefined // optional - current working dir for watching
			// 	},
			// })
		]
	});

// ---------------------------------------------------------------------------------------------------------------------
// CSS Assets

// Standard CSS Dateien -> werden alle gleich behandelt
for(const [source, target] of Object.entries(assets.css)) {
	mix.sass(source, target)
		.options({
			postCss: [
				require('postcss-inline-svg'),
				require('postcss-cachebuster'),
				require('postcss-combine-duplicated-selectors')({
					removeDuplicatedProperties: true
				})
			]
		}
	);
}

// XNA Inline Sonderbehandlung wg. Anpassung der Font-Pfade
mix.sass('typo3conf/ext/xna/Resources/Public/Sass/xna-inline.scss', 'assets/css/xna-inline.css')
	.options({
			postCss: [
				require('postcss-inline-svg'),
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

// Minify (*.min.css) fuer produktive Seiten
if(mix.inProduction() === true) {
	for(const [source, target] of Object.entries(assets.css)) {
		mix.minify(target);
	}
}

// mix.postCss('assets/css/xna.css', 'assets/css', [
// 	require('postcss-inline-svg')({
// 		paths: ['./assets/svg']
// 	})
// ]);

// ---------------------------------------------------------------------------------------------------------------------
// JS Assets

// Standard CSS Dateien -> werden alle gleich behandelt
for(const [source, target] of Object.entries(assets.js)) {
	mix.js(source, target);
}

// Minify (*.min.js) fuer produktive Seiten
if(mix.inProduction() === true) {
	mix.minify('assets/js/xna-inline.js');

	for(const [source, target] of Object.entries(assets.js)) {
		mix.minify(target);
	}
}

// ---------------------------------------------------------------------------------------------------------------------
// Copy Assets
for(const [source, target] of Object.entries(assets.copy)) {
	mix.copy(source, target);
}