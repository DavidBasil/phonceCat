;(function(){
	'use strict'

	function PhoneDetailController($routeParams){
		this.phoneId = $routeParams.phoneId
	}

	PhoneDetailController.$inject = ['$routeParams']

	var phoneDetail = {
		template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
		controller: PhoneDetailController
	}

	angular.module('phoneDetail')
		.component('phoneDetail', phoneDetail)

})()
