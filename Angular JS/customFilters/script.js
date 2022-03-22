var app = angular.module('customFilterApp',[])


app.filter('base', function(){
    var sample = function(input, base){
        var parsed = parseInt(input, 10)
        var based = parseInt(base, 10)

        if(isNaN(parsed) || isNaN(based) || based <= 1 || based >= 37) return "Error! Invalid base" 

        return parsed.toString(based)
    }
    return sample
})

app.controller('app', function(){

})