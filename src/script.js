var current_div = 1;
var current_string = "";
var game_started = false;

var type_texts = [
    "This is a test",
    "Hello friends",
    "qwertyuiop",
    "Here is something really really long so that I can see what it does when it does not fit the screen",
    "Quite indeed"
]

var questions = [
    {
        "question": "4 x 5 = 20.",
        "answer": "true"
    }, 
    {
        "question": "Every commutative ring with one has a maximal ideal.",
        "answer": "true"
    },
    {
        "question": "The square root of 2 is algebraic.",
        "answer": "true"
    },
    {
        "question": "Pi is a rational number.",
        "answer": "false"
    }
]

/*literally looked everywhere on the internet
 *could not find a better way to do this*/

function parseKey(key_press, shift_key){
    //right
    if(key_press == 39 && current_div == 1){
        current_div = 2;
        $(".block1").css("opacity", 0.4);
        $(".block2").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    else if(key_press == 39 && current_div == 3){
        current_div = 4;
        $(".block3").css("opacity", 0.4);
        $(".block4").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    //down
    else if(key_press == 40 && current_div == 1){
        current_div = 3;
        $(".block1").css("opacity", 0.4);
        $(".block3").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    else if(key_press == 40 && current_div == 2){
        current_div = 4;
        $(".block2").css("opacity", 0.4);
        $(".block4").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    //left
    else if(key_press == 37 && current_div == 2){
        current_div = 1;
        $(".block2").css("opacity", 0.4);
        $(".block1").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    else if(key_press == 37 && current_div == 4){
        current_div = 3;
        $(".block4").css("opacity", 0.4);
        $(".block3").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    //up
    else if(key_press == 38 && current_div == 3){
        current_div = 1;
        $(".block3").css("opacity", 0.4);
        $(".block1").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    else if(key_press == 38 && current_div == 4){
        current_div = 2;
        $(".block4").css("opacity", 0.4);
        $(".block2").css("opacity", 1.0);
        $(".input-message").css("color", "#666");
        current_string = "";
    }
    //ascii code
    else if(key_press >= 65 && key_press <= 90 || key_press >= 48 && key_press <= 57){
        current_string += String.fromCharCode(key_press);
        $(".input-message").css("color", "#ddd");
    }
    //comma
    else if(key_press == 188){
        current_string += ",";
        $(".input-message").css("color", "#ddd");
    }
    //dash
    else if(key_press == 189){
        current_string += "-";
        $(".input-message").css("color", "#ddd");
    }
    //period
    else if(key_press == 190){
        current_string += ".";
        $(".input-message").css("color", "#ddd");
    }
    //forward slash
    else if(key_press == 191){
        current_string += "/";
        $(".input-message").css("color", "#ddd");
    }
    //single quote
    else if(key_press == 222 && shift_key == false){
        current_string += "'";
        $(".input-message").css("color", "#ddd");
    }
    //double quote
    else if(key_press == 222 && shift_key == true){
        current_string += "\"";
        $(".input-message").css("color", "#ddd");
    }
    //space
    else if(key_press == 32){
        current_string += " ";
        $(".input-message").css("color", "#ddd");
    }
    //backspace
    else if(key_press == 8){
        current_string = current_string.substring(0,current_string.length-1);
        $(".input-message").css("color", "#ddd");
    }
    //enter (submit)
    else if(key_press == 13){
        if($(".block3-problem").html().toUpperCase() == current_string.toUpperCase() && current_div == 3){
            alert("This is true :)");
        }
        else{
            alert("This is false :(");
        }
        current_string = "";
    }
    $(".text-input").html(current_string);
}

function startGame(){
    game_started = true;
    $(".start-container").hide();
    $(".problems-container").show();
    var index = Math.floor((Math.random() * type_texts.length));
    var cs = type_texts[index];
    $(".block3-problem").html(cs);
}

$(document).ready(function(){
    $(".problems-container").hide();
    $(".start-btn").click(function(){
        startGame();
    });
    $(document).keydown(function(event){
        if(game_started === true) parseKey(event.which, event.shiftKey);
    });
})