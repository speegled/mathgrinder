var current_div = 1;
var current_string = "";
var game_started = false;
var current_problem4;

var type_texts = [
    "This is a test of the intercom system.",
    "Indeed.",
    "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
    "Quite indeed, considering the efficacy of Fermat's Little Theorem.",
    "I encompass, and I eclipse. Ooh, got the hiccups.",
    "Shawty come again; tell me what your mood 'bout; maybe we can move out; go to where it's nice out",
    "Couldn't agree more, Stanley.",
    "Why am I typing this?",
    "I am doing this instead of my Ph.D. thesis",
    "Ruby on Rails",
    "Typing these all out was very fun.",
    "A man, a plan, a canal. Panama.",
    "Yea verily.",
    "I been on the moon",
    "She said I'm the man because I bought her Louboutins",
    "1.e4 e5 2.Ke2!!",
    "$we love jQuery :)",
    "A module is Noetherian if and only if all of its submodules are finitely generated.",
    "1.e4 e5 2.Nf3?? Ke7!!",
    "Now I will do what others won't, so tomorrow I can do what others can't.",
    "Cuius rei demonstrationem mirabilem sane detexi hanc marginis exiguitas non caperet. - Pierre de Fermat",
    "Not much of a math game really is it",
    "Koejawel.",
    "Kweper.",
    "The cycle of life and death continues: we will live; they will die.",
    "The Bolzano-Weierstrass Theorem states that every bounded sequence in R^n has a convergent subsequence.",
    "There exists a topology in which the real line is compact.",
    "The rational numbers are a DENSE subset of the real numbers.",
    "She said I'm the man because I look like Pierre Fermat",
    "I came. I saw. I came. I saw. I praise - the lord. And break - the law.",
    "YoooOOOOOoOOoOoooOooO",
    "I really should've made a lorem ipsum dump instead of writing all these myself",
    "Gordon Palmer",
    "I love math!",
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
        if(current_div == 3){
            if($(".block3-problem").html() == current_string){
                var index = Math.floor((Math.random() * type_texts.length));
                var cs = type_texts[index];
                $(".block3-problem").html(cs);
            }
            else{
                alert("No sir (3).");
            }
        }
        if(current_div == 4){
            if(current_string.toUpperCase() == questions[current_problem4].answer.toUpperCase()){
                var index = Math.floor((Math.random() * questions.length));
                var cs = questions[index].question;
                $(".block4-problem").html(cs);
                current_problem4 = index;
            }
            else{
                alert("No sir (4).");
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

    var index3 = Math.floor((Math.random() * type_texts.length));
    var c3 = type_texts[index3];
    $(".block3-problem").html(c3);

    var index4 = Math.floor((Math.random() * questions.length));
    var c4 = questions[index4].question;
    $(".block4-problem").html(c4);
    current_problem4 = index4;
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