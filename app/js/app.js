angular.module('materialseed',[
    'ui.router',
    'materialseed.controllers',
    'materialseed.routes',
    'materialseed.services',
    'materialseed.directives',
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngMessages'
])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('deep-orange');
});