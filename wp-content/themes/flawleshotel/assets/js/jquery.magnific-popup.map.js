(function($){

	"use strict";
	$.fn.magnificPopupMap = function(options)
    {
		var default_options = {
			callbacks: null
            };
        options = $.extend({},default_options,options);
		$(this).magnificPopup({
			  type: 'iframe',
			  callbacks: options.callbacks,
			  iframe: {
			    patterns: {
			      googlemap: {
			       
			        index: '/maps/',
			        
			        id: 'embed?pb=',
			        
			        src: 'https://www.google.com/maps/embed?pb=%id%'
			        
			      }
			    }
			  }
		});
	};
})(jQuery)