module.exports = () => {

  $.gulp.task('copy:images', () => {
    return $.gulp.src('./src/img/**/**/*.*')
      .pipe($.gulp.dest('dist/img'));
  })

}