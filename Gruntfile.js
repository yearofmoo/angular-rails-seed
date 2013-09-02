module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    shell: {
      install: {
        command: 'node ./node_modules/.bin/bower install'
      }
    },

    karma: {
      unit: {
        configFile: './karma/karma-unit.conf.js',
        browsers: ['Chrome','Firefox','Safari']
      },
      unit_auto: {
        configFile: './karma/karma-unit.conf.js',
        reporters: ['progress','osx'],
        singleRun: false,
        autoWatch: true
      },
      unit_coverage: {
        configFile: './karma/karma-unit.conf.js',
        reporters: ['coverage'],
        autoWatch: false,
        singleRun: true,
        preprocessors: {
          'app/assets/javascripts/**/*.js': 'coverage'
        },
        coverageReporter : {
          type : 'html',
          dir : 'coverage/'
        }
      },
      e2e: {
        configFile: './karma/karma-e2e.conf.js',
      },
      e2e_auto: {
        configFile: './karma/karma-e2e.conf.js',
        singleRun: false,
        autoWatch: true
      }
    },
  });

  //installation-related
  grunt.registerTask('install', ['shell:install']);

  //defaults
  grunt.registerTask('default', ['test']);

  //development
  grunt.registerTask('test', ['install', 'karma:unit']);
  grunt.registerTask('test:coverage', ['install', 'karma:unit_coverage']);
  grunt.registerTask('autotest', ['install', 'karma:unit_auto']);
};
