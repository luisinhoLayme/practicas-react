//html
import htmlmin from 'gulp-htmlmin'

//css
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'

//Javascript
import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'

//pug
import pug from 'gulp-pug'

//sass
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sourcemaps from 'gulp-sourcemaps'

//Common
import concat from 'gulp-concat'

//clean css
import clean from 'gulp-purgecss'

//cache bust
import cacheBust from 'gulp-cache-bust'

//optimizacion imagenes
import imagemin from 'gulp-imagemin'
import webp from 'gulp-webp'
import gulpAvif from 'gulp-avif'

//browser sync
// import { init as server, stream, reload } from 'browser-sync'
import browserSync from 'browser-sync'
const server = browserSync.create()

//plumber
import plumber from 'gulp-plumber'

//Variables/constantes
const cssPlugins = [
  autoprefixer(),
  cssnano()
]

const production = false

gulp.task('htmlmin', () => {
  return gulp
    .src('./src/*.html')
    .pipe(plumber())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('styles', () => {
  return gulp
    .src('./src/css/*.css')
    .pipe(plumber())
    .pipe(concat('styles-min.css'))
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest('./public/css'))
    .pipe(server.stream())
})

gulp.task('babel', () => {
  return gulp
    .src('./src/js/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('scripts-min.js'))
    .pipe(babel({
      //esto es opcional si no lo ponemos lo busca en .babelrc
      presets: ['@babel/env']
    }))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('views', () => {
  return gulp
    .src('./src/views/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: production ? false : true
    }))
    .pipe(cacheBust({
      type: 'timestamp'
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('sass', () => {
  return gulp.src('./src/scss/app.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      // outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(server.stream())
})

gulp.task('clean', () => {
  return gulp
    .src('./public/css/styles.css')
    .pipe(plumber())
    .pipe(clean({
      content: ['./public/*.html']
    }))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('imgmin', () => {
  return gulp.src('./src/images/**/*')
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 30, progressive: true }),
      imagemin.optipng({ optimizationLevel: 1 })
    ]))
    .pipe(gulp.dest('./public/images'))
})

// convertir imagenes a .webp
gulp.task('imgwebp', () => {
  return gulp.src('./src/images/**/*.{jpg,png}')
    .pipe(plumber())
    .pipe( webp({quality: 40}) )
    .pipe(gulp.dest('./public/images'))
})

// convertir imagenes a .avif
gulp.task('imgavif', () => {
  return gulp.src('./src/images/**/*.{jpg,png}')
    .pipe(plumber())
    .pipe(gulpAvif({quality: 40}) )
    .pipe(gulp.dest('./public/images'))
})

gulp.task('default', () => {
  server.init({
    injectChanges: true,
    server: './public'
  })
  // gulp.watch('./src/*.html', gulp.series('htmlmin')).on('change', server.reload)
  // gulp.watch('./src/css/*.css', gulp.series('styles')).on('change', server.reload)

  gulp.watch('./src/views/**/*.pug', gulp.series('views')).on('change', server.reload)
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('./src/js/*.js', gulp.series('babel')).on('change', server.reload)

})
