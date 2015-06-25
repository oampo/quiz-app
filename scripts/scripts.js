  
$(document).ready(function(){


  $('.startButton').on('click', function(event) {
    event.preventDefault();
    console.log('test');
    $('body').css("background-color","#00D1C4");
    $('body').addClass("background-image","none");
    $(this).remove();
    $('.question1').show();

   $('.answer1').on('click', function(event) {
   	$('.question2').show();
   	$('.question1').remove();
   });

   });
});