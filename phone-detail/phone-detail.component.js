;(function(){
	'use strict'

	function PhoneDetailController($http, $routeParams){
		var self = this
		$http.get('phones/' + $routeParams.phoneId + '.json')
			.then(function(response){
				self.phone = response.data
			})
	}

	PhoneDetailController.$inject = ['$http', '$routeParams']

	var phoneDetail = {
		templateUrl: 'phone-detail/phone-detail.template.html',
		controller: PhoneDetailController
	}

	angular.module('phoneDetail')
		.component('phoneDetail', phoneDetail)

})()
