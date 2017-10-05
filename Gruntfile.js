module.exports = function(grunt) {

    // configure project
    grunt.initConfig({
    watch: {
        scripts: {
        files: [
            'less/**/*',
            'source/**/*'
        ],
        tasks: ['default'],
        options: {
          nospawn: true,
          pretty: true
        }
      }
    },
      less: {
        compile: {
            options: {
              compress: true
            },
            files: {
              'css/main.css': ['less/main.less']
            }
        }

    },
    pug: {
        compile: {
            options: {
              pretty: true
            },
            files: {
              'index.html': ['source/*.pug']
            }
        }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('build', ['pug', 'less']);
  grunt.registerTask('default', ['build', 'watch', 'prettify']);

};