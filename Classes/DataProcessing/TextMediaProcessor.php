<?php

/*
 * This file is part of the package bk2k/bootstrap-package.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Ps\Xna\DataProcessing;

use TYPO3\CMS\Extbase\Utility\DebuggerUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\ContentObject\DataProcessorInterface;

class TextMediaProcessor extends \Ps\Xo\DataProcessing\TextMediaProcessor implements DataProcessorInterface {

	/**
	 * @param ContentObjectRenderer $cObj The data of the content element or page
	 * @param array $contentObjectConfiguration The configuration of Content Object
	 * @param array $processorConfiguration The configuration of this processor
	 * @param array $processedData Key/value store of processed data (e.g. to be passed to a Fluid View)
	 * @return array the processed data as key/value store
	 */
	public function process(ContentObjectRenderer $cObj, array $contentObjectConfiguration, array $processorConfiguration, array $processedData) {
		$processedData =  parent::process($cObj, $contentObjectConfiguration, $processorConfiguration, $processedData);

		if($processedData['data']['tx_xo_variant'] === 3) {
			$this->addImportJsFiles([
				'/assets/js/vendors/tiny-slider.js' => ['forceOnTop' => true],
				'/assets/js/modules/text-media.js'
			]);
			$this->addImportCssFiles(['/assets/css/vendors/tiny-slider.css']);
		}

		return $processedData;
	}
}