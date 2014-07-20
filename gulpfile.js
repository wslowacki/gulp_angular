var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  lr = require('tiny-lr'),
  server = lr(),
  karma = require('gulp-karma'),
  jasmine = require('gulp-jasmine');

// test files
var testFiles = [
  'src/**/*.spec.js'
];

// Styles
gulp.task('styles', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass({
      style: 'expanded',
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(livereload(server));
});

gulp.task('tests', function() {
  // Be sure to return the stream
  // NOTE: Using the fake './foobar' so as to run the files
  // listed in karma.conf.js INSTEAD of what was passed to
  // gulp.src !
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.error(err);
    });
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(['src/scripts/**/*.js', '!src/**/*.spec.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(livereload(server));

});

// HTML 
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload(server));
});

gulp.task('vendor', function() {
  return gulp.src([
      'vendor/jquery/dist/jquery.js',
      'vendor/angular-latest/build/angular.js'
    ])
    .pipe(concat('vendor.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/vendor/'));
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist/styles', 'dist/scripts', 'dist/vendor'], {
      read: false
    })
    .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('tests', 'scripts', 'styles', 'html', 'vendor');
});

// Watch
gulp.task('watch', function() {

  gulp.start('default');

  server.listen(35729, function(err) {
    if (err) return console.error(err);
  });

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['tests', 'scripts']);

  // Watch .html files
  gulp.watch('src/*.html', ['html']);

});