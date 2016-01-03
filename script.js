$(function() {
	$(".hover-effect").click(function(event) {

		var clicked = $(this).attr("id");
		$(".current-project").removeClass("current-project");
		$("#" + clicked + ".project-info").addClass("current-project");
	});
});