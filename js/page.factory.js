 (function(module) {
   module.factory('calcService', function() {
     return {
       add: function(a, b) {
         return parseInt(a) + parseInt(b);
       },
       sub: function(a, b) {
         return parseInt(a) - parseInt(b);
       },

       mul: function(a, b) {
         return a * b;
       },

       div: function(a, b) {
         return a / b;
       }
     }
   });
 }(angular.module('page.factory', [])));