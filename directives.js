angular.module("directives",[])
    .directive("menu",function(){
        return {
            restrict:"A",
            templateUrl:"demo.html",
            transclude:true,
            scope:{

            },
            link:function($scope,b,c){
                $scope.data=[
                    {
                        name:"1111",
                        son:[
                            {name:"1-1"},
                            {name:"1-2"},
                            {name:"1-3"},
                            {name:"1-4"}
                        ]
                    },
                    {
                        name:"2222",
                        son:[
                            {name:"2-1"},
                            {name:"2-2"},
                            {name:"2-3"},
                            {name:"2-4"}
                        ]
                    },
                    {
                        name:"3333",
                        son:[
                            {name:"3-1"},
                            {name:"3-2"},
                            {name:"3-3"},
                            {name:"3-4"}
                        ]
                    },
                    {
                        name:"4444",
                        son:[
                            {name:"4-1"},
                            {name:"4-2"},
                            {name:"4-3"},
                            {name:"4-4"}
                        ]
                    }
                ];
                $scope.res=0;
                $scope.show=function(id){
                    $scope.res=id;
                }
            }
        }
    });