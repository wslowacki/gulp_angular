module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-coffee-preprocessor', 'karma-coverage'],
    files: [
      'vendor/jquery/dist/jquery.js',
      'vendor/angular-latest/build/angular.js',
      'vendor/angular-latest/build/angular-mocks.js',
      'src/scripts/**/*.module.js',
      'src/scripts/**/*.js',
      'src/tests/**/*.js'
    ],
    preprocessors: {
      '**/src/scripts/**/*.js': 'coverage'
    },
    /**
     * How to report, by default.
     */
    reporters: ['progress', 'coverage'],
    colors: true,
    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9101,

    /**
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'PhantomJS'
    ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000
  });
};