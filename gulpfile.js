/* jslint node: true */
'use strict';

var properties = require('./build.json');

var	gulp = require('gulp'),
	JSZip = require('jszip'),
	dateformat = require('dateformat'),
	del = require('del'),
	exec = require('child_process').exec,
	fs = require('fs'),
	mkdirp = require('mkdirp'),
	phplint = require('phplint').lint,
	plugin = require('gulp-load-plugins')(),
	runSequence = require('run-sequence'),
	Q = require('q');

gulp.task('version_bump', ['_properties'], function () {
	return versionBump();
});

/**
 * Generate certain properties (build date, update file, DP status)
 *
 * Given a tag with an identifier (3.1.0-dp.4), we can automatically gather the
 * version (3.1.0) and the identifier (dp.4), however both can be supplied
 * manually.
 *
 * @param {String} tag The tag to pull from the repository, must be pushed.
 * @param {String} version (Optional) The version to use when replacing version
 *                         numbers in the code. If no verison is defined, we use
 *                         the contents of the tag up to (but excluding) a `-`.
 *                         If no `-` exists, we use the whole version.
 * @param {Number} build The build date as a number in the `yyyymmdd` format
 *                       (e.g. 20151210)
 * @param {String} identifier (Optional) The version identifier (e.g. dp.2,
 *                            beta.1). If no identifier is defined, we use the
 *                            contents of tag starting from the `-` (excluding
 *                            it) to the end of the tag.
 * @param {Object} repositories Object containing the URLs of the app and
 *                              documentation repositories
 * @param {Array} core_exclude Array containing strings of modules to exclude
 *                             from a Core build
 */
gulp.task('_properties', function () {
	// Define version

	for (var i = 0; i < process.argv.length; i++) {
		var arg = process.argv[i];
		if (arg.indexOf('--version=') != -1) {
			properties.version = arg.replace('--version=', '');
		}
	}

	if (typeof properties.version == 'undefined') {
		properties.version = properties.tag;
	}

	// Define identifier
	if (typeof properties.identifier == 'undefined') {
		if (properties.tag.lastIndexOf('-') >= 0) {
			properties.identifier = properties.tag.substr(properties.tag.lastIndexOf('-') + 1);
		} else {
			properties.identifier = '';
		}
	}

	// Set build date to today (e.g. 20150706)
	if (typeof properties.build === 'undefined') {
		properties.build = dateformat(new Date(), 'yyyymmdd');
	}

	// Generate ud_n_n_n.php build version
	var normalizedVersion = properties.version;
	if (properties.version.lastIndexOf('-') >= 0) {
		// Strip any suffixes like -dp.1
		normalizedVersion = properties.version.substr(0, properties.version.lastIndexOf('-'));
	}
	var segments = normalizedVersion.split('.');
	segments.forEach(function(segment, index) {
		if (index > 0 && segment.length == 1) {
			segments[index] = '0' + segment;
		}
	});
	properties.update_file = 'ud_' + segments.join('_') + '.php';

	// Determine DP status
	properties.dp = (properties.tag.match(/\-dp/)) ? true : false;
});

/**
 * Bump the version numbers
 *
 * @param  {string} path The path to change the version in
 *
 * @return {void}
 */
 var versionBump = function (path) {
	path = (typeof path !== 'undefined') ? path : '.';

	var fns = [
		function() {
			var file = path + '/source/conf.py';

			fs.open(file, 'r', function (err, fd) {
				if (err) throw err;
			});

			return gulp.src(file)
				.pipe(plugin.replace(
					/release = '(.*?)'/gi,
					"release = '" + properties.version + "'"
				))
				.pipe(gulp.dest('source/', {cwd: path}));
		}
	];

	var promises = fns.map(function(fn) {
		var deferred = Q.defer();

		fn().on('end', function () {
			deferred.resolve();
		});

		return deferred.promise;
	});

	return Q.all(promises);
 };

