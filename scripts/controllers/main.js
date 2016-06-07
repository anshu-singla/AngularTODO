'use strict';

/**
 * @ngdoc function
 * @name yoworkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoworkApp
 */
angular.module('yoworkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
