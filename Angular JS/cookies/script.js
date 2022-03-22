var app = angular.module('cookiesApp',['ngCookies'])

app.controller('app', function($scope, $cookies){
    $scope.myCookieVal = $cookies.get('cookie')
    $scope.setCookie = function(val){
        $cookies.put('cookie', val)
    }
})