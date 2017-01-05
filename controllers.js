angular.module("ctrls",["sevices"])
.controller("index",["$scope","indexDate",function($scope,$indexDate){
    $indexDate.then(function(data){
        $scope.data=data.data;
    })
}])
.controller("list",["$scope",function($scope){
    
}]);