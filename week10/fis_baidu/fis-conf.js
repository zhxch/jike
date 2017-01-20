// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
// fis.config.set('modules.postpackager', 'simple');

// 取消下面的注释设置打包规则
// fis.config.set('pack', {
//     '/pkg/lib.js': [
//         'js/baidu.js',
//         'js/bootstrap.min.js',
//         'js/jquery-1.11.1js',
//     ],
//     //取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
//     '/pkg/aio.css': ['css/**.css']
// });


//合并文件
fis.match('*.js', {
	packTo: 'pkg/lib.js'
});
fis.match('*.css', {
	packTo: 'pkg/aio.css'
});


fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// 取消下面的注释可以开启simple对零散资源的自动合并
fis.config.set('settings.postpackager.simple.autoCombine', true);

fis.match('*.{js,css,png}', {
  useHash: true
});