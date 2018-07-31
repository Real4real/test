$(".icon").click(function () {
	if ($(".icon").hasClass("iconactive")) {
		$(".icon").removeClass("iconactive");
		$(".menu").slideUp();
	} else {
		$(".icon").addClass("iconactive");
		$(".menu").slideDown();
		$(".menu").css("display","flex");
	}
});

