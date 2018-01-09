"use strict"

import gulp from "gulp";
import sass from "gulp-sass";
import concat from "gulp-concat";
import babel from "gulp-babel";
import del from "del";
import uglify from "gulp-uglify";
import browserSync from "browser-sync";

gulp.task("styles", function() {
  return gulp.src("source/styles/**/*.scss")
              .on("data", file => console.log(file))  
              .pipe(sass())
              .pipe(concat("styles.css"))
              .pipe(gulp.dest("public"));
});

gulp.task("scripts", function() {
  return gulp.src("source/scripts/**/*.js")
              .on("data", file => console.log(file))
              .pipe(babel())
              // .pipe(uglify()) //NOTE: move to build?
              .pipe(concat("scripts.js"))
              .pipe(gulp.dest("public"));
});

gulp.task("page", function() {
  return gulp.src("source/index.html")
              .pipe(gulp.dest("public"));
});

gulp.task("clean", function() {
  return del("public");
});

gulp.task("watch", function() {
  gulp.watch("source/scripts/**/*.js", gulp.series("scripts"));
  gulp.watch("source/styles/**/*.scss", gulp.series("styles"));  
  gulp.watch("source/index.html", gulp.series("page"));    
});

const bs = browserSync.create();

gulp.task("serve", function() {
  bs.init({
    server: "public"
  });
  bs.watch("public/**/*.*").on("change", bs.reload);
});

gulp.task("default", gulp.series("clean", "page", gulp.parallel("scripts", "styles")));

gulp.task("dev", gulp.series("default", gulp.parallel("watch", "serve")));