$(function() {
    $('video').on('mouseenter', function() {
        this.play();
    })
    $('video').on('mouseleave', function() {
        this.pause();
    })
})