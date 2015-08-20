  
$(document).ready(function(){

    function QuizGame(question, choices, qNum) {
    this.question= question;
    this.choices= choices;
    
    // this.qNum= qNum; Joe-- is this a useless bit of data now?
    }
     
    var questions= [
    new QuizGame("How much time do you have?", ["long weekend", "one week", "sabbatical"]),
    new QuizGame("How sick of work/stressed out are you?", ["a little", "normal", "I live in NYC/and/or work at a start-up"]),
    new QuizGame("Do you need to chill or be active? Choose your blend of chill & active.", ["busy", "hectic", "mellow"]),
    new QuizGame("Do you like chaos? Choose your blend of chaos & serenity.", ["chaos", "serenity", "in the middle"]),
    new QuizGame("Do you like people?", ["yeah", "some", "I regularly commute on a rush hour subway/freeway."])
    ];

     var displayQuestion = function(index) {
        //show question in the right spot, function takes argument of current question
        $('.questionsHere').append('<span>' +questions[index].question+'</span>');
        $('.answersHere').append('<li><span>' +questions[index].choices[0]+'</span></li>');
        $('.answersHere').append('<li><span>' +questions[index].choices[1]+'</span></li>');
        $('.answersHere').append('<li><span>' +questions[index].choices[2]+'</span></li>');
        }

    //initializes question number & increase current question by 1
    var currentQuestion = 0;
    var answerQuestion = function() {
        currentQuestion++;
    };

    //displays question number
    var addQuestionNum = function() {
        $('.questionNum').append('<span> Question '+ (currentQuestion + 1) + '</span>');
    }
    //clear q number, question and answers
    var removeThings = function() {
        $('.questionNum').html('');
        $('.questionsHere').html('');
        $('.answersHere').html('');
    }
    //on start, change background, remove button, 
    $('.startButton').on('click', function(event) {
        event.preventDefault();
        $('body').addClass("changeBackground");
        $(this).remove();
        addQuestionNum();
        displayQuestion(currentQuestion);
        });

    var score = 0;

    //on click of answer, if question number is less than total number of
    // questions, removes old question set and replaces with next question set
    $('.answersHere').on('click', 'li', function(event) { 
        event.preventDefault();
        // console.log(currentQuestion);
        if (currentQuestion < questions.length - 1) {
            score += ($(event.currentTarget).index());
            removeThings(); // removes the question
            answerQuestion(); //advances to new question
            addQuestionNum();
            displayQuestion(currentQuestion); // displays the new question
            console.log(score);
        }

        else {
            removeThings();

            if (score == 9) {
                $('.questionsHere').append('<li><span>You should go to ' + results + '</span></li>');
                $('.body').addClass("colombia");
            }
            else if (score > 6 && score < 9) {
                $('.questionsHere').append('<li><span>You should go to Lake Baikal, Russia.</span></li>');
                $('.body').addClass("baikal");
            }
            else if (score > 3 && score < 6) {
                $('.questionsHere').append('<li><span>You should go to Glacier National Park.</span></li>');
                $('.body').addClass("baikal");
            }
            else if (score == 3) {
                $('.questionsHere').append('<li><span>You should go to Glacier National Park.</span></li>');
                $('.body').addClass("gnpark");
            }
            else {
                $('.questionsHere').append('<li><span>You should go to Goa India.</span></li>');
                $('.body').addClass("india");
            }
           
            console.log(score);
            $('.questionsHere').append('<li><span>Calculating...</span></li>');
            $('.questionsHere').append('<li><span>You got' + '</span></li>');
        };
    });
});