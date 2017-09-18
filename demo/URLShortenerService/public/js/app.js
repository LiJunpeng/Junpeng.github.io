var app = angular.module('tinyurlApp', ['ngRoute', 'ngResource', 'chart.js']); //ngRoute说明需要用route模块

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../views/home.html",
        controller: "homeController"
    })
    .when("/urls/:shortUrl", {
        templateUrl: "../views/url.html",
        controller: "urlController"
    });
});



