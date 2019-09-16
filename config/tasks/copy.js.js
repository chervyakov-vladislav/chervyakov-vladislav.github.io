module.exports = () => {

  $.gulp.task('copy:js', () => {
    return $.gulp.src('./src/js/*.js')
      .pipe($.gulp.dest('dist/js'));
  })

}