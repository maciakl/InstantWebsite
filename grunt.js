/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['index.html'],
      tasks: 'htmllint'
    },
    htmllint: {
        files: 'index.html'
    },
    server: {
        port: 3000,
        base: '.'
    }
  });

  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('default', 'server watch');

};
