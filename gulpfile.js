var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');

gulp.task('default', ['autoprefixer', 'sass', 'livereload', 'watch']);

gulp.task('autoprefixer', function() {
  gulp.src('css/**/*.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
      }))
      .pipe(gulp.dest('css/'));
});

gulp.task('sass', function() {
  return sass('scss/**/*.scss')
         .on('error', sass.logError)
         .pipe(gulp.dest('css/'))
         .pipe(livereload());
});

gulp.task('livereload', function() {
  gulp.src('index.html')
  .pipe(livereload());
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('css/**/*.css', ['autoprefixer']);
  gulp.watch('index.html', ['livereload']);
})
