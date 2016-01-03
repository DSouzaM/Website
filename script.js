$(function() {
	$(".project-icon").click(function(event) {

		var clicked = $(this).attr("id");
		$(".current-project").removeClass("current-project");
		$("#" + clicked + ".project-info").addClass("current-project");
		$("#project-info-list").animate({"height":$("#"+clicked+".project-info").height()},200);
	});
});