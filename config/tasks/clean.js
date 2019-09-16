module.exports = () => {

  $.gulp.task('clean', () => {
    return $.delete('./dist');
  })

}