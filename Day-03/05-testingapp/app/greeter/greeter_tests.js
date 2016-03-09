describe('Greeter module', function(){
	beforeEach(module('myApp.greeter'));

	describe('greeterController', function(){
		it("Should initialize name with empty string", inject(function($controller){
			var dummyScope = {};

			$controller('greeterController', {$scope : dummyScope});

			expect(dummyScope.name).toBe('');			

		}));
		it("Should initialize message with empty string", inject(function($controller){
			var dummyScope = {};

			$controller('greeterController', {$scope : dummyScope});

			expect(dummyScope.message).toBe('');			

		}));

		it("Should populate the message when greeted", inject(function($controller){
			var dummyScope = {};

			$controller('greeterController', {$scope : dummyScope});

			dummyScope.name = 'Suresh';
			dummyScope.greet();
			expect(dummyScope.message).toBe('Hi Magesh, Have a nice day!');			

		}));
	})

})