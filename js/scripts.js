
window.onload = function() {

	/*Hiding previous portfolio item*/
 
    $('.port-item').on('click', function(){
    	$('.collapse').collapse('hide');
    })

  /*Lightbox popup*/

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
 
};