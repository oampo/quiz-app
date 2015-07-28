  
$(document).ready(function(){

    function QuizGame(question, choices, qNum) {
    this.question= question;
    this.choices= choices;
    this.qNum= qNum;
    }

    var question0= new QuizGame("How much time do you have?", ["long weekend", "one week", "sabbatical"], 0);
    var question1= new QuizGame("How sick of work/stressed out are you?", ["a little", "normal", "I live in NYC/and/or work at a start-up"], 1);
    var question2= new QuizGame("Do you need to chill or be active? Choose your blend of chill & active.", ["mellow", "busy", "hectic"], 2);
    var question3= new QuizGame("Do you like chaos? Choose your blend of chaos & serenity.", ["chaos", "serenity", "in the middle"], 3);
    var question4= new QuizGame("Do you like people?", ["yeah", "some", "I regularly commute on a rush hour subway/freeway."], 4);
    
    //each choice needs to have a value in order to tally a score up to deliver answer

    $('.startButton').on('click', function(event) {
    event.preventDefault();
    $('body').css("background-color","#00D1C4");
    $('body').css("background-image","none");
    $(this).remove();
    console.log(question0.question);
    $('.questionsHere').append('<li><span>' + question0.question + '</span></li>');
    $('.questionsHere').append('<li><span>' + question0.choices[0] + '</span></li>');
    $('.questionsHere').append('<li><span>' + question0.choices[1] + '</span></li>');
    $('.questionsHere').append('<li><span>' + question0.choices[2] + '</span></li>');
   });
    
//upon click of answer, go to next question & store answer

    //store users answer point values
    //add answer point values
    //if (uservalues > 20){
        // 'You should go Columbia.'
    // }
    // else if (uservalues > 14 && uservalues <20){
        //'You should go to Lake Baikal, Russia.'
    //}
    // else if (uservalues >10 && uservalues < 14){
    //     'You should go to Glacier National Park.'
    //}
    //else if (uservalues 5> && uservalues < 10 {
    //     'You should go to Goa India.'
    //else {
    //     'You should go to Brazil.'
    // }
    //}

});