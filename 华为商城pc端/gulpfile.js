var gulp =require('gulp');
var load =require('gulp-load-plugins')();

gulp.task('html',function(done){
	gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist/'))
	done();
})

gulp.task('sass',function(done){
	gulp.src('./src/css/*.scss')
	.pipe(load.sass())
	.pipe(gulp.dest('./dist/css/'))
	done()
})

gulp.task('server',gulp.series(gulp.parallel('html','sass'),function(done){
	gulp.watch('./src/',gulp.series(gulp.parallel('html','sass'),function(done){
		done()
	}))
	done()
}))