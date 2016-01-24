// gulp is great for automating tasks in web development

// the only gulp plugin is the uglify plugin and you have to require it
var gulp = require('gulp'),
	uglify = require('gulp-uglify');


// uglifies the javascript files inside the 
// js directory

gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});

// this is a demo task just meant to show you how the tasks
// are done by the build process
gulp.task('styles', function(){
	console.log('This is a test styles script');
});

// watch task
// the tasks in gulp.watch are redone every time on file save
// in this case the scripts task is redone every time I make changes to the 
// javascript file inside the JS folder
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
});

// this is the default task,
// all tasks are put in an array inside this task
gulp.task('default', ['scripts', 'styles', 'watch']);