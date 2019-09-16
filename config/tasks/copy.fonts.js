module.exports = () => {

  $.gulp.task('copy:fonts', () => {
    return $.gulp.src('./src/fonts/*.*')
      .pipe($.gulp.dest('dist/fonts'));
  })

}