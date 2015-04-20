module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      },
      test: {
        files: {
          'css/test.css': 'sass/test.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch:sass']);
};
