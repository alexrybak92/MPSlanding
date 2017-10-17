var gulp 				= require('gulp'),
	autoprefixer 	= require('gulp-autoprefixer'),
	browserSync 	= require('browser-sync'),
	cache       	= require('gulp-cache'),
	cssnano				= require('gulp-cssnano'),
	concat 				= require('gulp-concat'),
	uglify				= require('gulp-uglify'),
	del						= require('del'),
	gcmq 					= require('gulp-group-css-media-queries'),
	gutil 				= require('gulp-util'),
	imagemin			= require('gulp-imagemin'),
	notify 				= require( 'gulp-notify' ),
	pngquant			= require('imagemin-pngquant'),
	rename				= require('gulp-rename'),
	sass 					= require('gulp-sass'),
	pug 					= require('gulp-pug')


//pug
gulp.task('pug', function buildHTML() {
  return gulp.src('src/pug/*.pug')
		.pipe(pug({
    	pretty: true
    }).on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Pug Error!"
      }))
    )
    .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({stream: true}))
});

// sass - css
gulp.task('sass', function(){
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Scss Error!"
      }))
		)
		.pipe(gcmq())
		.pipe(autoprefixer({
            browsers: ['last 2 versions', '> 3%', 'ie 11'],
            cascade: false
        }))
		.pipe(gulp.dest('src/scss/out'))
		.pipe(browserSync.reload({stream: true}))
});


// js-libs
// gulp.task('scripts', function(){
// 	return gulp.src([
// 		// 'src/libs/jquery/dist/jquery.min.js',
// 	])
// 	// .pipe(concat('libs.min.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('src/js'))
// });
gulp.task('scripts', function(){
	return gulp.src('src/js-src/**/*.js')
	.pipe(uglify().on('error', notify.onError(
    {
      message: "<%= error.message %>",
      title  : "JSmin Error!"
    }))
	)
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/js'))
	.pipe(browserSync.reload({stream: true}))
});


// csss min
gulp.task('css', ['sass'], function(){
	return gulp.src('src/scss/out/*.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream: true}))
});



// bowser-sync
gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	})
});

// del in dist
gulp.task('clearCache', function(){
	return del.sync('www')
});


// img compress
gulp.task('img', function(){
	return gulp.src('src/images/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('www/images'));
});



//browser-watch
gulp.task('watch', ['browser-sync', 'pug', 'css', 'scripts'], function() {
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/scss/**/*.css', ['css']);
	gulp.watch('src/**/*', ['pug']);
	gulp.watch('src/pug/*.pug', ['pug']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js-src/**/*.js', browserSync.reload);
	gulp.watch('src/js-src/**/*.js', ['scripts']);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});


//production
gulp.task('build', ['img', 'sass', 'scripts'], function(){
	var buildCss = gulp.src([
		'src/css/*.css'])
		.pipe(gulp.dest('www/css'))

	var bildJs = gulp.src('src/js/**/*')
		.pipe(gulp.dest('www/js'))

	var bildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('www'))

	var buildImg = gulp.src([
		'src/img/**'])
		.pipe(gulp.dest('www/img'))

	var buildFonts = gulp.src([
		'src/fonts/**'])
		.pipe(gulp.dest('www/fonts'))

});
