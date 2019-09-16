global.$ = {
  gulp: require('gulp'),
  delete: require('del'),
  tasks : require('./config/path.json').tasks,
  bSync: require('browser-sync').create(),
  dev: process.env.NODE_ENV === "development" ? true : false,
  glp: require('gulp-load-plugins')({
    rename : {
      'gulp-replace-task': 'replacetask'
    }
    
  })
}

for (const task in $.tasks) {
  require($.tasks[task])();
 
}

$.gulp.task('test', () => {
    console.log('test');
})

$.gulp.task('default', 
  $.gulp.series(
    'clean',

    $.gulp.parallel(
      'copy:html',
      'copy:images',
      'copy:fonts',
      'copy:js',
      'scss'
      
    ),
    'server',
    'watch'
    )
)

$.gulp.task('build', 
  $.gulp.series(
    'clean',

    $.gulp.parallel(
      'copy:html',
      'copy:images',
      'copy:fonts',
      'copy:js',
      'scss'
    )
    
    )
)