var mix = require('laravel-mix');

// Stopping at 95% emitting
// @see: https://github.com/JeffreyWay/laravel-mix/issues/1126
mix.setPublicPath('../../../..');

// No Noise
// @see: https://laravel.com/docs/5.6/mix#notifications
mix.disableSuccessNotifications();

// Disable Process CSS Urls
// @see: https://laravel.com/docs/5.7/mix#working-with-stylesheets
mix.options({
	processCssUrls: false
});

// ---------------------------------------------------------------------------------------------------------------------
// CSS
mix.sass('../Resources/Public/Sass/xna/components/_collapse.scss', 'assets/css/components/collapse.css')
	.sass('../Resources/Public/Sass/xna/components/_accordion.scss', 'assets/css/components/accordion.css')
	.sass('../Resources/Public/Sass/xna/components/_tab.scss', 'assets/css/components/tab.css')
	.sass('../Resources/Public/Sass/xna/vendors/_tobii.scss', 'assets/css/libraries/tobii.css')
	.sass('../Resources/Public/Sass/xna/modules/_text-media.scss', 'assets/css/modules/text-media.css')
	.sass('../Resources/Public/Sass/xna/modules/_address.scss', 'assets/css/modules/address.css')
	.sass('../Resources/Public/Sass/xna/modules/_search.scss', 'assets/css/modules/search.css')
	.sass('../Resources/Public/Sass/xna/modules/_powermail.scss', 'assets/css/modules/powermail.css')
	.options({
		postCss: [
			require('postcss-cachebuster'),
			require('postcss-combine-duplicated-selectors')({
				removeDuplicatedProperties: true
			})
		]
	}
);

// JS
mix.js('../Resources/Public/Js/components/bootstrap/collapse.js', 'assets/js/components/collapse.js')
	.js('../Resources/Public/Js/components/bootstrap/tab.js', 'assets/js/components/tab.js')
	.js('../Resources/Public/Js/modules/search.js', 'assets/js/modules/search.js')
	.js('../Resources/Public/Js/libraries/tiny-slider.js', 'assets/js/libraries/tiny-slider.js');

mix.babel('../Resources/Public/Js/libraries/filter.js', '../../../../assets/js/libraries/filter.js');

mix.copy('./node_modules/@midzer/tobii/dist/tobii.min.js', '../../../../assets/js/libraries/tobii.js')
	.copy('./node_modules/chart.js/dist/chart.js', '../../../../assets/js/libraries/chart.js')
	.copy('./node_modules/micromodal/dist/micromodal.js', '../../../../assets/js/libraries/micromodal.js');

// ---------------------------------------------------------------------------------------------------------------------
// Production Mode
if(mix.inProduction() === true) {
	mix.minify([
		'../../../../assets/js/components/collapse.js',
		'../../../../assets/js/components/tab.js',
		'../../../../assets/js/libraries/tobii.js',
		'../../../../assets/js/libraries/chart.js',
		'../../../../assets/js/libraries/micromodal.js',
		'../../../../assets/js/libraries/filter.js',
		'../../../../assets/js/libraries/tiny-slider.js'
	]);

	mix.minify([
		'../../../../assets/css/components/collapse.css',
		'../../../../assets/css/components/accordion.css',
		'../../../../assets/css/components/tab.css',
		'../../../../assets/css/libraries/tobii.css',
		'../../../../assets/css/modules/text-media.css',
		'../../../../assets/css/modules/address.css',
		'../../../../assets/css/modules/search.css',
		'../../../../assets/css/modules/newsletter.css'
	]);
}