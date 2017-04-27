angular.module('materialseed.routes',[])
.config(function($stateProvider, $urlRouterProvider) {
    
    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');
    // use a state provider for routing

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'app/templates/login.html',
            controller: "LoginCtrl"
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/templates/dashboard.html',
            controller: "DashboardCtrl"
        })
        .state('usermanagement', {
            url: '/usermanagement',
            templateUrl: 'app/templates/usermanagement.html',
            controller: "UsermanagementCtrl"
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/templates/404.html'
        })
})