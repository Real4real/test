$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// Расширеный поиск
$(".dopPoisk").click(function () {
	$(".group1, .group2").slideToggle("fast");
	$(".buttonItem").slideToggle("fast");
	$(".poisk").css("transform","rotate(180deg)");
});

// Количество дней
$("#days").click(function () {
	$(".daysCont").slideToggle("fast");
});


// directions
$(function(){
$("#dir").mouseenter(function () {
	$(".dirCont").slideToggle("fast");
});
$(".dirCont").mouseleave(function () {
	$(this).css("display", "none");
});
});

//adaptive menu
$(".icon").click(function () {
	if ($(".icon").hasClass("i")) {
		$(".icon").removeClass("i");
		$(".headerContainer").css("height", "75px");
		$(".nav").slideUp("fast");
	} else {
		$(".icon").addClass("i");
		$(".headerContainer").css("height", "285px");
		$(".nav").slideDown("fast");
		$(".nav").css("display", "block");
	}
});
