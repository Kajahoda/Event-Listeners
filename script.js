$('.button').on('click', function() {
    console.log('Yeah, you clicked me');
  });
$('.button2').on('click', function() {
    $('.button').html("The changed text");
  });
$('.button3').on('click', function() {
    $('.button').css('background-color','blue');
    $('.button2').css('background-color','pink');
    $('.button3').css('background-color','yellow');
  });
