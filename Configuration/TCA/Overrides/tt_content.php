<?php

// ---------------------------------------------------------------------------------------------------------------------
// Text Image (Textpic)
$GLOBALS['TCA']['tt_content']['types']['textpic']['columnsOverrides']['image']['config']['maxitems'] = 10;
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

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', '--palette--;;xoBackgroundMedia', 'ps14_xna_furnishing', 'after:space_after_class');

// ---------------------------------------------------------------------------------------------------------------------
// Special Sketch Module
// ---------------------------------------------------------------------------------------------------------------------
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
	array(
		'LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:sketch.title',
		'ps14_xna_sketch',
		'content-image'
	),
	'CType',
	'xna'
);

$GLOBALS['TCA']['tt_content']['types']['ps14_xna_sketch'] = [
	'showitem' => '
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.header;xoHeader, tx_xo_elements,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.appearance,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.frames;frames,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
			--palette--;;hidden,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
	',
];

//$GLOBALS['TCA']['tt_content']['types']['ps14_hero_slider']['columnsOverrides']['tx_xo_elements']['config']['foreign_label'] = 'uid';
$GLOBALS['TCA']['tt_content']['types']['ps14_xna_sketch']['columnsOverrides']['tx_xo_elements']['config']['overrideChildTca'] = [
	'columns' => [
		'record_type' => [
			'config' => [
				'items' => [
					['LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:tx_xo_domain_model_elements.record_type.sketch_floor', 'ps14_xna_sketch_floor'],
				],
				'default' => 'ps14_xna_sketch_floor'
			]
		],
		'description' => [
			'config' => [
				'richtextConfiguration' => 'xoDefault'
			]
		]
	],
	'types' => [
		'ps14_xna_sketch_floor' => [
			'showitem' => '
				l10n_diffsource, record_type, title, description, media,
				--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
				--palette--;;visibility,
				--palette--;;access',
		],
	]
];
