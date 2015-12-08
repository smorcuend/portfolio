(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(mainService, $log) {
    var vm = this;

    vm.classAnimation = '';
    vm.animateElementIn = animateElementIn;
    vm.animateElementOut = animateElementOut;

    mainService('projects')
      .then(function(response) {
        $log.debug(response);
        vm.projects = response.data;
      })
      .catch(function(error) {
        $log.debug(error);
      });

    mainService('courses')
      .then(function(response) {
        $log.debug(response);
        vm.courses = response.data;
      })
      .catch(function(error) {
        $log.debug(error);
      });

    function animateElementIn($el) {
      $el.removeClass('hidden');
      $el.addClass('bounce-in');
    }

    // optional: not mandatory (uses angular-scroll-animate)
    function animateElementOut($el) {
      $el.addClass('hidden');
      $el.removeClass('bounce-in');
    }


  }


})();
