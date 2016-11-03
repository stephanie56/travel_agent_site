var gulp = require('gulp');
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function(){

  console.log("This is default action");

});

gulp.task('html', function(){

  console.log("I made some changes to html");

});


gulp.task('css', function(){

  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles/'));

});

//start wotching...

gulp.task('watch', function(){

  watch('./app/index.html', function(){

      gulp.start('html');

  });

  watch('./app/assets/styles/**/*.css', function(){

    gulp.start('css');

  });

});
