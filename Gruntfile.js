// https://github.com/gruntjs
// http://gruntjs.com
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// == JSON Grunt Package
		pkg: grunt.file.readJSON('package.json'),

		// == Grunt Meta Banner
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
		},

		// == Watch Task
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['./scss/*.scss'],
				tasks: ['compass']
			},
			html: {
				files: ['./*.html'],
				tasks: ['livereload']
			}
		},

		// == compass
		compass: {
			dist: {
				options: {
					config: './config.rb'
				}
			}
		},

		// == qunit Tests
		qunit: {
			// grunt qunit will test all .php file extensions
			all: ['*.html']
		},

		// == Concatenation
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [ './js/plugins.js', './js/main.js'],
				dest: './js/minified/main-min.js'
			}
		},

		// == JSHinting
		jshint: {
			files: ['./gruntfile.js', './js/main.js'],
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					require: true,
					define: true,
					requirejs: true,
					describe: true,
					expect: true,
					it: true
				}
			},
			uses_defaults: ['./js/main.js']
		},

		// == Uglify/Minification
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: ['./js/minified/main-min.js'],
				dest: './js/minified/main-min.js'
			}
		}
	});

	// == Grunt Loaded Tasks
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-livereload');

	// == Grunt Registered Tasks
	grunt.registerTask('default', ['jshint', 'compass']);
	grunt.registerTask('test', ['qunit']);
	grunt.registerTask('hint', ['jshint']);
	grunt.registerTask('monitor', ['watch']);
	grunt.registerTask('con', ['concat']);
	grunt.registerTask('min', ['uglify']);
};