<?php

// ---------------------------------------------------------------------------------------------------------------------
// Text Image (Textpic)
$GLOBALS['TCA']['tt_content']['types']['textpic']['columnsOverrides']['image']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']  = [
	'desktop' => [
		'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.desktop',
		'allowedAspectRatios' => [
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
		'selectedRatio' => '4_3',
	],
	'mobile' => [
		'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.mobile',
		'allowedAspectRatios' => [
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
		'selectedRatio' => '4_3',
	],
];

// ---------------------------------------------------------------------------------------------------------------------
// Special Container Furnishing
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer((
new \B13\Container\Tca\ContainerConfiguration(
	'ps14_xna_furnishing', // CType
	'LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:container-furnishing.title', // label
	'LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:container-furnishing.description', // description
	[
		[
			['name' => 'LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:container-furnishing.column.main', 'colPos' => 4101],
		],
		[
			['name' => 'LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:container-furnishing.column.additional', 'colPos' => 4102]
		]
	]
)
));
