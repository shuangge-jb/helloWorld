'use strict';
var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //用于设置默认的视图
    $urlRouterProvider.when("", "/");
    //配置跳转的视图，包括一级视图和二级视图
    //一级视图对应的是菜单
    //二级视图对应的是子页面
    $stateProvider.state("database", { url: "/database", templateUrl: "page/pageTab.html" })
        .state("http", { url: "/http", templateUrl: "http.html" })
        .state("database.instance_database", { url: "/instance_database", templateUrl: "page/instance_database.html" })
        .state("database.instance_redis", { url: "/instance_redis", templateUrl: "page/instance_redis.html" })
        .state("database.packupPolicy", { url: "/packupPolicy", templateUrl: "page/packupPolicy.html" })
        .state("database.packupHistory", { url: "/packupHistory", templateUrl: "page/packupHistory.html" });
    $locationProvider.html5Mode(true);
});