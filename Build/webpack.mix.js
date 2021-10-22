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
	.js('../Resources/Public/Js/components/bootstrap/tab.js', 'assets/js/components/tab.js');

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
		'../../../../assets/js/libraries/micromodal.js'
	]);

	mix.minify([
		'../../../../assets/css/components/collapse.css',
		'../../../../assets/css/components/accordion.css',
		'../../../../assets/css/components/tab.css',
		'../../../../assets/css/libraries/tobii.css'
	]);
}