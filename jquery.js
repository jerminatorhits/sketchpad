$(document).ready(function() {
	$("body").append("<div id='top'></div>");
  $("#top").append("<button onclick='myFunction()'>Start Again</button>");
  $("body").append("<div id='container'></div>");
  $("button").click(function() {
    $("div").removeClass("blue"); 
  });
});

function myFunction() {
    numbers = prompt('How many squares per side would you like?');
    n = (960/numbers - 2).toString() + 'px';
    $('div').remove('.square');
    for(var i = 0; i < numbers*numbers; i++){
      $("#container").append("<div class='square'></div>");
    }
    $(".square").css({ 'height' : n, 'width' : n});
    $('.square').hover(function() {
      $(this).addClass("blue");
      
     /* var q = $(this).css('opacity');
      $(this).css({'background-color' : getRandomColor(), 'opacity' : q-0.1});*/
  });
}
/*
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/