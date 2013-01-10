// https://github.com/gruntjs
// http://gruntjs.com

// global module:false
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        meta: {
            version: '0.1.0',
            banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* http://PROJECT_WEBSITE/\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
            'YOUR_NAME; Licensed MIT */'
        },
        // Validate files with JSHint settings
        lint: {
            files: ['scripts/plugins.js', 'scripts/main.js']
        },
        qunit: {
            // files: ['index.html'],
            // grunt qunit will test all .html
            all: ['*.html']
        },
        min: {
            dist: {
                src: ['scripts/plugins.js', 'js/main.js'],
                dest: 'scripts/minified/main-min.js'
            }
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint qunit'
        },
        jshint: {
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
                browser: true
            },
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
        uglify: {}
    });

    // Default task.
    grunt.registerTask('default', 'lint qunit min');
};
