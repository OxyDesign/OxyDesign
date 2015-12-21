var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    del = require('del');

// Server
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['dist/']
  });
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['dev/libs/*.js','dev/js/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

// Styles
gulp.task('styles', function() {
  return sass('dev/css/style.scss')
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'));
});

// Clean
gulp.task('clean', function(cb) {
  del([
    'dist/scripts',
    'dist/styles'
  ],cb);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start(
    'scripts',
    'styles',
    'webserver'
  );

  gulp.watch('dev/css/*.scss', ['styles']);
  gulp.watch('dev/js/*.js', ['scripts']);
  gulp.watch('dev/libs/*.js', ['libs']);

  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);
});


