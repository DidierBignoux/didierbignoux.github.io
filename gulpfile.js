const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const changed = require("gulp-changed");



//compile scss into css
function style() {
    return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed('src/Assets/css'))
    .pipe(gulp.dest('src/Assets/css'))
    // .pipe(browserSync.stream());
}


function watch() { 
    gulp.watch('src/assets/scss/**/*.scss', style) 
   
}

exports.style = style;
exports.default = watch;
