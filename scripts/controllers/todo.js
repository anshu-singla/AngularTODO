'use strict';

/**
 * @ngdoc function
 * @name yoworkApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the yoworkApp
 */
angular.module('yoworkApp')

  .controller('TodoCtrl',function($scope, localStorageService){

    $scope.todos = [];
    var todoInStore = localStorageService.get('todos');
    $scope.todos = todoInStore || [];
    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);
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

