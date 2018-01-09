"use strict"

import gulp from "gulp";
import sass from "gulp-sass";
import concat from "gulp-concat";
import babel from "gulp-babel";
import del from "del";
import uglify from "gulp-uglify";

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
});

gulp.task("default", gulp.series("clean", "page", gulp.parallel("scripts", "styles")));

gulp.task("dev", gulp.series("default", "watch"));