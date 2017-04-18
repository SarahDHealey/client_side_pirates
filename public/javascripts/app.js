var app = angular.module('profiles', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
        templateUrl: 'views/profiles.html',
        controller: 'ProfilesController'
    })
});
