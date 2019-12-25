function startGame() {
    $(".start-container").hide();
    $(".problems-container").show();
}

$(document).ready(function(){
    $(".problems-container").hide();
    $(".start-btn").click(function() {
        startGame();
    });
})