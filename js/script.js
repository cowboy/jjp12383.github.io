$(window).load(function () {
    $('.right-curtain, .left-curtain').animate({ width: "0"}, 1000, function () {
        $('.curtain').css('display', 'none');
    });
});

$(document).ready(function () {
    var window_h = $(window).height();
    $('.main').height(window_h);
});

$(window).resize(function () {
    var window_h = $(window).height();
    $('.main').height(window_h);
});

$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        if ($(this).attr("value") == "boardGame") {
            $(".lawn-game").addClass("hidden");
            $(".routine").addClass("hidden");
            $(".music").addClass("hidden");
            $(".board-game").removeClass("hidden");
            $(".send-cont").removeClass("hidden");
        }
        if ($(this).attr("value") == "lawnGame") {
            $(".board-game").addClass("hidden");
            $(".routine").addClass("hidden");
            $(".music").addClass("hidden");
            $(".lawn-game").removeClass("hidden");
            $(".send-cont").removeClass("hidden");
        }
        if ($(this).attr("value") == "music") {
            $(".board-game").addClass("hidden");
            $(".routine").addClass("hidden");
            $(".lawn-game").addClass("hidden");
            $(".music").removeClass("hidden");
            $(".send-cont").removeClass("hidden");
        }
        if ($(this).attr("value") == "routine") {
            $(".board-game").addClass("hidden");
            $(".lawn-game").addClass("hidden");
            $(".music").addClass("hidden");
            $(".routine").removeClass("hidden");
            $(".send-cont").removeClass("hidden");
        }
    });
});