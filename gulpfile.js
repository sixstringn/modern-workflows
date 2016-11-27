var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
	'components/coffee/pixgrid.coffee',
	'components/coffee/rclick.coffee',
	'components/coffee/tagline.coffee',
	'components/coffee/template.coffee'
];

gulp.task('coffee', function() { 
  gulp.src(coffeeSources)
    .pipe(coffee({ bare: true })
 		.on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function() { 
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: outputDir + 'images',
      style: sassStyle
    })
    .on('error', gutil.log))
    .pipe(gulp.dest(outputDir + 'css'))
    .pipe(connect.reload())
});

	