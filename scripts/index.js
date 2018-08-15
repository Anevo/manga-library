// header function -> header change on scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".main-nav").addClass("active");
    } else {
       $(".main-nav").removeClass("active");
    }
});

// whole button area clickable
$(".main-nav").on('click', 'li', function() {
	window.location = $(this).find("a").attr("href");
	return false;
});

// change logo on scroll
$(window).on("scroll" ,function() {
    if ($(window).scrollTop() < 50) {
        $(".white-logo").addClass("opacity");
    } else {
        $(".white-logo").removeClass("opacity");
    }
    
    if ($(window).scrollTop() > 50) {
        $(".black-logo").addClass("opacity");
    } else {
        $(".black-logo").removeClass("opacity");
    }
})

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50 ) {
        $(".main-nav li a").addClass("white-text-color");
    } else {
        $(".main-nav li a").removeClass("white-text-color");
    }

    if ($(window).scrollTop() < 50 ) {
        $(".main-nav li a").addClass("black-text-color");
    } else {
        $(".main-nav li a").removeClass("black-text-color");
    }
})
