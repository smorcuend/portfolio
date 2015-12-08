(function() {
  'use strict';

  angular
    .module('portfolio')
    .service('mainService', MainService);

  /** @ngInject */
  function MainService($http) {
    return function(resource) {

      return $http({
        method: 'GET',
        url: 'app/assets/' + resource + '.json'
      });

    };
  }

})();
