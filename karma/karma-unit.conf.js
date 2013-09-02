module.exports = function(config) {
  config.set({
    files : [
      'bower_components/jquery/jquery.js',
      'app/assets/lib/angular-1.2/angular.js',
      'app/assets/lib/angular-1.2/angular-animate.js',
      'app/assets/lib/angular-1.2/angular-route.js',
      'app/assets/lib/angular-1.2/angular-resource.js',
      'app/assets/lib/angular-1.2/angular-mocks.js',
      'bower_components/greensock-js/src/uncompressed/TweenMax.js',
      'app/assets/javascripts/core.js',
      'app/assets/javascripts/controllers.js',
      'app/assets/javascripts/routes.js',
      'app/assets/javascripts/models.js',
      'app/assets/javascripts/animations.js',
      'app/assets/javascripts/app.js',

      'karma/unit/**/*.js'
    ],
    basePath: '../',
    plugins:[
      'karma-chrome-launcher',
      'karma-safari-launcher',
      'karma-firefox-launcher',
      'karma-osx-reporter',
      'karma-coverage',
      'karma-jasmine'
    ],
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};
