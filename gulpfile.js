'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('build', function () {
  return gulp.src('./scss/matilda.scss')
    .pipe(
      sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['build']);
});
