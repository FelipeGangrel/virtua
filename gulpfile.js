var gulp = require('gulp')
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('estilos', ()=>{
  gulp.src('./src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({compatibility: 'ie9'}))
    .pipe(gulp.dest('./dist/css/'));
});

var plugins = [
  './node_modules/jquery/dist/jquery.min.js',
  './src/js/tether.js',
  './node_modules/bootstrap/dist/js/bootstrap.min.js',
  './src/js/slick.js', //https://github.com/kenwheeler/slick/
  './src/js/wow.js', //https://wowjs.uk/docs.html
  './src/js/gmaps.js', //https://hpneo.github.io/gmaps/
];

gulp.task('plugins', ()=>{
  gulp.src(plugins)
    .pipe(concat('plugins.min.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('scripts', ()=>{
  gulp.src('./src/js/app.js')
    .pipe(babel({
      presets: ['es2015']
    })).on('error', (e)=>{
        console.log(e);
    })
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename('app.min.js'))
    .pipe(uglify().on('error', (e)=>{
      console.log(e);
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ()=>{
  gulp.start('estilos');
  gulp.watch('./src/**/*.scss', ['estilos']);

  gulp.start('plugins');

  gulp.start('scripts');
  gulp.watch('./src/js/app.js', ['scripts']);

});