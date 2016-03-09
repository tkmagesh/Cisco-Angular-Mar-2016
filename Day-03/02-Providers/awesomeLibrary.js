var awesomeLibrary = angular.module("awesomeLibrary", []);
awesomeLibrary.provider("greeter", function(){
			console.log('greeter is being configured');
			var _message = "Have a nice day!";

			return {
				setMessage: function(msg){
					_message = msg;
				},
				$get : function(){
					return {
						name : '',
						greetMsg :'',
						greet : function(){
							this.greetMsg = 'Hi ' + this.name + ', ' + _message;
						}
					}
				}
			}
		});