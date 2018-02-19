'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const tildeImporter = require('node-sass-tilde-importer');

gulp.task('build', function () {
  return gulp.src('./scss/matilda.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
        importer: tildeImporter
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['build']);
});
