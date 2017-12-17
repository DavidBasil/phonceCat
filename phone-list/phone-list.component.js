;(function(){

	var phoneList = {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: function PhoneListController(){
			this.phones = [
				{
					name: 'Nexus S',
					snippet: 'Fast just got faster with Nexus S'
				},
				{
					name: 'Motorola XOOM with Wi-Fi',
					snippet: 'The Next, Next Generation tablet.'
				},
				{
					name: 'Motorola XOOM',
					snippet: 'The Next, Next Generation tablet.'
				}
			]
			this.orderProp = 'age'
		}
	}

	angular.module('phoneList')
		.component('phoneList', phoneList)


})()
