<?php

if(!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Class Override
$GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects'][\Walther\Html2pdf\Converter\Converter::class] = [
	'className' => \Ps\Xna\Converter\Html2PdfConverter::class
];

// Konfiguration fuer den (CKE) Editor im Backend
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['xoDefault'] = 'EXT:xna/Configuration/RTE/Default.yaml';
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['xoMinimal'] = 'EXT:xna/Configuration/RTE/Minimal.yaml';

// Language Override
$GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['EXT:xo/Resources/Private/Language/locallang_frontend.xlf'][] = 'EXT:xna/Resources/Private/Language/locallang_frontend.xlf';

// KeSearch Indexer
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['ke_search']['modifyPageContentFields'][] = \Ps\Xna\KeSearchIndexer\ContentElementRecords::class;
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['ke_search']['modifyContentFromContentElement'][] = \Ps\Xna\KeSearchIndexer\ContentElementRecords::class;

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['ke_search']['modifyPageContentFields'][] = \Ps\Xna\KeSearchIndexer\RemoveContentFromHiddenParent::class;
$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['ke_search']['contentElementShouldBeIndexed'][] = \Ps\Xna\KeSearchIndexer\RemoveContentFromHiddenParent::class;