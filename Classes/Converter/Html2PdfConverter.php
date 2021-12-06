<?php

namespace Ps\Xna\Converter;

use DOMDocument;
use DOMXPath;
use Psr\Log\LoggerAwareInterface;
use Psr\Log\LoggerAwareTrait;
use RuntimeException;
use TYPO3\CMS\Core\Localization\LanguageService;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Utility\DebuggerUtility;
use TYPO3\CMS\Install\FolderStructure\Exception\InvalidArgumentException;
use Walther\Html2pdf\Configuration\Configuration;

class Html2PdfConverter extends \Walther\Html2pdf\Converter\Converter {

	/**
	 * Urspruengliche Methode hat auch base64 kodierte Links und Resourcen ersetzt
	 *
	 * @param string $html	 *
	 * @return string|boolean
	 */
	protected function makeAbsoluteURLs(string $html) : string {
		if(is_null($html)) {
			return false;
		}

		/** @var \TYPO3\CMS\Core\Http\ServerRequest $serverRequest */
		$serverRequest = $GLOBALS['TYPO3_REQUEST'];
		$baseURL = $serverRequest->getUri()->getScheme() . '://' . $serverRequest->getUri()->getHost();

		$dom = new DOMDocument();
		libxml_use_internal_errors(true);
		$dom->loadHTML($html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
		libxml_use_internal_errors(false);
		$xpath = new DOMXPath($dom);

		// add base if not exists
		$baseUrlTag = $dom->getElementsByTagName('base');
		if ($baseUrlTag->length === 0) {
			$head = $dom->getElementsByTagName('head')->item(0);
			if ($head) {
				$base = $dom->createElement('base');
				$base->setAttribute('href', $baseURL . '/');
				if ($head->hasChildNodes()) {
					$head->insertBefore($base, $head->firstChild);
				} else {
					$head->appendChild($base);
				}
			}
		}

		// Method #1 - Nested Xpath Queries:
		$tagsAndAttributes = [
			'link' => 'href',
			'script' => 'src',
			'img' => 'src',
			'form' => 'action',
			'source' => 'srcset',
		];

		foreach ($tagsAndAttributes as $tag => $attr) {
			foreach ($xpath->query("//{$tag}[not(starts-with(@{$attr}, 'http'))]") as $node) {
				if((int) preg_match('/^data:.+;base64.+/', $node->getAttribute($attr)) === 0) {
					$node->setAttribute($attr, $baseURL . $node->getAttribute($attr));
				}
			}
		}

		// Method #2 - Single Xpath Query w/ Condition Block
		$targets = [
			"//img[not(starts-with(@src, 'http'))]",
			"//form[not(starts-with(@action, 'http'))]",
			"//a[not(starts-with(@href, 'http'))]"
		];

		foreach ($xpath->query(implode('|', $targets)) as $node) {
			if ($src = $node->getAttribute('src')) {
				if((int) preg_match('/^data:.+;base64.+/', $src) === 0) {
					$node->setAttribute('src', $baseURL . $src);
				}
			} elseif ($action = $node->getAttribute('action')) {
				$node->setAttribute('action', $baseURL . $action);
			} else {
				$node->setAttribute('href', $baseURL . $node->getAttribute('href'));
			}
		}

//		echo $dom->saveHTML();
//		die();

		return $dom->saveHTML();
	}
}