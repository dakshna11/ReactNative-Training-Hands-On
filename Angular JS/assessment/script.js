var application = angular.module('loginApp', ['ngRoute'])

application.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'components/loginScreen.html'
    })
    .when('/profile',{
        templateUrl: 'components/profileScreen.html',
    }).otherwise({
        redirectTo: '/'
    })
})

application.factory('fetchReq', function($http){
    return{
        userGet: userGet
    }
    function userGet(){
        return $http.get('db/profile.json')
    }
})

application.controller('loginController', function($scope, fetchReq, $location){
    $scope.message = 'logged in'
    $scope.go = function ( path ) {
        $location.path( path );
      };

    fetchReq.userGet().success(function(data){
        $scope.users = data.userInfo
    })
    
})