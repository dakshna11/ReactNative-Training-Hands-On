var application = angular.module('threeApp',[])

application.service('fromService', function(){
    this.message = "This is from Service!"
})

application.factory('fromFactory', function(){
    var factory = {}
    factory.message = "This is from factory!"
    return factory
})

application.provider('fromProvider', function(){
    this.m1 = "This is from provider!"
    this.setAName = function(name){
        this.m1 += " " +name
    }
    this.$get = function(){
        return{
            message: this.m1
        }
    }
})

application.config(function(fromProviderProvider){
    fromProviderProvider.setAName("Hi!!")
})
application.controller('app',  function(fromService, fromFactory, fromProvider, $scope){
    $scope.greetMessage = [fromService.message, fromProvider.message, fromFactory.message]
})