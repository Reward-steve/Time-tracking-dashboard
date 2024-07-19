const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
	return src("./src/scssComponent/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
	watch(["./src/scssComponent/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
