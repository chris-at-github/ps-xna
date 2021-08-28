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
// Components
// CSS
mix.sass('../Resources/Public/Sass/xna/components/_collapse.scss', 'assets/css/components/collapse.css')
	.sass('../Resources/Public/Sass/xna/components/_accordion.scss', 'assets/css/components/accordion.css')
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
mix.js('../Resources/Public/Js/components/bootstrap/collapse.js', 'assets/js/components/collapse.js');

// ---------------------------------------------------------------------------------------------------------------------
// Production Mode
if(mix.inProduction() === true) {
	mix.minify(['../../../../assets/js/components/collapse.js']);
	mix.minify([
		'../../../../assets/css/components/collapse.css',
		'../../../../assets/css/components/accordion.css'
	]);
}