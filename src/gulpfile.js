var gulp         = require("gulp"), //基础库
	less         = require("gulp-less"), //less
	autoprefixer = require("gulp-autoprefixer"), //自动添加css前缀
	path		 = require("path"); //路径

gulp.task("css", function(){
	return gulp.src(['less/index.less', 'less/animation.less'])
		.pipe(less({ paths: [path.join(__dirname, "less", "includes")] }))
		.pipe(autoprefixer({
			browsers: [
				"chrome < 26",
				"safari < 6", 
				"ios < 7", 
				"android 4",
				"ie <= 11", 
				"opera 12.1",
				"firefox < 16"
			],
			cascade: true,
			remove: true
		}))
		.pipe(gulp.dest('../build/css/'))
});

gulp.task("watch", function(){
	gulp.watch(['less/index.less', 'less/animation.less'],  ["css"]);
});