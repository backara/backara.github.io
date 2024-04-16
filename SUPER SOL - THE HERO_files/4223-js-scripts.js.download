(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		$('.menu-item ul li a').click(function(){
			$('.menu-item ul li a').removeClass("active");
			$(this).addClass("active");
		});

		$('.mobile-menu-item ul li a').click(function(){
			$('.mobile-menu-item ul li a').removeClass("m-active");
			$(this).addClass("m-active");
		});

		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);

AOS.init({
	duration: 1900,
})

$(document).ready(function () {
	$(".Token_Address p").click(function (event) {
		event.preventDefault();
		CopyToClipboard("4rrDdwa7zr6vGCVuRgMmT6gbkCrw2PFEyQzMw4ZCHavv", true, "Copied");
	});
});

function CopyToClipboard(value, showNotification, notificationText) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(value).select();
	document.execCommand("copy");
	$temp.remove();

	if (typeof showNotification === 'undefined') {
		showNotification = true;
	}
	if (typeof notificationText === 'undefined') {
		notificationText = "Copied to clipboard";
	}

	var notificationTag = $("div.copy-notification");
	if (showNotification && notificationTag.length == 0) {
		notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
		$("body").append(notificationTag);

		notificationTag.fadeIn("slow", function () {
			setTimeout(function () {
				notificationTag.fadeOut("slow", function () {
					notificationTag.remove();
				});
			}, 1000);
		});
	}
}






