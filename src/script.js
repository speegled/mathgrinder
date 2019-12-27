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

var type_texts = [
    "A penny saved is a penny earned.",
    "Never look back. They might be gaining on you.",
    "A stitch in time saves nine.",
    "The only thing you have to fear is fear itself.",
    "The rate at which inflation is increasing is decreasing.",
    "However, the rate at which the increase of inflation is decreasing is increasing.",
    "Rubber baby buggy bumpers.",
    "All bubble blowing babies will be beaten senseless by every able-bodied patron in the bar (bar).",
    "Every positive adjective was severely modified, if not completely contradicted by, an accompanying adverb.",
    "Road work ahead? Uh, yeah. I sure hope it does!",
    "East? I thought you said, \" Weast.\"",
    "One must never contradict an active love",
    "Are you calling me a liar? I ain't calling ya for dinner.",
    "Hope you're happy.",
    "Ride with the mob.",
    "Howdy.",
    "Pleased to meet you.",
    "Hello?",
    "Greetings.",
    "Salutations.",
    "Hello.",
    "Hi!",
    "Hey",
    "Ferg is the name. Ben Baller did the chain.",
    "Today we have a Jelly Belly Pet Rat Gummi Candy.",
    "Affirmative",
    "Nobody knows, the troubles I've seen",
    "Nobody knows, my sorrow.",
    "5 plus 5 equals 10.",
    "e4 is best by test.",
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
    "\"Cuius rei demonstrationem mirabilem sane detexi hanc marginis exiguitas non caperet.\" - Pierre de Fermat",
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
    "I'm thinking \"Loedewiekie Koekie\" is a viable option.",
    "Squidward will be performing his version of Solitude in E Minor.",
    "Yeah! E Minor, alright, yeah!",
    "Spongebob! We're not cavemen -- we have technology.",
    "Some - T-rex, bohnth, in my yard; can you believe that?",
    "And so -- of course -- I had to ... clarefully take out this precious bone",
    "Ok, times up!",
    "And I dust it off. A ha ha ha",
    "That angle",
    "Walk out the crib with an ice cream sandwich.",
    "Javaris Jamar Javarison-Lamar!",
    "Davoin Shower-Handel",
    "Jackmerius Tacktheritrix",
    "Rome wasn't built in a day.",
    "Listen. My motto is no beef: literal, or figurative.",
    "I woke up in a new Bugatti",
    "V A P O R W A V E",
    "I want a brand new whip. I want a brand new house.",
    "I fell in love - same time that you're falling apart",
    "I shoulda known - thought I saw a sign in the stars",
    "But I was wrong!",
    "I used to be so devastated - at times I thought we'd never make it",
    "My Ryze is bad. My Azir is worse. You guessed it right; I'm G2 Perkz.",
    "Since LA, I been putting on",
    "Cirque de Soleil, on and on and on",
    "144 is a perfect square.",
    "145 is not a perfect square.",
    "Putting economic policy before fiscal responsibility is like putting the cart before the horse.",
    "Venmo me your lunch money, nerd.",
    "Need to get the lambo and drive",
    "I was in the lab; you were on my mind. But all I really do is just grind",
    "Who'd do the stuff that I do??",
    "I coulda went (sic) to school to be a doctor. But I dropped out and chose to be a baller.",
    "Cash in the area; what goes up, gotta come down.",
    "I'm so glad that you came",
    "I'm trapped in my conscious",
    "Where's the love if you love me?",
    "The sky keep on falling",
    "I don't wanna buy no more",
    "Ima die rich. Keep a side chick. That's just how it is - just in case you didn't know",
    "Represent the men who get reckless for that yen",
    "I'll never let you let me go",
    "Yo Pierre, you wanna come out here?",
    "In New York I Milly Rock",
    "Baking soda! I got baking soda!",
    "We dem boyz",
    "I got loyalty, got royalty inside my DNA",
    "I got millions, I got riches building in my DNA",
    "Every time I'm in the street, I hear, \"Yok Yok Yok Yok\".",
    "Yeah, something inside me's changed - I was so much younger yesterday",
    "Swish! I'm balling. I'm so awesome.",
    "They said I wouldn't be nothing; now they always say, \"Congratulations!\"",
    "Oh, I want something just like this!",
    "I was about to text you back... but then I hopped up in the drop",
    "Walking with a check, I take lil' shawty out for lunch",
    "Walk. We don't no talking. Got your man calling. I need better options.",
    "I came, I saw. I conquered all.",
    "Pull up, shoot! Jayson Tatum",
    "I went on a date with this girl, and her floor was just bean bags.",
    "Soulja boy up in it; watch me crank it, watch me; watch me crank that soulja boy",
    "\"I dunno. CAN you go to the bathroom? Can you?\" - My middle school teacher, Mrs. Trisket",
    "\"57 is prime.\" - Grothendieck",
    "\"There are no prime numbers except for 57.\" - Grothendieck",
    "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" - Nelson Mandela",
    "\"The way to get started is to quit talking and begin doing.\" - Walt Disney",
    "\"If life were predictable it would cease to be life, and be without flavor.\" - Eleanor Roosevelt",
    "\"It is during our darkest moments that we must focus to see the light.\" - Aristotle",
    "\"You miss 100% of the shots you don't take.\" - Wayne Gretzky",
    "\"Whether you think you can or you think you can't, you're right.\" - Henry Ford",
    "\"Dream big and dare to fail.\" - Norman Vaughan",
    "\"I didn't fail the test. I just found 100 ways to do it wrong.\" - Benjamin Franklin",
    "\"Imagine if I had a real weapon.\" - Jax",
    "\"I would rather die of passion than of boredom.\" - Vincent van Gogh",
    "\"Dreaming, after all, is a form of planning.\" - Gloria Steinem",
    "\"I have no special talent. I am only passionately curious.\" - Albert Einstein",
    "\"Wisely, and slow. They stumble that run fast.\" - William Shakespeare",
]

