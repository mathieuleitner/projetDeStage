
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass()) 
      .on('error', function (err){
        console.log(err.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
      
  });

//JS

gulp.task('watch',['sass','browserSync'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
})

gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: 'app'
      },
    })
  })
  
