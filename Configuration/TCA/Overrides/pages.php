<?php

call_user_func(function($_EXTKEY) {

	// ---------------------------------------------------------------------------------------------------------------------
	// Weitere Felder in TT-Content
	$tmpXnaPagesColumns = [
		'tx_xna_main_header_slogan' => [
			'exclude' => true,
			'label' => 'LLL:EXT:xna/Resources/Private/Language/locallang_tca.xlf:tx_xna_pages.tx_xna_main_header_slogan',
			'config' => [
				'type' => 'check',
				'items' => [
					'1' => [
						'0' => 'LLL:EXT:lang/locallang_core.xlf:labels.enabled'
					]
				],
				'default' => 0,
			]
		],
	];


	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $tmpXnaPagesColumns);
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('pages', 'seo', '--linebreak--, tx_xna_main_header_slogan', 'after:description');

}, 'xna');