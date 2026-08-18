const gulp = require('gulp');
// use Dart Sass implementation to avoid node-sass binary issues
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

//compile scss into css
function style() {
	return (
		gulp
			.src('src/assets/scss/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(minifyCSS())
			.pipe(rename({ suffix: '.min' }))
			// ensure compiled CSS is written to the existing assets/css folder (lowercase)
			.pipe(changed('src/assets/css'))
			.pipe(gulp.dest('src/assets/css'))
	);
	// .pipe(browserSync.stream());
}

function watch() {
	gulp.watch('src/assets/scss/**/*.scss', style);
}

exports.style = style;
exports.default = watch;
