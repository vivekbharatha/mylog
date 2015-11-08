/**
 * Created by v3xvard on 8/11/15.
 */

var app = angular.module("myLog", ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngAria']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "app/views/list.html",
        controller: "logsListController"
    }).otherwise({
        redirectTo: '/'
    });
}]);
