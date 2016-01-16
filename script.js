$(function() {
	$(".project-icon").click(function(event) {

		var clicked = $(this).attr("id");

		$("#" + clicked + "-modal.modal").modal('toggle');
	});
});