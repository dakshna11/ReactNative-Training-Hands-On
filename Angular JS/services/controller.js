var application = angular.module('serviceApp',[])

application.service('random', function(){
    var num = Math.floor(Math.random() * 10)
    this.generate = function(){
        return num
    }
})

application.controller('app', function($scope, random){
    $scope.generateRandom = function(){
        $scope.randomNumber = random.generate()
    }
})