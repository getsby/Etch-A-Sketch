//--------------add div grid------------
$(document).ready(function() {
    for(var x = 0; x < 41; x++) {
        for(var y = 0; y < 41; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#DrawPad');
        }
    }
});

//---------draw with black marker-------
$(document).ready(function () {
 var colorOrig=$(".unit").css('background-color');
 $("#marker").click(function () {    
    $(".unit").hover(function() {
        //mouse down
        $(this).css('background-color', 'black')  
      },
      function() {
        //mouse up
      $(this).css('background-color', 'black')
  });
  });
  });

 
 //------rainbow-------------
 $(document).ready(function () {
 $("#rainbow").click(function () {
 $('.unit').hover(function() {
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(this).css('background-color', randomColorChange);
    });
    });
  });

// --- to erase ----------
$(document).ready(function () {
 $("#eraser").click(function () {
		$(".unit").hover(function() {
        //mouse down
        $(this).css('background-color', 'white')
    },
    function() {
        //mouse up
        $(this).css('background-color', 'white')
  });
  });
 });
 
//-----------clear the canvas--------
 $(document).ready(function () {
  $("#clear").click(function () {
   //only the content inside of the element will be deleted
   $(".unit").css('background-color', 'white')
  });
 });


