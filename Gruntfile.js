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
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass']);
};
