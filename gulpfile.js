var gulp = require("gulp");
//引入sass插件
// var sass = require("gulp-sass");
//引入合并插件
// var concat = require("gulp-concat");
// //引入合并、压缩插件
// var uglify = require("gulp-uglify");
// //引入合并压缩、重命名插件
// var rename = require("gulp-rename");
// //引入压缩css插件
// var minifyCSS = require("gulp-minify-css");
// //引入压缩图片插件
// var imagemin = require("gulp-imagemin");
//复制所有html文件
gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\RALOZA"));
});
//复制所有图片
gulp.task("copy-img",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\RALOZA\\imgs"));
});
//复制所有css文件
gulp.task("copy-css",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\RALOZA\\css"));
});
//复制所有js文件
gulp.task("copy-js",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\RALOZA\\js"));
});
//复制所有font文件
gulp.task("copy-font",function(){
	gulp.src("fonts/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\RALOZA\\fonts"));
});
//复制所有sass文件并转为css文件
// gulp.task("sass",function(){
// 	gulp.src("sass/**/*.scss").pipe(sass()).pipe(gulp.dest("D:\\phpStudy\\WWW\\RALOZA\\css"));
// });
gulp.task("data",function(){
	gulp.src(["xml/*.xml","json/*.json","!json/test.json"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\RALOZA\\data"));
});
gulp.task("build",["copy-html","copy-img","copy-css","copy-js","data","sass","copy-font"],function(){
	console.info("OK!");
});
//监听，自动复制
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("css/**/*.css",["copy-css"]);
	gulp.watch("js/**/*.js",["copy-js"]);
	gulp.watch("fonts/**/*",["copy-font"]);
	gulp.watch("sass/**/*.scss",["sass"]);
});
