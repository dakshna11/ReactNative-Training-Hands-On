var todoApp = angular.module('todoApp',[])

todoApp.controller('app', function($scope){
    $scope.tasks = []

    var taskData = localStorage['tasksList']
    if(taskData !== undefined){
        $scope.tasks = JSON.parse(taskData)
    }

    $scope.searchEnter = function(){
        //console.log(event.which || event.keyCode)
        if( event.which == 13 && $scope.task != ""){
            $scope.addTask()
        }
    }
    $scope.addTask = function(){
        $scope.tasks.push({"taskMessage":$scope.task, "status":false})
        $scope.task = ''
        localStorage['tasksList'] = JSON.stringify($scope.tasks)
    }
    $scope.contentEdit = function(msg){
        for(i=0;i<$scope.tasks.length;i++){
            if($scope.tasks[i].taskMessage == msg){
                $scope.tasks[i].taskMessage = event.target.innerText
            }
        }
        localStorage['tasksList'] = JSON.stringify($scope.tasks)
        event.target.contentEditable = event.target.contentEditable == "false" ? "true": "false"
    }
    $scope.enterAgain = function(msg){
        if(event.which == 13 && msg != ""){
            $scope.contentEdit()
        }
    }
})