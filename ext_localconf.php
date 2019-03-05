<?php

if(!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Konfiguration fuer den (CKE) Editor im Backend
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['xo'] = 'EXT:zn/Configuration/RTE/Default.yaml';