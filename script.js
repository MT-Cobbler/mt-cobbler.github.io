$(() => {
    // scrollRotationAnimation();
    $(window).on("load scroll", function() {
        var parallaxElement = $(".parallax_scroll"),
            parallaxQuantity = parallaxElement.length;

        window.requestAnimationFrame(function() {
            for (var i = 0; i < parallaxQuantity; i++) {
                var currentElement = parallaxElement.eq(i),
                    windowTop = $(window).scrollTop(),
                    elementTop = currentElement.offset().top,
                    elementHeight = currentElement.height(),
                    viewPortHeight = window.innerHeight * 2 - elementHeight * 2,
                    scrolled = windowTop - elementTop + viewPortHeight;
                currentElement.css({
                    transform: "translate3d(0," + scrolled * -0.5 + "px, 0)",

                });
            }
        });
    });
});

/*scrollRotationAnimation =  () =>{
	var lastScrollTop = 0;
	let scroll = 35;
	$(window).on("scroll", ()=>{
		var st = $(this).scrollTop();
		if(st>lastScrollTop){scroll-=10;}
		else{scroll+=10;}
		$("div#rotateX").css("transform","rotateZ("+scroll+"deg)");
		lastScrollTop = st;
	});
}*/