var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var less = require('gulp-less');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');

//js压缩
gulp.task('js', function(){
  var jsSrc = ['app/js/*.js'],
      jsDst = 'dest/js/';

  gulp.src(jsSrc)
      .pipe(plugins.uglify())
      .pipe(gulp.dest(jsDst));
});
//css压缩
gulp.task('css', function(){
  var cssSrc = ['app/css/*.css'],
      cssDst = 'dest/css';
      gulp.src(cssSrc)
          .pipe(plugins.minifyCss())
          .pipe(gulp.dest(cssDst));
});
//编译less
gulp.task('compile-less', function(){
  gulp.src('app/css/*.less')
      .pipe(less({
        path: ['app/css/inculdes']
      }))
      .pipe(autoprefixer({
        browsers: ['last 30 version', '>1%'],cascade: true
      }))
      .pipe(rev())
      .pipe(gulp.dest('dest/css'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('./rev'));
});

gulp.task('rev', function(){
  gulp.src(['.rev/*.json', '.app/*.html'])
      .pipe(revCollector())
      .pipe(gulp.dest('./dest'));
});

//文件合并
gulp.task('concat', function(){
  gulp.src('app/js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('dest/js'));
});


gulp.task('default', ['js', 'css', 'concat', 'compile-less', 'rev']);
