  
$(document).ready(function(){

    function QuizGame(question, choices, qNum) {
    this.question= question;
    this.choices= choices;
    this.qNum= qNum;
    }
//this about the answers to your questions. how 
    var questions= [
    new QuizGame("How much time do you have?", ["long weekend", "one week", "sabbatical"], 0),
    new QuizGame("How sick of work/stressed out are you?", ["a little", "normal", "I live in NYC/and/or work at a start-up"], 1),
    new QuizGame("Do you need to chill or be active? Choose your blend of chill & active.", ["mellow", "busy", "hectic"], 2),
    new QuizGame("Do you like chaos? Choose your blend of chaos & serenity.", ["chaos", "serenity", "in the middle"], 3),
    new QuizGame("Do you like people?", ["yeah", "some", "I regularly commute on a rush hour subway/freeway."], 4)
    ];

    //each choice needs to have a value in order to tally a score up to deliver answer

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
    //add answer point values
    //this can all be a function name of country is a variable.. 
    switch(uservalues){
        case (uservalues > 20) :
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