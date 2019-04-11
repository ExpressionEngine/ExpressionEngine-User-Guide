/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

const fs			= require('fs')
const path			= require('path')
const yaml			= require('js-yaml')

// -------------------------------------------------------------------

const DEFAULT_CONFIG = {
	title: 'Site',

	sourceDir: 'site',
	outputDir: 'build',

	customVariables: {},

	tocPath: 'docs/_toc.yml',
	pageTemplatePath: './theme/doc-page-template.html',

	assetsDir: './theme/_assets',
	assetsSourceDir: './theme/assets-src',

	foldersToMove: [
		'./docs/_images/**',
		'./docs/_downloads/**'
	]
}

// -------------------------------------------------------------------

function getConfig() {
	let configPath = path.resolve('./config.yml')

	let config = {}

	try {
		// Get the config file
		config = fs.readFileSync(configPath, { encoding: 'utf8' })

		// Convert the yaml to json
		config = yaml.safeLoad(config)
	} catch (e) {
		throw `Error loading config.yml: \n ${e}`
	}

	// Replace any missing config options with the defaults
	return { ...DEFAULT_CONFIG, ...config }
}

// -------------------------------------------------------------------

module.exports = getConfig()
