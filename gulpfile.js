var connect, gulp, jeet, stylus;

gulp = require('gulp');

stylus = require('gulp-stylus');

jeet = require('jeet');

connect = require('gulp-connect');

gulp.task('stylus', function() {
  return gulp.src('src/styl/**/*.styl').pipe(stylus({
    use: [jeet()]
  })).pipe(gulp.dest('public/css')).pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('public/**/*.html').pipe(connect.reload());
});

gulp.task('connect', function() {});

connect.server({
  root: ['public'],
  livereload: true
});

gulp.task('watch', function() {
  gulp.watch(['src/styl/**/*.styl'], ['stylus']);
  return gulp.watch(['public/**/*.html'], ['html']);
});

gulp.task('default', ['stylus', 'connect', 'watch']);