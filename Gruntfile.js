'use strict';
module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.initConfig({
  watch: {
    options: {
      livereload: true,
    },
    css: {
        files: ['src/styles/{,*/}*.scss'],
        tasks: ['compass:server'],
        options: {
                    livereload: true
                }
    },
    html: {
        files: ['src/{,*/}*.html'],
        tasks: [],
        options: {
                    livereload: true
                }
    },
  },
  compass: {                              // Task
    server: {                    // Another target
      options: {
        sassDir: 'src/styles',
        cssDir: '.tmp/css',
        importPath: ['bower_components']
      }
    },
    dist: {                    // Another target
      options: {
        sassDir: 'src/styles',
        cssDir: 'dist/css',
        importPath: ['bower_components'],
        environment: 'production'
      }
    }
  },
  connect: {
    server: {
      options: {
        port: 9000,
        base: ['src', '.tmp'],
        keepalive: true,
        livereload: 35729,
      },
    },
    livereload: {
                options: {
                    open: true,
                    port: 9000,
                    base: [
                    '.tmp',
                    'src'
                    ]
                }
            },
  },
  livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                 'src/*.html',
                '.tmp/css/{,*/}*.css',
              ]
            }
  }
  );

grunt.registerTask('serve', ['compass:server', 'connect:livereload', 'watch']);
grunt.registerTask('default', ['compass:server']);

};