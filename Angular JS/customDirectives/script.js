var app = angular.module('customDirectiveApp',[])

app.directive('myFirstScript', function(){
    function linkFunction(scope, elem, attrs){
        scope.name = "Hello World!"
        scope.changeName = function(newName){
            //scope.name = newName
            scope.name = scope.controllerProperty
        }
    }
    return{
        template:'<span ng-click="changeName()">Current text: {{name}}</span>',
        restrict: 'EA', //E for Element, A for Attribute
        link: linkFunction,
        scope: {}
    }
})

app.controller('app', function($scope){
    $scope.controllerProperty = "This is from controller property"
})