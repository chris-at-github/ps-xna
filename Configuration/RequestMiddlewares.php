<?php

return [
	'frontend' => [
		'ps/xna/link-hander' => [
			'target' => \Ps\Xna\Middleware\LinkHeader::class,

			// keine Ahnung warum es auf after stehen muss -> eigentlich sollte diese Middleware davor ausgefuehrt werden
			// -> tut es aber nur mit after???
			'after' => [
				'typo3/cms-frontend/content-length-headers'
			]
		],
	],
];