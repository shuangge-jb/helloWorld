var myApp=angular.module("myApp",["ui.router"]);
myApp.config(function($stateProvider,$urlRouterProvider){
//用于设置默认的视图
$urlRouterProvider.when("","/pageTab");
//配置跳转的视图，包括一级视图和二级视图
$stateProvider.state("pageTab",{url:"/pageTab" ,templateUrl:"page/pageTab.html"})
.state("pageTab.page1",{url:"/page1",templateUrl:"page/page1.html"})
.state("pageTab.page2",{url:"/page2",templateUrl:"page/page2.html"})
.state("pageTab.page3",{url:"/page3",templateUrl:"page/page3.html"});
});