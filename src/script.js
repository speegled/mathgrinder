var current_div = 1;
var game_started = false;

//this function is trash but if it aint broke (lamao.com)

function parseKey(key_press){
    if(key_press == 39 && current_div == 1){
        current_div = 2;
        $(".block1").css("opacity", 0.4);
        $(".block2").css("opacity", 1.0);
    }
    if(key_press == 39 && current_div == 3){
        current_div = 4;
        $(".block3").css("opacity", 0.4);
        $(".block4").css("opacity", 1.0);
    }
    if(key_press == 40 && current_div == 1){
        current_div = 3;
        $(".block1").css("opacity", 0.4);
        $(".block3").css("opacity", 1.0);
    }
    if(key_press == 40 && current_div == 2){
        current_div = 4;
        $(".block2").css("opacity", 0.4);
        $(".block4").css("opacity", 1.0);
    }
    if(key_press == 37 && current_div == 2){
        current_div = 1;
        $(".block2").css("opacity", 0.4);
        $(".block1").css("opacity", 1.0);
    }
    if(key_press == 37 && current_div == 4){
        current_div = 3;
        $(".block4").css("opacity", 0.4);
        $(".block3").css("opacity", 1.0);
    }
    if(key_press == 38 && current_div == 3){
        current_div = 1;
        $(".block3").css("opacity", 0.4);
        $(".block1").css("opacity", 1.0);
    }
    if(key_press == 38 && current_div == 4){
        current_div = 2;
        $(".block4").css("opacity", 0.4);
        $(".block2").css("opacity", 1.0);
    }
}

function startGame() {
    game_started = true;
    $(".start-container").hide();
    $(".problems-container").show();
}

$(document).ready(function(){
    $(".problems-container").hide();
    $(".start-btn").click(function() {
        startGame();
    });
    $(document).keydown(function(event){
        if(game_started === true) parseKey(event.which);
    });
})