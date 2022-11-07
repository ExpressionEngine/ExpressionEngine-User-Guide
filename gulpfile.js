/*!
 * This source file is part of the open source project
 * ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2019, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
 */

require('colors')

const path = require('path')
const gulp = require('gulp')
const del  = require('del')
const postcss  = require('gulp-postcss')
const tailwindcss  = require('tailwindcss')

const CONFIG = require('./scripts/config.js')

// -------------------------------------------------------------------

function clean() {
	return del([CONFIG.outputDir + '/**/*'])
}

// Copies the themes assets to the build folder
function copyThemeAssets() {
	return gulp.src(CONFIG.assetsDir + '/**/*')
	.pipe(gulp.dest(CONFIG.outputDir + '/_assets'))
}

// Copies all other files that are not Markdown
function copyOtherFiles() {
	let filesToMove = [
		path.resolve( CONFIG.sourceDir, '**/**'),
		'!' + path.resolve(CONFIG.sourceDir, '**/*.md'),
		'!' + CONFIG.tocPath
	]

	return gulp.src(filesToMove, { base: CONFIG.sourceDir })
	.pipe(gulp.dest(CONFIG.outputDir))
}

// -------------------------------------------------------------------

const build	= require('./scripts/build.js')
const buildAll = gulp.series(copyOtherFiles, copyThemeAssets, build)

exports.build = gulp.series(clean, buildAll)

exports.watch = () => {
	gulp.watch([CONFIG.sourceDir + '/**/*', CONFIG.assetsDir + '/**/*', CONFIG.pageTemplatePath], buildAll)
}

// -------------------------------------------------------------------
// Theme Assets
// -------------------------------------------------------------------

const less     = require('gulp-less')
const rename   = require("gulp-rename")
const minify   = require('gulp-minify')
const cleanCSS = require('gulp-clean-css')
const babel    = require('gulp-babel')

function cleanThemeAssets() {
	return del([CONFIG.assetsDir + '/**/*'])
}

function buildLess() {
	return gulp.src(CONFIG.assetsSourceDir + '/styles/default.less')
	.pipe(less())
	.pipe(cleanCSS({ level: 1 }))
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest(CONFIG.assetsDir))
}

function buildJs() {
	return gulp.src([CONFIG.assetsSourceDir + '/js/main.js'])
		.pipe(babel({
			presets: [
				[ "@babel/preset-env", { "targets": "> 0.25%, not dead"} ]
			]
		}))
		.pipe(minify({ ext: { min: '.min.js' }, noSource: true, preserveComments: 'some'}))
		.pipe(gulp.dest(CONFIG.assetsDir))
}

function useTailwindcss() {
	return gulp.src('./node_modules/tailwindcss/tailwind.css')
		.pipe(postcss([
			tailwindcss(CONFIG.tailwindConfig),
			require( 'autoprefixer' )
		]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(CONFIG.assetsDir))
}

function moveThemeFonts() {
	return gulp.src(CONFIG.assetsSourceDir + '/webfonts/**/*')
	.pipe(gulp.dest(CONFIG.assetsDir +  '/webfonts'))
}

function moveThemeImages() {
	return gulp.src(CONFIG.assetsSourceDir + '/images/**/*')
	.pipe(gulp.dest(CONFIG.assetsDir +  '/images'))
}

const buildAssets = gulp.series(cleanThemeAssets, buildLess, buildJs, moveThemeImages, moveThemeFonts, useTailwindcss)

exports.buildAssets = buildAssets
exports.watchAssets = () => gulp.watch([CONFIG.assetsSourceDir + '/styles/**/*', CONFIG.assetsSourceDir + '/js/**/*', CONFIG.assetsSourceDir + '/images/**/**', CONFIG.assetsSourceDir + '/webfonts/**/**'], buildAssets)
