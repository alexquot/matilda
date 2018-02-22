'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const tildeImporter = require('node-sass-tilde-importer');
const pug = require('gulp-pug');

gulp.task('scss', function () {
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

gulp.task('views', function () {
  return gulp.src('views/*.pug')
    .pipe(pug({}))
    .on('error', function (e) {
      console.log(e);
    })
    .pipe(gulp.dest('./docs/'));
});

gulp.task('watch', function () {
  gulp.watch([
    './scss/**/*.scss',
    './views/**/*.pug'
  ], [
    'scss',
    'views'
  ]);
});
