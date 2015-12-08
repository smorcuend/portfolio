(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $mdThemingProvider
      .theme('default')
      .primaryPalette('light-blue')
      .accentPalette('pink')
      .warnPalette('red')
      .backgroundPalette('grey')
  }

})();
