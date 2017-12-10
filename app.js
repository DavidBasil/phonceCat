;(function(){
	'use strict'

	angular
		.module('phonecatApp', [])
		.controller('PhoneListController', PhoneListController)

	PhoneListController.$inject = ['$scope']

	function PhoneListController($scope){
		$scope.phones = [
			{
				name: 'Nexus S',
				snippet: 'Fast just got faster with Nexus S.'
			},
			{
				name: 'Motorola XOOM with wi-fi',
				snippet: 'The Next, Next generation tablet.'
			},
			{
				name: 'Motorola XOOM',
				snippet: 'The Next, Next generation tablet.'
			}
		]
	}
})()
