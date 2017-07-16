var myApp=angular.module("myApp",[]);

//声明自定义服务
myApp.service("myService",function(){
	this.say=function(str){
		return "hello "+str+"!";
	}
});
//调用自定义服务
myApp.controller("myCtrl2",function($scope,myService){
	$scope.name='';
	
	
	$scope.sayHello=function(){
		$scope.hello=myService.say($scope.name);
	}
});

//调用HTTP服务
myApp.controller("myCtrl",function($scope,$http){
$http.get("server.js").then(function(response){
	console.log(response.data);
	$scope.data=response.data;
});
});