var myApp=angular.module("myApp",["ui.router"]);
myApp.config(function($stateProvider,$urlRouterProvider){
//用于设置默认的视图
$urlRouterProvider.when("","/database");
//配置跳转的视图，包括一级视图和二级视图
//一级视图对应的是菜单
$stateProvider.state("database",{url:"/database" ,templateUrl:"page/pageTab.html"})
.state("database.instance_database",{url:"/instance_database",templateUrl:"page/instance_database.html"})
.state("database.instance_redis",{url:"/instance_redis",templateUrl:"page/instance_redis.html"})
.state("database.packupPolicy",{url:"/packupPolicy",templateUrl:"page/packupPolicy.html"})
.state("database.packupHistory",{url:"/packupHistory",templateUrl:"page/packupHistory.html"});
});