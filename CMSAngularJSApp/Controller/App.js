

//var baseUrl = "http://contactmanagementsystem.somee.com/";
var baseUrl ="http://localhost:3000/"
var basicAuth = "Basic YWtzaGF5OnBhc3M=";

var app = angular.module('cmsApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        });
});

app.run(['$http', function ($http) {
    $http.defaults.headers.common['Authorization'] = basicAuth;
}]);
