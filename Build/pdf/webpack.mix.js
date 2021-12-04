var mix = require('laravel-mix');

// Stopping at 95% emitting
// @see: https://github.com/JeffreyWay/laravel-mix/issues/1126
mix.setPublicPath('../../../../..');

// No Noise
// @see: https://laravel.com/docs/5.6/mix#notifications
mix.disableSuccessNotifications();

// Disable Process CSS Urls
// @see: https://laravel.com/docs/5.7/mix#working-with-stylesheets
mix.options({
	processCssUrls: false
});

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
mix.sass('../../Resources/Public/Sass/pdf.scss', 'assets/css/pdf.css')
	.options({
		postCss: [
			require('postcss-remove-media-query-ranges')({
				min: 576,
				removeMin: true
			}),
			require('postcss-remove-media-query-ranges')({
				min: 768,
				removeMin: true
			}),
			require('postcss-remove-media-query-ranges')({
				min: 992,
				removeMin: true
			}),
			require('postcss-cachebuster'),
			require('postcss-combine-duplicated-selectors')({
				removeDuplicatedProperties: true
			})
		]
	});