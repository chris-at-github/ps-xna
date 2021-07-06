import Chart from 'chart.js/auto';
import Filter from "../modules/filter";


(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		if(document.querySelector('.product--chart') !== null) {
			const labels = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000']
			const data = {
				labels: labels,
				datasets: [
					{
						label: '1,0 bar',
						data: [140.6, 281.2, 421.8, 562.4, 703, 843.6, 984.2, 1124.8, 1265.4, 1406, 1546.6, 1687.2, 1827.8, 1968.4, 2109, 2249.6, 2390.2, 2530.8, 2671.4, 2812],
						fill: false,
						borderColor: '#333',
						backgroundColor: '#333',
						tension: 0.1,
					},
					{
						label: '2,0 bar (Standard)',
						data: [218.0666667, 436.1333333, 654.2, 872.2666667, 1090.333333, 1308.4, 1526.466667, 1744.533333, 1962.6, 2180.666667, 2398.733333, 2616.8, 2834.866667, 3052.933333, 3271, 3489.066667, 3707.133333, 3925.2, 4143.266667, 4361.333333],
						fill: false,
						borderColor: '#666',
						backgroundColor: '#666',
						tension: 0.1
					},
					{
						label: '3,0 bar',
						data: [334.2666667, 668.5333333, 1002.8, 1337.066667, 1671.333333, 2005.6, 2339.866667, 2674.133333, 3008.4, 3342.666667, 3676.933333, 4011.2, 4345.466667, 4679.733333, 5014, 5348.266667, 5682.533333, 6016.8, 6351.066667, 6685.333333],
						fill: false,
						borderColor: '#999',
						backgroundColor: '#999',
						tension: 0.1
					}
				]
			};

			const ctx = document.querySelector('.product--chart');
			const myChart = new Chart(ctx, {
				type: 'line',
				data: data,
				options: {
					maintainAspectRatio: false,
					plugins: {
						legend: {
							labels: {
								boxWidth: 7,
								usePointStyle: true,
								padding: 40,
								pointStyle: 'circle'
							}
						}
					},
					scales: {
						x: {
							display: true,
							title: {
								display: true,
								text: 'Arbeitsbreite (mm)'
							}
						},
						y: {
							beginAtZero: true,
							display: true,
							title: {
								display: true,
								text: 'Druckluftverbrauch (NI/min)'
							}
						}
					}
				}
			});
		}
	});
})();



