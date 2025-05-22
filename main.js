$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt1 = $("h1");
    var txt2 = $("h2");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt1.hide().html("Semoga aja bisa terkabul ya nabb...").delay(750).fadeIn(300);
        txt2.hide().html("Semoga aja bisa terkabul ya nabb...").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

