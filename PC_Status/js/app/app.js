var statusApp = angular.module('statusApp', ['ngRoute','LocalStorageModule','ngSanitize','ngCookies']);
statusApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

statusApp.constant('apiUrl','http://192.168.0.13:9090/statusApp')

// routes
statusApp.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/status', {
        templateUrl : 'pages/project/status.html',
        controller  : 'statusListController'
    })
    .otherwise({
       redirectTo: '/status'
   });
});
statusApp.run(['$timeout', '$rootScope', '$window', function($timeout, $rootScope, $window,dataService,authService) { 
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        var urlPaths = [];
});
}])
