$(function() {
	$(function() {
		var sandwichSymbol = '<div class="btn-sandwich-row"></div><div class="btn-sandwich-row"></div><div class="btn-sandwich-row"></div>';
		$(".btn-sandwich").prepend(sandwichSymbol);
	});

	var navVisible = false;
	$(".btn-sandwich").click(function(){
		var $this = $(this);
		var $nav = $this.parent('.navbar-header').next('.nav');
		if (navVisible) {
			$nav.css("display", "none");
		  navVisible = false;
		  return
		}
		$nav.css("display", "block");
		navVisible = true;
	});
	$(window).on('resize', function() {
		var $nav = $(".navbar-sandwich").find('.nav');
    if($(this).width() >= 635) {
      $nav.css("display", "block");
     	navVisible = true;
    } else {
    	$nav.css("display", "none");
     	navVisible = false;
    }
	});
});