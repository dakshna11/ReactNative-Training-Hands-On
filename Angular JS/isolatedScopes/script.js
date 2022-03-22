var app = angular.module('isolatedScopeApp',[])

app.directive('myFirstScript', function(){
    return{
        restrict: 'EA',
        scope:{
            name:'@',
            age: '=',
            func: '&'
        },
        template: ['<p>Value of name in directive: {{name}}</p>',
                    '<p>Enter new "name": <input type="text" ng-model="name"></p>',
                   '<p>Value of age in directive: {{age}}</p>',
                    '<p>Enter new "age": <input type="text" ng-model="age"></p>',
                    '<p><input type="button" value="Alert from Directive" ng-click="func()"></p>'].join('')
    }
})

app.controller('app', function($scope){
    $scope.name = 'Hello'
    $scope.age = 30
    $scope.alertTheName = function(){
        alert($scope.name)
    }
})

// @ - Text bind
// = - Two way bind
// & - one way bind