var myApp=angular.module("myApp",["ui.router"]);
myApp.config(function($stateProvider,$urlRouterProvider){
$urlRouterProvider.when("","/pageTab");
$stateProvider.state("pageTab",{url:"/pageTab" ,templateUrl:"pageTab.html"})
.state("pageTab.Page1",{url:"/Page1",templateUrl:"Page1.html"})
.state("pageTab.page2",{url:"/page2",templateUrl:"page2.html"})
.state("pageTab.page3",{url:"/page3",templateUrl:"page3.html"});
});