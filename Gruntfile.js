var path = require("path");
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['app'],
          livereload: true
        }
      }
    },

    watch: {
      sass: {
        files: [
          '**/*.sass',
          '**/*.scss'
        ],
        tasks: ['compass'],
      },
      css: {
        files: ['assets/css/main.css']
      }
      livereload: {
        files: ['assets/css/*.css'],
        options: {
          livereload: true
        }
      }
    },

    compass: {
      app: {
        options: {
          sassDir: 'app/assets/scss',
          cssDir: 'app/assets/css',
          outputStyle: 'compressed'
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }

  });

  // Load the Grunt plugins.
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Register the default tasks.
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('server', [
    'express',
    'compass',
    'open',
    'watch'
  ]);

};