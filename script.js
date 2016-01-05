$(function() {
	$(".project-icon").click(function(event) {

		var clicked = $(this).attr("id");
		var color = $(this).css("background-color");
		console.log(color);
		$(".current-project").removeClass("current-project");
		$("#" + clicked + ".project-info").addClass("current-project");
		$("#project-info-list").animate({"height":$("#"+clicked+".project-info").height()},200);
		$("#projects").animate({backgroundColor:color},150);

	});
});