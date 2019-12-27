var current_div = 1;
var seconds_played = 0;
var current_string = "";
var game_started = false;
var current_problem4;
var current_operator1;
var current_operator2;
var f_1;
var l_1;
var f_2;
var l_2;

var possible_operators = ["+", "-", "x", "/"];

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
    //ascii letters
    else if(key_press >= 65 && key_press <= 90){
        if(shift_key) current_string += String.fromCharCode(key_press);
        else{
            current_string += String.fromCharCode(key_press).toLowerCase();
        }
        $(".input-message").css("color", "#ddd");
    }
    //numbers and their respective shifts
    else if(key_press >= 48 && key_press <= 57){
        if(shift_key){
            if(key_press == 48) current_string += ")";
            if(key_press == 49) current_string += "!";
            if(key_press == 50) current_string += "@";
            if(key_press == 51) current_string += "#";
            if(key_press == 52) current_string += "$";
            if(key_press == 53) current_string += "%";
            if(key_press == 54) current_string += "^";
            if(key_press == 55) current_string += "&";
            if(key_press == 56) current_string += "*";
            if(key_press == 57) current_string += "(";
        }
        else{
            current_string += String.fromCharCode(key_press);
        }
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
    //forward slash and question mark
    else if(key_press == 191){
        if(!shift_key) current_string += "/";
        else{
            current_string += "?";
        }
        $(".input-message").css("color", "#ddd");
    }
    //single quote
    else if(key_press == 222 && !shift_key){
        current_string += "'";
        $(".input-message").css("color", "#ddd");
    }
    //double quote
    else if(key_press == 222 && shift_key){
        current_string += "\"";
        $(".input-message").css("color", "#ddd");
    }
    //semicolon and colon
    else if(key_press == 186){
        if(!shift_key) current_string += ";";
        else{
            current_string += ":";   
        }
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
        if(current_div == 1){
            var correct_ans = false;
            if(current_operator1 == "+" && current_string == f_1 + l_1){
                correct_ans = true;
            }
            else if(current_operator1 == "-" && current_string == f_1 - l_1){
                correct_ans = true;
            }
            else if(current_operator1 == "x" && current_string == f_1 * l_1){
                correct_ans = true;
            }
            else if(current_operator1 == "/" && current_string == f_1 / l_1){
                correct_ans = true;
            }

            if(correct_ans){
                var index1 = Math.floor((Math.random() * 4));
                current_operator1 = possible_operators[index1];
                if(current_operator1 == "+" || current_operator1 == "-"){
                    f_1 = Math.floor((Math.random() * (Math.floor(40 + seconds_played*5)))) + 1;
                    l_1 = Math.floor((Math.random() * (Math.floor(40 + seconds_played*5)))) + 1;
                }
                else if(current_operator1 == "x"){
                    f_1 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1;
                    l_1 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1;
                }
                else{
                    l_1 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/15)))) + 1;
                    f_1 = l_1*(Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1);
                }
                var c1 = f_1.toString() + " " + current_operator1 + " " + l_1.toString();
                $(".block1-problem").html(c1);

                var t1 = parseInt($(".timer1").html());
                t1 += 5;
                t1.toString();
                $(".timer1").html(t1);
            }
        }
        else if(current_div == 2){
            var correct_ans = false;
            if(current_operator2 == "+" && current_string == f_2 + l_2){
                correct_ans = true;
            }
            else if(current_operator2 == "-" && current_string == f_2 - l_2){
                correct_ans = true;
            }
            else if(current_operator2 == "x" && current_string == f_2 * l_2){
                correct_ans = true;
            }
            else if(current_operator2 == "/" && current_string == f_2 / l_2){
                correct_ans = true;
            }

            if(correct_ans){
                var index2 = Math.floor((Math.random() * 4));
                current_operator2 = possible_operators[index2];
                if(current_operator2 == "+" || current_operator2 == "-"){
                    f_2 = Math.floor((Math.random() * (Math.floor(200 + seconds_played*9)))) + 1;
                    l_2 = Math.floor((Math.random() * (Math.floor(200 + seconds_played*9)))) + 1;
                }
                else if(current_operator2 == "x"){
                    f_2 = Math.floor((Math.random() * (Math.floor(15 + seconds_played/6)))) + 1;
                    l_2 = Math.floor((Math.random() * (Math.floor(15 + seconds_played/6)))) + 1;
                }
                else{
                    l_2 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1;
                    f_2 = l_2*(Math.floor((Math.random() * (Math.floor(15 + seconds_played/6)))) + 1);
                }
                var c2 = f_2.toString() + " " + current_operator2 + " " + l_2.toString();
                $(".block2-problem").html(c2);

                var t2 = parseInt($(".timer2").html());
                t2 += 7;
                t2.toString();
                $(".timer2").html(t2);
            }
        }
        else if(current_div == 3){
            if($(".block3-problem").html() == current_string){
                var t3 = parseInt($(".timer3").html());
                t3+= (6 + Math.floor(current_string.length/5));
                $(".timer3").html(t3);

                var index = Math.floor((Math.random() * type_texts.length));
                var cs = type_texts[index];
                $(".block3-problem").html(cs);
            }
            else{
                //make something red -- alert user somehow that he messed up
            }
        }
        else if(current_div == 4){
            if(current_string.toUpperCase() == questions[current_problem4].answer.toUpperCase()){
                var index = Math.floor((Math.random() * questions.length));
                var cs = questions[index].question;
                $(".block4-problem").html(cs);
                current_problem4 = index;

                var t4 = parseInt($(".timer4").html());
                t4 += 6;
                $(".timer4").html(t4);
            }
            else{
                //make something red -- alert user somehow that he messed up
                var t4 = parseInt($(".timer4").html());
                if(t4 < 8) t4 = 1;
                else{
                    t4 -= 6;
                }
                $(".timer4").html(t4);
            }
        }
        current_string = "";
    }
    $(".text-input").html(current_string);
}

