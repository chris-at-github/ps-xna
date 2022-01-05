<?php

namespace Ps\Xna\KeSearchIndexer;

use Tpwd\KeSearch\Indexer\Types\Page;
use TYPO3\CMS\Core\Database\Connection;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Database\Query\QueryBuilder;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Utility\DebuggerUtility;

class ContentElementRecords {

	/**
	 * @param string $fields
	 * @param $pageIndexer
	 * @return void
	 */
	public function modifyPageContentFields(&$fields, $pageIndexer)	{
		$fields .= ', tx_xo_elements';
	}

	/**
	 * @param string $bodytext
	 * @param array $ttContent
	 * @param Page $pageIndexer
	 * @return void
	 */
	public function modifyContentFromContentElement(string &$bodytext, array $ttContent, Page $pageIndexer) {
		if(empty($ttContent['tx_xo_elements']) === true) {
			return;
		}

		/** @var QueryBuilder $queryBuilder */
		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tx_xo_domain_model_elements')->createQueryBuilder();
		$statement = $queryBuilder
			->select('uid', 'title', 'description', 'content')
			->from('tx_xo_domain_model_elements')
			->where(
				$queryBuilder->expr()->eq('foreign_uid', $queryBuilder->createNamedParameter((int) $ttContent['uid'], Connection::PARAM_INT)),
				$queryBuilder->expr()->eq('sys_language_uid', $queryBuilder->createNamedParameter((int) $ttContent['sys_language_uid'], Connection::PARAM_INT))
			)
			->execute();

		while($row = $statement->fetch()) {
			if(empty($row['title']) === false) {
				$bodytext .= ' ' . strip_tags($row['title']);
			}

			if(empty($row['description']) === false) {
				$bodytext .= ' ' . strip_tags($row['description']);
			}
		}
	}

//	protected function indexChildContentElements($parentUid, $sysLanguageUid, Page $pageIndexer) {
//		DebuggerUtility::var_dump($parentUid, $sysLanguageUid);
//		$x = '';
//
//		/** @var QueryBuilder $queryBuilder */
//		$queryBuilder = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('tt_content')->createQueryBuilder();
//		$statement = $queryBuilder
//			->select('*')
//			->from('tt_content')
//			->where(
//				$queryBuilder->expr()->eq('tx_xo_parent', $queryBuilder->createNamedParameter($parentUid, Connection::PARAM_INT)),
//				$queryBuilder->expr()->eq('sys_language_uid', $queryBuilder->createNamedParameter($sysLanguageUid, Connection::PARAM_INT))
//			)
//			->execute();
//
//		while($row = $statement->fetch()) {
//			$x .= $pageIndexer->getContentFromContentElement($row);
//		}
//
//		DebuggerUtility::var_dump($x);
//	}
}