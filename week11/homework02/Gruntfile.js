module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// uglify: {
		// 	options: {
		// 		banner: '/*! create by <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
		// 	},
		// 	static_mappings: {
		// 		files: [{
		// 			src: 'js/index.js',
		// 			dest: 'build/index.min.js'
		// 		},{
		// 			src: 'js/main.js',
		// 			dest: 'build/main.min.js'
		// 		}]
		// 	}
		// },
		// concat: {
		// 	bar: {
		// 		src: ['build/*.js'],
		// 		dest: 'dest/all.min.js'
		// 	}
		// },
    less: {
			compile: {
	            files: {
	                'css/busStop.css': 'css/busStop.less'
            	}
        	}
		},

		watch: {
			files: ['css/busStop.less']
		}
	});

	// grunt.loadNpmTasks("grunt-contrib-uglify");
	// grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");



	// 	//默认被执行的任务列表
	grunt.registerTask('default',['less', 'watch']);

};
