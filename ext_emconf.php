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
	'state' => 'alpha',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'clearCacheOnLoad' => 0,
	'version' => '0.1.0',
	'constraints' => [
		'depends' => [
			'typo3' => '9.5.0-9.5.99',
			'xo' => '0.1.0-1.0.99',
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
