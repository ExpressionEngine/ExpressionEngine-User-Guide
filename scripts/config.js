/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

module.exports = {
	currentVersion: '5.2.2',

	currentYear: new Date().getFullYear(),

	sourceDir: './docs',
	outputDir: './build',

	tocPath: './docs/_toc.yml',
	pageTemplatePath: './theme/doc-page-template.html',

	assetsDir: './theme/_assets',
	assetsSourceDir: './theme/assets-src',

	foldersToMove: [
		'./docs/_images/**',
		'./docs/_downloads/**'
	]
}
