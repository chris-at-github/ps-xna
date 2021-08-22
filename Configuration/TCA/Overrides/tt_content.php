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
// Hero | Hero Slider
$GLOBALS['TCA']['tt_content']['types']['ce_hero'] = [
	'showitem' => '
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.header;xoHeader,tx_xo_file,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.appearance,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.frames;frames,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
			--palette--;;hidden,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
			--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
		--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
	',
];

$GLOBALS['TCA']['tt_content']['types']['ce_hero']['columnsOverrides']['tx_xo_file']['config'] = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
	'tx_xo_file',
	[
		'appearance' => [
			'collapseAll' => 1,
			'createNewRelationLinkTitle' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:media.addFileReference',
		],
		'overrideChildTca' => [
			'types' => [
				'0' => [
					'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
							--palette--;;filePalette'
				],
				\TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => [
					'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
							--palette--;;filePalette'
				],
				\TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
					'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
							--palette--;;filePalette'
				],
				\TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => [
					'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
							--palette--;;filePalette'
				]
			]
		],
		'maxitems' => 1
	]
);
$GLOBALS['TCA']['tt_content']['types']['ce_hero']['columnsOverrides']['tx_xo_file']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [
	'default' => [
		'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.crop_variant.default',
		'allowedAspectRatios' => [
			'16_9' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.16_9',
				'value' => 16 / 9
			],
		],
		'selectedRatio' => '16_9',
	],
];

$GLOBALS['TCA']['tt_content']['types']['ce_hero_slider']['columnsOverrides']['tx_xo_elements']['config']['overrideChildTca']['columns']['media']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants']  = [
	'default' => [
		'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.crop_variant.default',
		'allowedAspectRatios' => [
			'16_9' => [
				'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.16_9',
				'value' => 16 / 9
			],
		],
		'selectedRatio' => '16_9',
	],
];

// ---------------------------------------------------------------------------------------------------------------------
// Gallery
$GLOBALS['TCA']['tt_content']['types']['ce_gallery']['columnsOverrides']['tx_xo_file']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = [
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
