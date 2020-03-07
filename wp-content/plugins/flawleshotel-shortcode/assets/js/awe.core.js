/*-----------------------------*/
// Not allow edit this file
/*-----------------------------*/


;(function($, undefined)
{
	// window.awe_template = function(id)
	// {
	// 	if ($("#"+id).length < 1)
	// 	{
	// 		alert("Oh my god! Your id you gave me,  not exist!");
	// 	}
	// 	return _.template( $("#"+id).html() );
	// }

	// window.awe_render_shortcode = function(atts, templateId)
	// {

	// 	if ( typeof templateId == 'undefined' )
	// 	{
	// 		alert("Template id be required! Stupid");
	// 		return;
	// 	}

	// 	var aweApp = {};

	// 	// extend model of backbone
	// 	aweApp.Model = Backbone.Model.extend(
	// 	{
	// 		validate: function(input, options)
	// 		{
	// 			if ( input.atts  )
	// 			{
	// 				return "Opp! Please enter your data";
	// 			}
	// 		}
	// 	});

	// 	// extend backbone's view
	// 	aweApp.View  = Backbone.View.extend(
	// 	{
	// 		template: awe_template(templateId),
	// 		initialize: function()
	// 		{
	// 			this.render();
	// 		},
	// 		render: function()
	// 		{
	// 			var renderShortcode = this.$el.html( this.template( this.model.toJSON() ) );
	// 			return this;	
	// 		}
	// 	});


	// 	var aweModel = new aweApp.Model(atts);
	// 	var aweView	 = new aweApp.View({model: aweModel});

	// 	//  Hey, front-end, catch it, it's html after render. front-end: thanks bro ;)
	// 	return aweView.el;
	// }

	$(document).ready(function()
	{
		if ( $(".awe_tabs").length>0 )
		{
			$(".awe_tabs").tabs();
		}
		if ($(".awe_accordion").length > 0)
        {
            $(".awe_accordion").accordion();
        }
	})

})(jQuery)