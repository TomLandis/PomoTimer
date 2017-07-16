
$(document).ready(function() {
  var hold, temp, timer, mins, secs;
 var audio = new Audio('https://www.dropbox.com/s/0veq97susfmc1ku/Alarm.mp3?dl=1');
$("#outerDiv").addClass("waiting");

  function breakDown() {
    $('#resting').removeClass("break");
    if (mins === 0 && secs === 0) {
      clearTimeout(timer);
      clearTimeout(breakDown);
      $('#resting').addClass("break");

     
      
      $('#min').html(25);
      $('#sec').html("00");
       $('#start').html("Start");
      audio.play();

    } else if (secs > 0) {
      secs--;
      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(breakDown, 1000);
    } else if (mins === 0) {

      //console.log("what happened?")
      clearTimeout(timer);
      clearTimeout(breakDown);

      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(breakDown, 1000);

    } else {
      secs = 59;
      mins--;

      $('#min').html(mins);
      $('#sec').html(secs);

      timer = setTimeout(breakDown, 1000);
    }
  }

  function countDown() {
    if (mins === 0 && secs === 0) {
      clearTimeout(timer);
      clearTimeout(countDown);

      $('#min').html(mins);
      $('#sec').html(secs);

    
      hold = $('#bt').html();
      hold = parseFloat(hold);
      mins = hold;
      audio.play();
     
      
      timer = setTimeout(breakDown, 1000);

    } else if (secs > 0) {
      secs--;
      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(countDown, 1000);
    } else if (mins === 0) {
      clearTimeout(timer);
      clearTimeout(countDown);

     
      $('#min').html(mins);
      $('#sec').html(secs);
      timer = setTimeout(countDown, 1000);

    } else {
      secs = 59;
      mins--;

      $('#min').html(mins);
      $('#sec').html(secs);

      timer = setTimeout(countDown, 1000);
    }
  }
  //break timer

  $('#more').on('click', function(event) {

    hold = $('#min').html();
    hold = parseFloat(hold);
    hold += 1;
    $('#min').html(hold);
  });
  $('#less').on('click', function(event) {

    hold = $('#min').html();
    hold = parseFloat(hold);
    if(hold>1){
    hold -= 1;
    $('#min').html(hold);
    }else{
      $('#min').html(hold);
    }
  });

  $('#start').on('click', function(event) {
    var now;
    var temp = $('#start').html();
    mins = $('#min').html();
    secs = $('#sec').html();

    secs = parseFloat(secs);
    mins = parseFloat(mins);

    if (temp === "Start") {
      $("#outerDiv").removeClass("waiting");
       $("#outerDiv").addClass("counting");
     
     
      $('#start').html("Stop");
      countDown();

    }
    if (temp === "Stop") {
      $('#outerDiv').removeClass("counting");
      $('#outerDiv').addClass("waiting");
      $('#start').html("Start");
      clearTimeout(timer);
      clearTimeout(countDown);
      clearTimeout(timer);
      clearTimeout(breakDown);
    }
  });
 $('#breakLonger').on('click', function(event) {

    hold = $('#bt').html();
    hold = parseFloat(hold);
    hold += 1;
    $('#bt').html( hold );
  });
  $('#breakShorter').on('click', function(event) {

    hold = $('#bt').html();
    hold = parseFloat(hold);
    if(hold>1){
    hold -= 1;
    $('#bt').html( hold );
    }else{
    $('#bt').html( hold );}
  });
    $('#reset').on('click', function(event) {
      $('#resting').addClass("break");
      $('#start').html("Start");
     clearTimeout(timer);
      clearTimeout(countDown);
      clearTimeout(breakDown);
      
    $('#min').html(25);
      $('#sec').html("00");
    
  });
  
});