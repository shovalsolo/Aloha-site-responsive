/*a gulp file that is tacking all the files from folder css and concatinating them to one file main.css */
/* 
install commands before running!!!

npm install gulp -g
npm install gulp --save-dev
npm install gulp-concat --save-dev
npm install --save-dev gulp-uglyfly
npm install --save gulp-uglifycss
npm install -g browser-sync
npm install browser-sync --save-dev
*/


/* declering variabels */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

/*concat and uglyfy css and js--------------- */

gulp.task('all', function() {
     gulp.src('*.css')
     .pipe(concat('main.css'))
     .pipe(uglifycss({
      "uglyComments": true
    }))

        .pipe(gulp.dest(''));

     gulp.src('*.js')
     .pipe(concat('main.js'))
     .pipe(uglifycss({
      "uglyComments": true
    }))
         .pipe(gulp.dest(''));
});



/*concat and uglyfy css------------------- */

gulp.task('css', function() {
 return gulp.src('*.css')
     .pipe(concat('main.css'))
        .pipe(uglifycss({
      "uglyComments": true
    }))
        .pipe(gulp.dest(''));
});

/*concat and uglyfy JS--------------------- */

gulp.task('js', function() {
 return gulp.src('*.js')
     .pipe(concat('main.js'))
        .pipe(uglifycss({
      "uglyComments": true
    }))
         .pipe(gulp.dest(''));
});

/*concat and uglyfy JS--------------------- */
/*basedir is the place of the index file */
/*after running browser-sync the browser will open and 
if you will direct to the correct index file your web will 
run http://localhost:3000/index1.html the correct index name*/

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
});
