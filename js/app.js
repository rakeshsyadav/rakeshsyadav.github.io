 (function() {
   'use strict';
   angular
     .module('myProfile', ['ngRoute', 'page.controller', 'page.factory', 'page.directive', 'ui.bootstrap'])
     .config(['$routeProvider',
       function($routeProvider) {
         $routeProvider.
         when('/home', {
           templateUrl: 'partials/home.html',
           
         }).
         when('/education', {
           templateUrl: 'partials/education.html',
           
         }).
         when('/portFolio', {
           templateUrl: 'partials/portFolio.html',
           controller: 'AccordionDemoCtrl'
         }).
		   when('/skillSet', {
           templateUrl: 'partials/skillSet.html',
         }).
		   when('/contactUs', {
           templateUrl: 'partials/contactUs.html',
           /* controller: 'MapCtrl' */
         }).
         otherwise({
           templateUrl: 'partials/home.html',
           
         });
       }
     ]);
 }());