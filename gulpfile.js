var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS    = require('gulp-clean-css'),
		browserify = require('browserify'),
		babelify = require('babelify'),
		gutil	= require('gulp-util'),
		source = require('vinyl-source-stream'),
		concat = require('gulp-concat'),
		rename       = require('gulp-rename'),
		// browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify');

// gulp.task('browser-sync', ['styles', 'scripts'], function() {
// 		browserSync.init({
// 				server: {
// 						baseDir: "./public"
// 				},
// 				notify: false
// 		});
// });


gulp.task('react', () => {
	var appBundler = browserify({
		entries: './src/main.jsx',
		debug: true
	});

	appBundler.transform('babelify', {compact: true, presets: ['es2015', 'react', 'stage-0']})
		.bundle().on('error',gutil.log)
		.pipe(source('admin.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('build-react', ['react'], () => {
	return gulp.src('public/js/admin.js')
		.pipe(concat('admin.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js/'));
})

gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('public/css'));
	// .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./public/libs/modernizr/modernizr.js',
		'./public/libs/jquery/jquery-1.11.2.min.js',
		'./public/libs/waypoints/waypoints.min.js',
		'./public/libs/animate/animate-css.js',
		])
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('public/libs/**/*.js', ['scripts']);
	gulp.watch('src/**/*jsx', ['react']);
	gulp.watch('public/*.html');
});

gulp.task('default', 'watch');
