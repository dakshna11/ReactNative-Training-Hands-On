var app = angular.module('animateApp',['ngAnimate'])


app.controller('app', function($scope){
    $scope.foods = ['Pizza', 'Burger', 'Sandwich', 'French fries']
})