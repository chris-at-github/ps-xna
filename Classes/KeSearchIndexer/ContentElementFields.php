<?php

namespace Ps\Xna\KeSearchIndexer;

use Tpwd\KeSearch\Indexer\Types\Page;

class ContentElementFields {

	/**
	 * @param string $fields
	 * @param $pageIndexer
	 * @return void
	 */
	public function modifyPageContentFields(&$fields, $pageIndexer) {
		$fields .= ', subheader, tx_xo_file';
	}

	/**
	 * @param string $bodytext
	 * @param array $ttContent
	 * @param Page $pageIndexer
	 * @return void
	 */
	public function modifyContentFromContentElement(string &$bodytext, array $ttContent, Page $pageIndexer) {
		if(empty($ttContent['subheader']) === false) {
			$bodytext .= ' ' . strip_tags($ttContent['subheader']);
		}

		if(empty($ttContent['tx_xo_file']) === false) {

			// siehe Programmierung Page::getPageContent
			$pageAccessRestrictions = $pageIndexer->getInheritedAccessRestrictions((int)$ttContent['pid']);
			$tags = $pageIndexer->pageRecords[(int) $ttContent['pid']]['tags'];
			$fileObjects = $this->findAttachedFiles($ttContent, $pageIndexer, [
				'references.' => [
					'fieldName' => 'tx_xo_file',
					'table' => 'tt_content'
				],
				'as' => 'files'
			]);

			if(
				empty($pageAccessRestrictions['hidden']) === true &&
				$pageIndexer->checkIfpageShouldBeIndexed((int) $ttContent['pid'], $pageIndexer->pageRecords[(int) $ttContent['pid']]['sys_language_uid'])
			) {
				$pageIndexer->indexFiles($fileObjects, $ttContent, $pageAccessRestrictions['fe_group'], $tags);
			}
		}
	}

	/**
	 * @param array $ttContentRow
	 * @param Page $pageIndexer
	 * @param string $field
	 * @return array
	 */
	public function findAttachedFiles(array $ttContentRow, Page $pageIndexer, $processorConfiguration) {
		$pageIndexer->cObj->data = $ttContentRow;

		// Get files by filesProcessor
		$processedData = [];
		$processedData = $pageIndexer->filesProcessor->process($pageIndexer->cObj, [], $processorConfiguration, $processedData);
		$fileReferenceObjects = $processedData['files'];

		return $fileReferenceObjects;
	}
}