// JavaScript Document
$(document).ready(function(){
	var h3_height = document.documentElement.clientHeight;
	
	$(window).scroll(function(){
		var this_scrollTop = $(this).scrollTop();
		$("#debug").html(this_scrollTop);
		if (this_scrollTop < h3_height) {
			if ($("#bkOut").css('opacity') != 0) {
				$("#bkOut").css('opacity', 0);
				$("#bk1").animate({opacity: 0});
				$("#bk2").animate({opacity: 0});
			}
		}
		else if (this_scrollTop >= h3_height / 3 && this_scrollTop <= h3_height * 2) {
			if ($("#bkOut").css('opacity') != 0.1) {
				$("#bkOut").css('opacity', 0.1);
				$("#bk1").animate({opacity: 1});
				$("#bk2").animate({opacity: 0});
			}
		}
		else if (this_scrollTop >= h3_height) {
			if ($("#bkOut").css('opacity') != 0.2) {
				$("#bkOut").css('opacity', 0.2);
				$("#bk1").animate({opacity: 0});
				$("#bk2").animate({opacity: 1});
			}
		}
	});
});

function scrollTop(to) {
	$body = window.opera ? "CSS1Compat" == document.compatMode ? $("html") : $("body") : $("html,body"),
    $body.animate({
        scrollTop: to
    },
    800);
}

function scrollToJoin() {
	to = document.documentElement.clientHeight + 1200;
	scrollTop(to);
}

function moreMenu() {
	
}