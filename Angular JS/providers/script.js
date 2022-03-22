var application = angular.module('providerApp',[])

application.provider('date', function(){
    var greet;
    return{
        setGreeting: function(value){
            greet = value
        },
        $get: function(){
            return{
                showDate: function(){
                    var date = new Date()
                    return greet + " Its " + date.getHours()
                },
                devshowDate: function(){
                    var date = new Date()
                    return date.getHours()
                }
            }
        }
    }
})


application.config(function(dateProvider){
    var time = dateProvider.$get().devshowDate()
    if(time > 0 && time < 12){
        dateProvider.setGreeting("Good morning!")
    } else if(time > 12 && time < 17){
        dateProvider.setGreeting("Good day!")
    } else if(time > 17 && time < 21){
        dateProvider.setGreeting("Good evening!")
    } else{
        dateProvider.setGreeting("Good night!")
    }
    
})


application.controller('app', function($scope, date){
    $scope.greetMessage = date.showDate()
})