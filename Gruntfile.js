module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
    'gh-pages': {
      site: {
        options: {
          base: '.',
          clone: 'build',
        },
        src: ['**/*'],
      },
    }
  });

  // Tasks.
  grunt.registerTask('deploy', 'Deploy site via gh-pages.', ['gh-pages']);
  grunt.registerTask('default', ['deploy']);

  // Load plugins.
  grunt.loadNpmTasks('grunt-gh-pages');

};
