var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){

  console.log("Hello World");

});

gulp.task('javis', function(){

  console.log("JAVIS: At your service sir, your file has been saved.");

});

gulp.task('watch', function(){

  watch('./app/index.html', function(){

    gulp.start('javis');
    
  })

});
