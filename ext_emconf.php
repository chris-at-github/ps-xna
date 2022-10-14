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
	'version' => '1.0.14',
	'constraints' => [
		'depends' => [
			'typo3' => '10.4.0-10.4.99',
			'xo' => '1.0.0-1.99.99',
			'ps14_hero' => '1.0.4-1.99.99',
			'ps14_container_columns' => '1.0.1-1.99.99',
			'ps14_accordion' => '1.0.1-1.99.99',
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
