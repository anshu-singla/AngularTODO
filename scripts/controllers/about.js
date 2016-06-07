'use strict';

/**
 * @ngdoc function
 * @name yoworkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoworkApp
 */
angular.module('yoworkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
