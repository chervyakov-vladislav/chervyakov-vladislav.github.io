module.exports = () => {

  $.gulp.task('copy:html', () => {
    return $.gulp.src('./src/*.html')
      .pipe($.gulp.dest('dist'));
  })

}