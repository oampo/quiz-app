  
$(document).ready(function(){

    function QuizGame(question, choices, qNum) {
    this.question= question;
    this.choices= choices;
    // this.qNum= qNum; Joe-- is this a useless bit of data now?
    }
     
    var questions= [
    new QuizGame("How much time do you have?", ["long weekend", "one week", "sabbatical"], 0),
    new QuizGame("How sick of work/stressed out are you?", ["a little", "normal", "I live in NYC/and/or work at a start-up"], 1),
    new QuizGame("Do you need to chill or be active? Choose your blend of chill & active.", ["mellow", "busy", "hectic"], 2),
    new QuizGame("Do you like chaos? Choose your blend of chaos & serenity.", ["chaos", "serenity", "in the middle"], 3),
    new QuizGame("Do you like people?", ["yeah", "some", "I regularly commute on a rush hour subway/freeway."], 4)
    ];

     var displayQuestion = function(index) {
        //show question in the right spot, function takes argument of current question
        $('.questionsHere').append('<span>' +questions[index].question+'</span>');
        $('.answersHere').append('<li><span>' +questions[index].choices[0]+'</span></li>');
        $('.answersHere').append('<li><span>' +questions[index].choices[1]+'</span></li>');
        $('.answersHere').append('<li><span>' +questions[index].choices[2]+'</span></li>');
        }

     //initializes question number
    var currentQuestion = 0;
        // function to increase current question by 1
    var answerQuestion = function() {
        currentQuestion++;
    };

    var addQuestionNum = function() {
        $('.questionNum').append('<span> Question '+ (currentQuestion + 1) + '</span>');
    }

    var removeThings = function() {
        $('.questionNum').html('');
        $('.questionsHere').html('');
        $('.answersHere').html('');
    }

    $('.startButton').on('click', function(event) {
        event.preventDefault();
        $('body').addClass("changeBackground");
        $(this).remove();
        addQuestionNum();
        displayQuestion(currentQuestion);
        });

    //on click of answer, if question number is less than total number of
    // questions, removes old question set and replaces with next question set
    $('.answersHere').on('click', 'li', function(event) { 
        event.preventDefault();
        console.log(currentQuestion);
        if (currentQuestion < questions.length - 1) {
            removeThings(); // removes the question
            answerQuestion(); //advances to new question
            addQuestionNum();
            displayQuestion(currentQuestion); // displays the new question
            // nested if here? 
            //store users answer point values
            $(questions.choices[0]).on('click', function(event) {
                var answerA = questions.choices[0].val();
            }
            // var answerA = questions.choices[0];
            // var answerB = questions.choices[1];
            // var answerC = questions.choices[2];
        }
        //questions[index].choices
        else {
            removeThings();

            //add answer point values
            var score = 0;

            if (answerA) {
                var score = score + 1;
            }
            if (answerB) {
                var score = score + 2;
            }
            if (answerC) {
                var score = score + 3
            };
            console.log(score);
            $('.questionsHere').append('<li><span>Calculating...</span></li>');
            $('.questionsHere').append('<li><span>You got' + '</span></li>');
        };
    });

    // low, medium, high classify scores, to use the relationship

    // if (score == 9) {
    //     $('.questionsHere').append('<li><span>You should go to ' + results + '</span></li>');
    //     $('.body').addClass("colombia");
    // }
    // else if (score > 6 && score < 9) {
    //     $('.questionsHere').append('<li><span>You should go to Lake Baikal, Russia.</span></li>');
    //     $('.body').addClass("baikal");
    // }
    // else if (score > 3 && score < 6) {
    //     $('.questionsHere').append('<li><span>You should go to Glacier National Park.</span></li>');
    //     $('.body').addClass("baikal");
    // }
    // else if (score == 3) {
    //     $('.questionsHere').append('<li><span>You should go to Glacier National Park.</span></li>');
    //     $('.body').addClass("gnpark");
    // }
    // else {
    //     $('.questionsHere').append('<li><span>You should go to Goa India.</span></li>');
    //     $('.body').addClass("india");
    // }

});