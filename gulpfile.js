/* 
gulp.task(taskname,callback):创建任务  taskname任务名称  callback执行的回调
gulp.src(url):设置引入文件的路径
gulp.dest():输出文件设置(如果不存在目录名，自动生成)
pipe():管道流(将任务链式连接起来)
gulp 任务名   -- 执行任务
*/

const gulp = require('gulp'); //引入gulp，生成一个gulp对象
const html = require('gulp-minify-html'); //引入html压缩插件  html函数方法
const css = require('gulp-clean-css'); //引入css压缩插件  css函数方法
const sass = require('gulp-sass'); //引入sass编译插件 

//sass
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件 返回的是一个函数体。需要再次执行。
const script = require('gulp-uglify'); //压缩js的插件


// //es6转es5的三个模块
// //gulp-babel@7   babel-core       babel-preset-es2015
const babel = require('gulp-babel'); //主要
const babelcore = require('babel-core');
const es2015 = require('babel-preset-es2015');


const imagemin = require('gulp-imagemin'); //图片压缩
const watch = require('gulp-watch'); //gulp监听
// 图片压缩和监听无法下载





//2.复制文件
gulp.task('copyfile', () => {
    return gulp.src('src/thirdplugins/*.js')
        .pipe(gulp.dest('dist/thirdplugins'))
});

//3.压缩html文件 - 引入插件包
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html').pipe(html()).pipe(gulp.dest('dist/'))
})

// 4.压缩css文件 - 引入插件包
gulp.task('uglifycss', () => {
    return gulp.src('src/css/css/*.css')
        .pipe(css()) //执行css插件包
        .pipe(gulp.dest('dist/css'));
});
//5.sass编译成css - 引入插件包
gulp.task('compilesass', () => {
    return gulp.src('src/css/*.scss')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
            outputStyle: 'compressed'
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
})
//6.压缩js文件 - 引入插件包
gulp.task('uglifyjs', () => {
    return gulp.src('src/script/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(script())
        .pipe(gulp.dest('dist/script'))
})
//7.图片压缩 - jpg/gif/bmp/webp/ [png] - imagemin
gulp.task('uglifyimg',()=>{
    return gulp.src('src/img/*{jpg,png,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})
//8.监听
// 监听插件-gulp-watch()
// 参1:监听的目录，数组的形式
// 参2:通过gulp.parallel()并行监听任务名。
// 监听的任务必须先执行一次，再能进行监听。
gulp.task('default',()=>{
    watch(['src/*.html', 'src/css/*.css', 'src/script/*.js'], gulp.parallel('uglifyhtml', 'uglifycss', 'uglifyjs'));
})