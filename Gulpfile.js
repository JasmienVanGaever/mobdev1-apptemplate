var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var gulpSass    = require('gulp-sass');

//compile sass into CSS
gulp.task('serve', function(){
    browerSync.init({
        server: './app'
    });
    gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('app/css'));
});