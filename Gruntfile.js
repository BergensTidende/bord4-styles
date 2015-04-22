'use strict';
module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.initConfig({
 watch: {
        compass: {
            files: ['styles/{,*/}*.{scss,sass}'],
            tasks: ['sass:server'],
            options: {
                livereload: true
            }
        }
  },
  compass: {                              // Task
    server: {                    // Another target
      options: {
        sassDir: 'src/styles',
        cssDir: 'dist/css',
        importPath: ['bower_components']
      }
    }
  },
  connect: {
    server: {
      options: {
        port: 9000,
        base: 'dist'
      }
    }
  }
});

grunt.registerTask('serve', ['compass:server', 'connect:server:keepalive']);
grunt.registerTask('default', ['compass:server']);

};