var current_div = 1;
var current_string = "";
var game_started = false;
var current_problem4;

var type_texts = [
    "Howdy.",
    "Pleased to meet you.",
    "Hello?",
    "Greetings.",
    "Salutations.",
    "Hello.",
    "Hi!",
    "Hey",
    "Today we have a Jelly Belly Pet Rat Gummi Candy.",
    "Affirmative",
    "Nobody knows, the troubles I've seen",
    "Nobody knows, my sorrow.",
    "5 plus 5 equals 10.",
    "e5 is best by test.",
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
        "question": "If the sum of two prime numbers is even, then one of them has to be 2.",
        "answer": "true",
        "difficulty": "easy"
    },
    {
        "question": "In the ring of even integers (2Z), 42 is a prime number.",
        "answer": "true",
        "difficulty": "hard"
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