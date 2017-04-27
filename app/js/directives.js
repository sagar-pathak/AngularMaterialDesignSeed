angular.module('materialseed.directives',[])

/* headerDiv directive */
.directive('headerDiv', function() {
  return {
      restrict: 'E',
      templateUrl: 'app/templates/partials/header.html'
  };
})

/* sidebarNav directive */
.directive('sidebarNav', function() {
  return {
      restrict: 'AE',
      controller:'SidebarCtrl',
      //replace: 'true',
      templateUrl: 'app/templates/partials/sidebar.html'
  };
});