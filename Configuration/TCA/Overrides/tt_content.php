<?php

// ---------------------------------------------------------------------------------------------------------------------
// @see: https://www.clickstorm.de/blog/crop-funktion-fuer-bilder-in-typo3-8-7/
$GLOBALS['TCA']['tt_content']['types']['xo_gallery']['columnsOverrides']['tx_xo_file']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']['thumbnail']['title'] = 'XXX';

//	'thumbnail' => [
//		'title' => 'XXXXXX',
//		'allowedAspectRatios' => [
//			'NaN' => [
//				'title' => 'XXX',
//				'value' => 0.0
//			],
//		],
//		'selectedRatio' => 'NaN',
//	],
//];

print_r($GLOBALS['TCA']['tt_content']['types']['xo_gallery']);
die();