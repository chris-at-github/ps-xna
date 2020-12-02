<?php

if(!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Konfiguration fuer den (CKE) Editor im Backend
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['xo'] = 'EXT:xna/Configuration/RTE/Default.yaml';

// Registrierung Icons
// @see: https://www.typo3lexikon.de/typo3-tutorials/core/systemextensions/core/imaging.html
$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

$iconRegistry->registerIcon(
	'xna-content-newsalert',
	\TYPO3\CMS\Core\Imaging\IconProvider\FontawesomeIconProvider::class,
	['name' => 'bell']
);

$iconRegistry->registerIcon(
	'xna-content-newsalert',
	\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
	['source' => 'EXT:xna/Resources/Public/Icons/Backend/xna-content-newsalert.svg']
);