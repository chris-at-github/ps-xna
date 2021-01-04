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

// ---------------------------------------------------------------------------------------------------------------------
// XO Slider
$GLOBALS['TCA']['tt_content']['types']['xo_slider']['columnsOverrides']['tx_xo_elements']['config']['overrideChildTca']['columns']['media']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']  = [
	'desktop' => [
		'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.desktop',
		'allowedAspectRatios' => [
			'21_9' => [
				'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.ratio.21_9',
				'value' => 21 / 9
			],
		],
		'selectedRatio' => '21_9',
	],
	'mobile' => [
		'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.mobile',
		'allowedAspectRatios' => [
			'4_3' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.4_3',
				'value' => 4 / 3
			],
		],
		'selectedRatio' => '4_3',
	],
];

// ---------------------------------------------------------------------------------------------------------------------
// XO Media Wall
$GLOBALS['TCA']['tt_content']['types']['xo_media_wall']['columnsOverrides']['tx_xo_elements']['config']['overrideChildTca']['columns']['media']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']  = [
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
			'1_1' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.1_1',
				'value' => 1
			],
		],
		'selectedRatio' => '1_1',
	],
];

$GLOBALS['TCA']['tt_content']['types']['xo_media_wall']['columnsOverrides']['tx_xo_elements']['config']['overrideChildTca']['columns']['thumbnail']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']  = [
	'thumbnail' => [
		'title' => 'LLL:EXT:xo/Resources/Private/Language/locallang_tca.xlf:tx_xo_crop_variant.thumbnail',
		'allowedAspectRatios' => [
			'1_1' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.1_1',
				'value' => 1
			],
		],
		'selectedRatio' => '1_1',
	],
];

// ---------------------------------------------------------------------------------------------------------------------
// News Alert Element
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:tx_xna_news_alert.title',
		'xna_news_alert',
		'xna-content-newsalert'
	),
	'CType',
	'xna_news_alert'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
	'*',
	'FILE:EXT:xna/Configuration/FlexForms/ContentElements/NewsAlert.xml',
	'xna_news_alert'
);

$GLOBALS['TCA']['tt_content']['types']['xna_news_alert'] = [
	'showitem' => '
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.header;header, bodytext, pi_flexform,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.appearance,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.frames;frames,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
			--palette--;;hidden,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
	',
	'columnsOverrides' => []
];

$GLOBALS['TCA']['tt_content']['types']['xna_news_alert']['columnsOverrides']['bodytext']['config'] = [
	'enableRichtext' => true,
	'richtextConfiguration' => 'xoDefault',
];