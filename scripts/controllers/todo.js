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
    $scope.todos= [];
    $scope.addTodo=function(){
      if($scope.addTodo){
        $scope.todos.push(this.todo);
        $scope.todo='';
      }
    };
    $scope.removeTodo=function(index){
      $scope.todos.splice(index,1);
    };
  });
