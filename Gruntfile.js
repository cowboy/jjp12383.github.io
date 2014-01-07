module.exports = function(grunt) {

  // Initialize config.
  grunt.initConfig({
    pkg: require('./package.json'),
    clean: {
      build: ['gh-pages'],
    },
    'gh-pages': {
      site: {
        options: {
          base: '.',
          clone: 'gh-pages',
        },
        src: ['**/*', '!Gruntfile.js', '!package.json'],
      },
    },
  });

  // Tasks.
  grunt.registerTask('deploy', 'Deploy site via gh-pages.', ['clean:build', 'gh-pages:site', 'clean:build']);
  grunt.registerTask('default', ['deploy']);

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-gh-pages');

};
