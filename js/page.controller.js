 (function(module) {
   'use strict';
   
	module.controller('AccordionDemoCtrl', function ($scope) {
		$scope.oneAtATime = true;

		$scope.groups = [
			{
			  title: 'UI Experience',
			  content: '6+ yrs of successful experience in web domain with Native JavaScript, Object Oriented JavaScript, AngularJS, Node.js, JQuery, Bootstrap, Ajax, JSON, HTML4.0/5, CSS2/3 and Responsive Designing skill set'
			},
			{
			  title: 'Technical proficiency',
			  content: 'Wide range of technical proficiency possess ability to convert functional wireframes into dynamic interactive web applications'
			},
			{
			  title: 'Responsive Designing',
			  content: 'Ability to create clean layouts and device responsive designs'
			},
			{
			  title: 'Agile',
			  content: 'Follows Agile methodology for Web page development'
			},
			{
			  title: 'Debugging & Compatibility',
			  content: 'Ability to debug errors, ensuring cross browser compatibility, performance and adherence to W3C compliance'
			},
			{
			  title: 'Mentoring & Training',
			  content: 'Mentoring and conducting UI training for new joiners'
			},
			{
			  title: 'International client exposure',
			  content: 'Excellent interpersonal, written, and verbal communication skill with very good exposure to "US" and "UK" clients'
			},
			{
			  title: 'People Management',
			  content: 'Ability to lead, motivate people and encourage teamwork'
			},
			{
			  title: 'Microsoft Office',
			  content: 'Proficient in Microsoft Excel, Word and PowerPoint'
			}
			
			
		];
    });
   
   
   /* module.controller('MapCtrl', function ($scope) {

    var mapOptions = {
        zoom: 7,
        center: new google.maps.LatLng(18.9750, 72.8258),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
}); */
 }(angular.module('page.controller', [])));