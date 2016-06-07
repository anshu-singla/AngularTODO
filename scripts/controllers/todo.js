'use strict';

/**
 * @ngdoc function
 * @name yoworkApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the yoworkApp
 */
angular.module('yoworkApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todos= ['Item 1','Item 2','Item 3','Item 4'];
  });
