/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: ['index.html'],
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly:  true,
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
        $: false,
        jQuery: false,
        // Underscore.js
        _: false,
        // Gooogle Maps Globals
        google: false,
        // Qunit Assertions
        assert: false,
        asyncTest: false,
        deepEqual: false,
        equal: false,
        expect: false,
        module: false,
        notDeepEqual: false,
        notEqual: false,
        notStrictEqual: false,
        ok: false,
        QUnit: false,
        raises: false,
        start: false,
        stop: false,
        strictEqual: false,
        test: false
      }
    },
    server: {
        port: 3000,
        base: '.'
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint server watch');

};
