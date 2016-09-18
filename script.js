$(function() {
	$(".item").click(function(event) {
		var clicked = $(this).attr("id");
        var $modal = $("#" + clicked + "-modal.modal");
        var containerId = $(this).parent().parent().attr('id');
        ga("send", "event", "item-click", containerId, clicked);

        if ($modal.length !== 0) {
		  $("#" + clicked + "-modal.modal").modal("toggle");
        }
	});

    $("#about .btn-default").click(function(event) {
        var action = $(this).attr("id");
        ga("send", "event", "about-buttons", action);
    });
    $("a.github").click(function(event) {
        var modalId = $(this).parents(".modal").attr("id");
        ga("send", "event", "modal-buttons", modalId, "github");
    });
    $("a.demo").click(function(event) {
        var modalId = $(this).parents(".modal").attr("id");
        ga("send", "event", "modal-buttons", modalId, "demo");
    });
    $("a.web-store").click(function(event) {
        var modalId = $(this).parents(".modal").attr("id");
        ga("send", "event", "modal-buttons", modalId, "web-store");
    })
});