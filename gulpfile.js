//
// gulp file default
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

// build gulp task

exports.build = series(scssTask, jsTask);
