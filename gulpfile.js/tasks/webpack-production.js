var config = require('../config')
if (config.tasks.js) {
	var gulp = require('gulp')

	gulp.task('webpack:production', function (callback) {
		var logger = require('../lib/compileLogger'),
			webpack = require('webpack'),
			webpackConfig = require('../lib/webpack-multi-config')

		webpack(webpackConfig('production'), function (err, stats) {
			logger(err, stats)
			callback()
		})
	})
}