function startGame(){
    game_started = true;
    $(".start-container").hide();
    $(".problems-container").show();
    $("body").css("background", "linear-gradient(white, black)");
    $("body").css("box-shadow", "none");

    var index1 = Math.floor((Math.random() * 4));
    current_operator1 = possible_operators[index1];
    if(current_operator1 == "+" || current_operator1 == "-"){
        f_1 = Math.floor((Math.random() * (Math.floor(40 + seconds_played*5)))) + 1;
        l_1 = Math.floor((Math.random() * (Math.floor(40 + seconds_played*5)))) + 1;
    }
    else if(current_operator1 == "x"){
        f_1 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1;
        l_1 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1;
    }
    else{
        l_1 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/15)))) + 1;
        f_1 = l_1*(Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1);
    }
    var c1 = f_1.toString() + " " + current_operator1 + " " + l_1.toString();
    $(".block1-problem").html(c1);

    var t1 = parseInt($(".timer1").html());
    t1 += 5;
    t1.toString();
    $(".timer1").html(t1);

    var index2 = Math.floor((Math.random() * 4));
    current_operator2 = possible_operators[index2];
    if(current_operator2 == "+" || current_operator2 == "-"){
        f_2 = Math.floor((Math.random() * (Math.floor(200 + seconds_played*9)))) + 1;
        l_2 = Math.floor((Math.random() * (Math.floor(200 + seconds_played*9)))) + 1;
    }
    else if(current_operator2 == "x"){
        f_2 = Math.floor((Math.random() * (Math.floor(15 + seconds_played/6)))) + 1;
        l_2 = Math.floor((Math.random() * (Math.floor(15 + seconds_played/6)))) + 1;
    }
    else{
        l_2 = Math.floor((Math.random() * (Math.floor(12 + seconds_played/10)))) + 1;
        f_2 = 1_2*(Math.floor((Math.random() * (Math.floor(15 + seconds_played/6)))) + 1);
    }
    var c2 = f_2.toString() + " " + current_operator2 + " " + l_2.toString();
    $(".block2-problem").html(c2);

    var t2 = parseInt($(".timer2").html());
    t2 += 7;
    t2.toString();
    $(".timer2").html(t2);

    var index3 = Math.floor((Math.random() * type_texts.length));
    var c3 = type_texts[index3];
    $(".block3-problem").html(c3);

    var index4 = Math.floor((Math.random() * questions.length));
    var c4 = questions[index4].question;
    $(".block4-problem").html(c4);
    current_problem4 = index4;
    count_time();
}

function tick(){
    var t1 = parseInt($(".timer1").html());
    t1--;
    t1.toString();
    $(".timer1").html(t1);
    
    var t2 = parseInt($(".timer2").html());
    t2--;
    t2.toString();
    $(".timer2").html(t2);

    var t3 = parseInt($(".timer3").html());
    t3--;
    t3.toString();
    $(".timer3").html(t3);

    var t4 = parseInt($(".timer4").html());
    t4--;
    t4.toString();
    $(".timer4").html(t4);

    if(t1 <= 0 || t2 <= 0 || t3 <= 0 || t4 <= 0){
        clearInterval(t);
        alert("You lose.");
        $(".problems-container").hide();
        $("body").css("background","linear-gradient(135deg, #205dc5, #7e1ac6)");
        $("body").css("box-shadow", "inset 0 0 10px #0f037b");
        $(".start-container").show();
        game_started = false;
    }
    seconds_played++;
}

function count_time(){
    t = setInterval(tick, 1000);
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