var questions = [
    {
        "question": "4 x 5 = 20.",
        "answer": "true",
        "difficulty": "easy"
    }, 
    {
        "question": "Every commutative ring with one has a maximal ideal.",
        "answer": "true",
        "difficulty": "hard"
    },
    {
        "question": "All maximal ideals are prime ideals.",
        "answer": "true",
        "difficulty": "hard"
    },
    {
        "question": "The square root of 2 is algebraic.",
        "answer": "true",
        "difficulty": "medium"
    },
    {
        "question": "Pi is a rational number.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "The first few digits of pi are 3.141592.",
        "answer": "true",
        "difficulty": "medium"
    },
    {
        "question": "The first few digits of pi are 3.141593.",
        "answer": "false",
        "difficulty": "medium"
    },
    {
        "question": "The first few digits of pi are 3.14159261.",
        "answer": "false",
        "difficulty": "medium"
    },
    {
        "question": "Pi has finitely many digits.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "16 x 11 = 186.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "17 x 7 = 119",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "14 - 42 = -32",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "The sum of two prime numbers is even.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "If the sum of two prime numbers is odd, then one of them has to be 2.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "The sides of a triangle can be uniquely determined by the measure of its angles.",
        "answer": "false",
        "difficulty": "medium"
    },
    {
        "question": "(7 * 7) mod 4 is equivalent to 1 mod 4.",
        "answer": "true",
        "difficulty": "medium"
    },
    {
        "question": "52 + 298 = 340.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "91 is prime.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "133 is prime.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "171 is prime.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "97 is prime.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "101 is prime.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "1 is prime.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "0 is prime.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "12 x 24 = 268.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "361 is a square number.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "The binary representation for 17 (base 10) is 10101.",
        "answer": "false",
        "difficulty": "medium"
    },
    {
        "question": "The derivative of sin(2x) is 2sinxcosx.",
        "answer": "false",
        "difficulty": "medium"
    },
    {
        "question": "If a function is continuous, it is differentiable.",
        "answer": "false",
        "difficulty": "medium"
    },
    {
        "question": "3 x 4 = 12.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "107 + 789 = 896.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "4096 is a power of 2.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "There are 3 prime numbers between 8 and 16.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "186 is divisible by 7.",
        "answer": "false",
        "difficulty": "easy"
    },
    {
        "question": "279 is divisible by 3.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "3, 5, and 7 are the only set of 3 consecutive primes that are 2 apart.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "The definite integral from 1 to 5 of 3x^2 dx is 126.",
        "answer": "false",
        "difficulty": "hard"
    },
    {
        "question": "The definite integral from 1 to 5 of 3x^2 dx is 124.",
        "answer": "true",
        "difficulty": "hard"
    },
    {
        "question": "The definite integral from 2 to 5 of 3x^2 dx is 121.",
        "answer": "true",
        "difficulty": "hard"
    },
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
                l_1 = Math.floor((Math.random() * (Math.floor(5 + seconds_played/10)))) + 1;
                if(current_operator1 == "/"){
                    f_1 = Math.floor((Math.random()* (Math.floor(5 + seconds_played/10))))*l_1;
                }
                else{
                    f_1 = Math.floor((Math.random() * (Math.floor(5 + seconds_played/10))));
                }
                var c1 = f_1.toString() + " " + current_operator1 + " " + l_1.toString();
                $(".block1-problem").html(c1);

                var t1 = parseInt($(".timer1").html());
                t1+=8;
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
                l_2 = Math.floor((Math.random() * (Math.floor(7 + seconds_played/8)))) + 1;
                if(current_operator2 == "/"){
                    f_2 = Math.floor((Math.random()* (Math.floor(7 + seconds_played/8))))*l_2;
                }
                else{
                    f_2 = Math.floor((Math.random() * (Math.floor(5 + seconds_played/10))));
                }
                var c2 = f_2.toString() + " " + current_operator2 + " " + l_2.toString();
                $(".block2-problem").html(c2);

                var t2 = parseInt($(".timer2").html());
                t2+=15;
                $(".timer2").html(t2);
            }
        }
        else if(current_div == 3){
            if($(".block3-problem").html() == current_string){
                var t3 = parseInt($(".timer3").html());
                t3+= (12 + Math.floor(current_string.length/15));
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

    var index1 = Math.floor((Math.random() * 4));
    current_operator1 = possible_operators[index1];
    l_1 = Math.floor((Math.random() * (Math.floor(5 + seconds_played/10)))) + 1;
    if(current_operator1 == "/"){
        f_1 = Math.floor((Math.random()* (Math.floor(5 + seconds_played/10))))*l_1;
    }
    else{
        f_1 = Math.floor((Math.random() * (Math.floor(5 + seconds_played/10))));
    }
    var c1 = f_1.toString() + " " + current_operator1 + " " + l_1.toString();
    $(".block1-problem").html(c1);

    var index2 = Math.floor((Math.random() * 4));
    current_operator2 = possible_operators[index2];
    l_2 = Math.floor((Math.random() * (Math.floor(7 + seconds_played/8)))) + 1;
    if(current_operator2 == "/"){
        f_2 = Math.floor((Math.random()* (Math.floor(7 + seconds_played/8))))*l_2;
    }
    else{
        f_2 = Math.floor((Math.random() * (Math.floor(5 + seconds_played/10))));
    }
    var c2 = f_2.toString() + " " + current_operator2 + " " + l_2.toString();
    $(".block2-problem").html(c2);

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
        $(".start-container").hide();
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