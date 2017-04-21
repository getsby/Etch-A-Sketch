

$(document).ready(function() {
    for(var x = 0; x < 41; x++) {
        for(var y = 0; y < 41; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#DrawPad');
        }
    }
});

//var mouseDown = false;
//$(document).mousedown(function(){
//	mouseDown = true;}0.mouseup(function(){mouseDown = false});
//})

//  $('.unit').hover(function(){
//      if (mouseDown == true){
 //     	if (random == true){
      //		colour1 = Math.Floor((Math.random()*255));
      //		colour2 = Math.Floor((Math.random()*255));
      	//	colour3 = Math.Floor((Math.random()*255));
//
      //		colour = "rgb("+ colour1 +"," + colour2 + "," + colour3 +")"

 //     	}

  //    	if (erase == true){
  //    		colour == "white"
  //    	}

   //   	$(this).css("background-color",colour); 
  //    }

  //   };




 //}