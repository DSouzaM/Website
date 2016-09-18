$(function() {
	$(".item").click(function(event) {

		var clicked = $(this).attr("id");
        var $modal = $("#" + clicked + "-modal.modal");
        if ($modal.length !== 0) {
		  $("#" + clicked + "-modal.modal").modal("toggle");
        }
	});
});