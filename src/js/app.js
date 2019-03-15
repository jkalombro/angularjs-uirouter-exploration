

var app = angular.module("myApp", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            'header': {
                templateUrl: './src/views/header.html',
            },
            'mainview': {
                templateUrl: './src/views/home.html',
                controller: 'homeController'
            }
        }
    })
    .state('profile', {
        url: '/profile',
        views: {
            'header': {
                templateUrl: './src/views/header.html',
            },
            'mainview': {
                templateUrl: './src/views/profile.html',
                controller: 'homeController'
            }
        }
    })
    .state('settings', {
        url: '/settings',
        views: {
            'header': {
                templateUrl: './src/views/header.html',
            },
            'mainview': {
                templateUrl: './src/views/settings.html',
                controller: 'homeController'
            }
        }
    })
    
    $urlRouterProvider.otherwise('/home');
}]);

app.run(['$rootScope', 'globalService', function($rootScope, globalService){
    $rootScope.$on('$stateChangeStart', function (event, nextState, currentState) {
        console.log(nextState + " < " + currentState);
    });
}]);

export default app;