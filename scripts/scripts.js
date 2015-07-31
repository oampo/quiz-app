  
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

    $('.startButton').on('click', function(event) {
        event.preventDefault();
        $('body').addClass("changeBackground");
        $(this).remove();
        //show question in the right spot, function takes argument of current question
        var displayQuestion = function(index) {
            $('.questionsHere').append('<li><span>' + questions[index].question + '</span></li>');
        };
   });

    //initializes question number
    var currentQuestion = 0;
        // makes increasing the current question by one a function
        var answerQuestion = function() {
        currentQuestion++;
    };

//on click of answer, if question number is less than total number of questions, removes old question set and replaces with next question set

    on click {
    if (currentquestion < 5) {
        this.remove // removes the question
        displayQuestion(currentQuestion); // displays the new question
        answerQuestion(); //advances to new question
        //store answer value
    }
    else {
        Display calculating...
        if {
        
        }
        //total results
        display results
    }

    //store users answer point values

    var answerA = questions[index].choices[0];
    var answerB = questions[index].choices[1];
    var answerC = questions[index].choices[2];

    //add answer point values
    var score = 0;
    if answerA {
        var score = score + 1
    }
    if answerB {
        var score = score + 2
    }
    if answerC {
        var score = score + 3
    };

    //this can all be a function name of country is a variable.. 
    switch(score){
        case (score > 20) :
            $('.questionsHere').append('<li><span>You should go to ' results '</span></li>');
            $('.body').addClass("colombia");
            break;
        case (uservalues > 14 && uservalues <21) :
            $('.questionsHere').append('<li><span>You should go to Lake Baikal, Russia.</span></li>');
            $('.body').addClass("baikal");
            break;
        case (uservalues > 10 && uservalues < 14) :
            $('.questionsHere').append('<li><span>You should go to Glacier National Park.</span></li>');
            $('.body').addClass("baikal");
            break;
        case (uservalues 5 > && uservalues < 11) :
            $('.questionsHere').append('<li><span>You should go to Glacier National Park.</span></li>');
            $('.body').addClass("gnpark");
            break;
        default :
            $('.questionsHere').append('<li><span>You should go to Goa India.</span></li>');
            $('.body').addClass("india");
            
    }

});