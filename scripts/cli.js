#!/usr/bin/env node

let argv  = require('minimist')(process.argv.slice(2));

let tasks = require('../gulpfile.js')

if ( argv['w'] ) {
	tasks.watch()
} else {
	global.GLOBAL_buildThemeFile = argv['t']

	tasks.build()
}
