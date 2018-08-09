$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".main-nav").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".main-nav").removeClass("active");
    }
});

$(".main-nav").on('click', 'li', function(){
	window.location = $(this).find("a").attr("href");
	return false;
});