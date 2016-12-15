(function(){
  
  
  var app = angular.module('hotelList', ['hotel-directives']);
  
  app.controller('HotelController', ['$http',function($http){

  			var hotel = this;
			
  			hotel.products = [];
			
			
			$http.get('http://api.weekendesk.com/api/weekends.json?orderBy=priceQuality&locale=fr_FR&limit=50&page=0').success(function(data){

				var hotelJSON = data;


				for (var i = 0, c = hotelJSON.exactMatch.length; i < c; i++) {
	
				    hotel.products.push(hotelJSON.exactMatch[i]);
						
				}

			});


	}]);

})();