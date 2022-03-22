var app = angular.module('watchApp', [])

app.controller('app', function($scope){
    $scope.counter=-1
    $scope.$watch('myText', function(newValue, oldValue){
        $scope.counter++
    })
})