<?php

$GLOBALS['TCA']['pages']['columns']['media']['l10n_mode'] = 'exclude';
$GLOBALS['TCA']['pages']['columns']['media']['label'] = 'LLL:EXT:frontend/Resources/Private/Language/locallang_tca.xlf:pages.media_formlabel';
$GLOBALS['TCA']['pages']['columns']['media']['config'] = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
	'media',
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
				\TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
					'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
							--palette--;;filePalette'
				],
			],
			'columns' => [
				'crop' => [
					'config' => [
						'cropVariants' => [
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
								],
								'selectedRatio' => '16_9',
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
								],
								'selectedRatio' => '16_9',
							],
						]
					]
				]
			]
		],
		'maxitems' => 1,
//		'behaviour' => [
//			'allowLanguageSynchronization' => true
//		]
	],
	$GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext']
);

// ---------------------------------------------------------------------------------------------------------------------
// Uebersetzungsverhalten von bestehenden Feldern anpassen
//$GLOBALS['TCA']['pages']['columns']['exclude_slug_for_subpages']['l10n_mode'] = 'exclude';