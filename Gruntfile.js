/*
.|'''''|                            ||
|| .                                ||
|| |''|| '||''| '||  ||` `||''|,  ''||''
||    ||  ||     ||  ||   ||  ||    ||
`|....|' .||.    `|..'|. .||  ||.   `|..' The JavaScript Task Runner || http://gruntjs.com
*/

module.exports = function(grunt) {

	// Load NPM Tasks
	// https://github.com/shootaroo/jit-grunt
	require('jit-grunt')(grunt);
	grunt.loadNpmTasks('grunt-postcss');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// == Assemble YAML Front Matter
		site: grunt.file.readYAML('_config.yml'),

		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
		},

		// == Assemble
		assemble: {
			options: {
				flatten: true,
				pkg: '<%= pkg %>',
				site: '<%= site %>',
				partials: '<%= site.includes %>/*.html',
				layouts: '<%= site.layouts %>',
				layoutext: '<%= site.layoutext %>',
				layout: '<%= site.layout %>'
			},
			typeplate: {
				files: {
				'./': '<%= site.pages %>/*.html'
				}
			}
		},

		// == Grunt Dev Update
		// https://npmjs.org/package/grunt-dev-update
		// http://pgilad.github.io/grunt-dev-update
		devUpdate: {
			main: {
				options: {
					// Report updated dependencies? 'false' | 'true'
					reportUpdated: false,
					// 'force'|'report'|'prompt'
					updateType   : "force"
				}
			}
		},

		// == Watch Tasks
		watch: {
			html: {
				files: ['templates/**/*.html'],
				tasks : ['assemble']
			},

			sass: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:dist', 'postcss']
			},

			css: {
				files: ['css/**/*.css']
			},

			js: {
				files: ['js/plugins.js','js/main.js']
			},

			livereload: {

				options: {
					livereload: true
				},

				files: ['templates/**/*.html', 'css/**/*.css', 'js/**/*js', '**/img/**/*.{png,jpg,jpeg,gif,webp,svg}']
			}
		},

		// == Sass Config
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/main.css' : 'scss/main.scss',
					'css/demo.css' : 'scss/demo.scss'
				}
			}
		},

		// == PostCSS
		// https://github.com/nDmitry/grunt-postcss
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({
						browsers: 'last 2 versions'
					})
				]
			},
			dist: {
				src: 'css/main.css'
			}
		},

		// == Run A Persistant Static Web Server
		connect: {
			server: {
				options: {
					port: 9001,
					// '.' operates from the root of your Gruntfile.js.
					// Otherwise you gotta do something like this...
					// Users/user-name/www-directory/website-directory
					// For me it's this...
					// Users/grayghostvisuals/Sites/typeplate
					base: '.',
					keepalive: false, // set to false to work side by side w/watch task.
					livereload: true,
					open: true
				}
			}
		},

		// == Qunit Tests
		qunit: {
			all: ['*.html']
		},

		// == Concatenation
		concat: {
			options: {
				banner: '<%= meta.banner %>',
				separator: ';'
			},
			dist: {
				src: [ 'js/plugins.js', 'js/main.js'],
				dest: 'js/minified/main-min.js'
			}
		},

		// == JSHint
		jshint: {
			files: ['Gruntfile.js', 'js/main.js'],
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
					requirejs: false,
					describe: true,
					expect: true,
					it: true
				}
			},
			uses_defaults: ['js/main.js']
		},

		// == Uglify/Minification
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: ['js/minified/main-min.js'],
				dest: 'js/minified/main-min.js'
			}
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: '',
						src: ['bower_components/normalize-css/normalize.css'],
						dest: 'css/'
					}
				]
			},
			pkg: {
				files: [
					{
						expand: true,
						cwd: '',
						src: ['bower_components/typeplate/css/typeplate.css'],
						dest: 'css/'
					}
				]
			}
		},

		// == Asset Cache Bust
		// https://github.com/gillesruppert/grunt-asset-cachebuster
		// gived your assets a version flag ?v=1385933480172
		asset_cachebuster: {
			options: {
				// Buster Also Accepts : Date.now()
				buster: '1.1.2',
				ignore: [
					// Ignore cache busting CDN URIs
					'//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
					'js/bower_components/jquery.min.js',
					'js/bower_components/modernizr.min.js'
				]
			},
			build: {
				files: [
					{
						src: ['index.html'],
						dest: 'index.html'
					}
				]
			}
		}
	});

	// == Grunt Registered Tasks
	grunt.registerTask('default', ['connect', 'watch']);
	grunt.registerTask('update', ['devUpdate']);
	grunt.registerTask('test', ['qunit']);
	grunt.registerTask('hint', ['jshint']);
	grunt.registerTask('glue', ['concat']);
	grunt.registerTask('squish', ['uglify']);
	grunt.registerTask('bust', ['asset_cachebuster']);
	grunt.registerTask('build', ['copy', 'glue', 'squish', 'assemble']);
};
