var app = angular.module('abc',['ngRoute', 'ui.bootstrap'])
app.controller('GreetingController', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
}]);


app.config(function($interpolateProvider, $routeProvider){
        $routeProvider.when('/about', {
                templateUrl: 'views/about.html'
        }).when('/login',{
                templateUrl: '/views/login/login.html'
        }).when('/signup', {
                templateUrl: '/views/signup/signup.html'
        }).otherwise({
                redirectTo: '/about'
        });
});
