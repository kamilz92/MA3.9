const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const less = require('gulp-less');

function imgSquash() {
    return gulp
        .src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./min-img'))
}

function style() {
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    // less
    gulp.watch('./less/**/*.less', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    imgSquash();
    style();
}
exports.go = (watch);