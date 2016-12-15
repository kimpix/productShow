(function(){
	var app= angular.module('hotel-directives', []);


  app.directive("hotelLabel", function(){
  	return {
  			restrict:'A',
  			templateUrl:"view/hotel-label.html"

  	};

  });


 app.directive("weekendGallery", function(){
  return {
  			restrict:'A',
  			templateUrl:"view/weekend-gallery.html",
        controller:function(){
               this.imgShown = 0;
             

    this.isSetImg = function(checkImg) {
      return this.imgShown === checkImg;
 };
       this.setImg = function(setImg) {
      this.imgShown = setImg;
     
    };
             },
        controllerAs:'imgShown'
                };
  
  });


})();