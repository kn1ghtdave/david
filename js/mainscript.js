$(document).ready(funtion(){

$("a").hover(function() {
    $(this).animate({color: "black"}, "slow");
}, function() {
    $(this).animate({color: "white"}, "slow");
});

});