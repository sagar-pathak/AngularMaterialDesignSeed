angular.module('materialseed.controllers',[])
.controller('LoginCtrl', function($scope, $state) {
    console.log('LoginCtrl called')
})
.controller('DashboardCtrl', function($scope, $state) {
    console.log('DashboardCtrl called')
})
.controller('UsermanagementCtrl', function($scope, $state) {
    console.log('UsermanagementCtrl called')
})

/* SidebarNav: starts*/
.controller('SidebarCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildToggler('left');
    $scope.isOpenLeft = function(){
        return $mdSidenav('left').isOpen();
};

function buildToggler(navID) {
    return function() {
    // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
            .toggle()
            .then(function () {
            $log.debug("toggle " + navID + " is done");
            });
        };
    }
})

.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
        .then(function () {
            $log.debug("close LEFT is done");
        });
    };
});
/* SidebarNav: ends */