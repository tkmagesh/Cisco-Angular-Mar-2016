angular
	.module("myApp.greeter", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when('/greeter', {
				templateUrl : 'greeter/greeterTemplate.html',
				controller : 'greeterController'
			})
	})
	.controller('greeterController', function($scope){
		$scope.name = '';
		$scope.message = '';
		$scope.greet = function(){
			$scope.message = 'Hi ' + $scope.name + ', Have a nice day!';
		};
	});

