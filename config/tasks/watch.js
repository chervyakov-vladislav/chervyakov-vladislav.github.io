module.exports = () => {

  $.gulp.task('watch', () => {
    $.gulp.watch('./src/*.html', $.gulp.series('copy:html'))
      .on('change', $.bSync.reload)
    $.gulp.watch('./src/img/**/**/*.*', $.gulp.series('copy:images'))
      .on('change', $.bSync.reload)
    $.gulp.watch('./src/fonts/*.*', $.gulp.series('copy:fonts'))
      .on('change', $.bSync.reload)
  })

}