var app = angular.module('loginApp', ['ngRoute'])

// app.config(function($routeProvider){
//     $routeProvider
//     .when('/',{
//         template: 'Welcome user!'
//     })
//     .when('/anotherPage', {
//         template: 'Welcome user again!'
//     })
//     .otherwise({
//         redirectTo: '/'
//     })
// })

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'page.html'
    })
    .when('/helloUser',{
        templateUrl:'hello.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})