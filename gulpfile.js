const gulp = require("gulp"),
  gulpUglify = require("gulp-uglify"),
  gulpImagemin = require("gulp-imagemin"),
  webserver = require("gulp-webserver");

gulp.task("webserver", () => {
  gulp.src("./app/").pipe(
    webserver({
      port: 8080,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: "index.html"
    })
  );
});

gulp.task("default", ["webserver"]);

gulp.task("image", () => {
  gulp.src("/image/original**").pipe(gulpImagemin()).pipe(gulp.dest("image"));
});

gulp.task("watch", () => {
  gulp.watch("/*.js", ["other"]);
});

gulp.task("other", () => {
  gulp.src("/*.js").pipe(gulpUglify()).pipe(gulp.dest("/jsmin"));
});
