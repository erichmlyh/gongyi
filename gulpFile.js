var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require("browser-sync").create({
    port: 8091
});
var reload = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./**",['scss']).on('change', reload);
});

gulp.task("scss", function() {
    return gulp.src("./css/*.scss")
        .pipe(autoprefixer({
            browsers: [
                'last 5 iOS versions',
                'last 5 Android versions',
                'last 5 ExplorerMobile versions',
                'last 5 ChromeAndroid versions',
                'last 5 UCAndroid versions',
                'last 5 FirefoxAndroid versions',
                'last 5 OperaMobile versions',
                'last 5 OperaMini versions',
                'last 5 Samsung versions',

                'last 3 Chrome versions',
                'last 3 Firefox versions',
                'last 3 Safari versions',
                'last 3 Edge versions',
            ],
            cascade: true, //是否美化属性值 默认：true 像这样：  //-webkit-transform: rotate(45deg);  // transform: rotate(45deg);  remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(sass({outputStyle: 'compact'}).on("error", sass.logError))
        .pipe(gulp.dest("./css"));
});

gulp.task('default', ['serve','scss']);
