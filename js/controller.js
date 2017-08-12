var myApp=angular.module("myApp");
//调用HTTP服务
myApp.controller("myCtrl",function($scope,$http){
$http.get("server.js").then(function(response){
	console.log(response.data);
	$scope.data=response.data;
});
});

//声明自定义服务
myApp.service("myService",function(){
	this.say=function(str){
		return "hello "+str+"!";
	}
});
//在两个controller间共享数据
myApp.service("dataShareService",function(){
	var data='';
	this.getData=function(){
		return data;
	}
	this.setData=function(obj){
		data=obj;
	}
});
//调用自定义服务，数组注释法
myApp.controller("myCtrl2",["$scope","myService","dataShareService",function($scope,myService,dataShareService){
	$scope.name='';
	
	
	$scope.sayHello=function(){

		$scope.hello=myService.say($scope.name);
	}
$scope.setData=function(){
	dataShareService.setData($scope.name);
}

}]);
//显式调用function的$inject
function logic($scope,dataShareService){
	$scope.input='';
	
	$scope.update=function(){
		$scope.input=dataShareService.getData();
       
	}
}
logic.$inject=["$scope","dataShareService"];
myApp.controller("myCtrl3",logic);



