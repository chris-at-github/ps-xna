<?php

// ---------------------------------------------------------------------------------------------------------------------
// XO Gallery
// @see: https://www.clickstorm.de/blog/crop-funktion-fuer-bilder-in-typo3-8-7/
$GLOBALS['TCA']['tt_content']['types']['xo_gallery']['columnsOverrides']['tx_xo_file']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [
	'fullsize' => [
		'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.fullsize',
		'allowedAspectRatios' => [
			'NaN' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.free',
				'value' => 0.0
			],
		],
		'selectedRatio' => 'NaN',
	],
	'thumbnail' => [
		'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.thumbnail',
		'allowedAspectRatios' => [
			'NaN' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.free',
				'value' => 0.0
			],
			'16_9' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.16_9',
				'value' => 16 / 9
			],
			'4_3' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.4_3',
				'value' => 4 / 3
			],
			'1_1' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.1_1',
				'value' => 1
			],
		],
		'selectedRatio' => '16_9',
	],
];