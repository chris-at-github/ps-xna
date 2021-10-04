<?php

/***************************************************************
 * Extension Manager/Repository config file for ext: "XNA"
 ***************************************************************/
$EM_CONF[$_EXTKEY] = [
	'title' => 'PS XNA',
	'description' => '',
	'category' => 'plugin',
	'author' => 'Christian Pschorr',
	'author_email' => 'pschorr.christian@gmail.com',
	'state' => 'beta',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'clearCacheOnLoad' => 0,
	'version' => '1.0.11',
	'constraints' => [
		'depends' => [
			'typo3' => '10.4.0-10.4.99',
			'xo' => '1.0.0-1.99.99',
			'ce_accordion' => '1.0.0-1.99.99',
			'ce_hero' => '1.0.0-1.99.99',
			'ce_downloads' => '1.0.0-1.99.99',
			'ce_marker' => '1.0.0-1.99.99',
			'entity_product' => '1.0.0-1.99.99',
			'contact' => '1.0.0-1.99.99',
			'chart' => '1.0.0-1.99.99',
			'html2pdf' => '2.1.1-2.1.99',
			'teaser' => '1.0.0-1.99.99',
		],
		'conflicts' => [],
		'suggests' => [],
	],
	'autoload' => [
		'psr-4' => [
			'Ps\\Xna\\' => 'Classes',
		],
	],
];
