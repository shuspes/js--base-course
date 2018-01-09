"use strict"

import gulp from "gulp";
import sass from "gulp-sass";
import concat from "gulp-concat";
import babel from "gulp-babel";
import del from "del";
import uglify from "gulp-uglify";

gulp.task("styles", function() {
  gulp.src("source/styles/**/*.scss")
  .on("data", file => console.log(file))  
  .pipe(sass())
  .pipe(concat("styles.css"))
  .pipe(gulp.dest("dest"));
});

gulp.task("scripts", function() {
  gulp.src("source/scripts/**/*.js")
  .on("data", file => console.log(file))
  .pipe(babel())
  .pipe(uglify())
  .pipe(concat("scripts.js"))
  .pipe(gulp.dest("dest"));
});

gulp.task("clean", function() {
  return del("dest");
});

gulp.task("watch", function() {
  gulp.watch("source/scripts/**/*.js", ["scripts"]);
  gulp.watch("source/styles/**/*.scss", ["styles"]);  
});

gulp.task("default", ["clean", "scripts", "styles"]);

gulp.task("dev", ["default", "watch"]);