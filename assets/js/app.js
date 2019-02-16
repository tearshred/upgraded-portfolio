jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

$("#portfolioBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
});

$("#resumeBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#resume").offset().top
    }, 2000);
});