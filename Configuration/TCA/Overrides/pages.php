<?php

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
			],
			'columns' => [
				'crop' => [
					'config' => [
						'cropVariants' => [
							'thumbnail' => [
								'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.crop_variant.default',
								'allowedAspectRatios' => [
									'16_9' => [
										'title' => 'LLL:EXT:core/Resources/Private/Language/locallang_wizards.xlf:imwizard.ratio.16_9',
										'value' => 16 / 9
									],
								],
								'selectedRatio' => '16_9',
							],
						]
					]
				]
			]
		],
		'maxitems' => 1
	]
);