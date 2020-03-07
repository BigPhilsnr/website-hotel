(function($, document, window, undefined)
{

	$(document).ready(function($){

		$( document ).on( 'click', '.awe_add_to_cart_button', function(e) {

		// AJAX add to cart request
			e.preventDefault();
			var $thisbutton = $( this );
			var parent = $thisbutton.parent();
			if ( $thisbutton.is( '.product_type_simple' ) ) {

				if ( ! $thisbutton.attr( 'data-product_id' ) )
					return true;

				$thisbutton.removeClass( 'added' );
				$thisbutton.addClass( 'loading' );
				var loading = parent.find('span.js_awe_loading');
				loading.fadeIn();
				var data = {
					action: 'woocommerce_add_to_cart',
					product_id: $thisbutton.attr( 'data-product_id' ),
					quantity: $thisbutton.attr( 'data-quantity' ),
					arrival: $thisbutton.attr( 'data-arrival' ),
					departure: $thisbutton.attr( 'data-departure' ),
					room_number: $thisbutton.attr( 'data-room-number' ),
					adults: $thisbutton.attr( 'data-adults' ),
					childrent: $thisbutton.attr( 'data-childrent' ),
				};

				// Trigger event

				$( 'body' ).trigger( 'adding_to_cart', [ $thisbutton, data ] );

				// Ajax action
				$.post( ajax_object.ajax_url, data, function( response ) {
					console.log(response);

					if(!response){
						return;
					}
					if ( response.error && response.product_url ) {
						//window.location = response.product_url;
						loading.html('Error can\'t add to cart');
						return;
					}
					loading.html('add to cart successfully');
					$thisbutton.remove();
					parent.find('a.js_view_cart').fadeIn(900);
					loading.fadeOut();
				});

				return false;

			}

			return true;
		});

	});

})(jQuery, document, window);
