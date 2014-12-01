/* gulpfile.js */

var browserify = require('browserify');
var del = require('del');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var reactify = require('reactify');
var rename = require('gulp-rename');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var paths = {
  app: './app/App.js',
  build: './root/js',
  js: './app/*.js',
};

gulp.task('clean', function(done) {
  del(['build'], done);
});

gulp.task('js', ['clean'], function() {
  var browserified = transform(function(filename) {
    return browserify(filename)
      .transform(reactify)
      .bundle();
  });
  gulp.src(paths.app)
    .pipe(plumber())
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
  gulp.start('js', function() {
    watch(paths.js, function() {
      gulp.start(['js']);
    });
  });
});

gulp.task('default', ['watch']);
