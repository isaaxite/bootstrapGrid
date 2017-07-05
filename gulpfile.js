var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');    
var minCss = require('gulp-minify-css');

var path = './main.less';
gulp.task('less:dev', function(){
    return gulp.src(path)
    .pipe(less())
    .pipe(gulp.dest('./'))
    .pipe(minCss())
    .pipe(rename({
    	basename: 'grid',
    	suffix: '.min'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('dev', ['less:dev'], function(){
    gulp.watch(['./*.less'], ['less:dev']);
});