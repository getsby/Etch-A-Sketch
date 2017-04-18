var sizeofpad = 500;
var colour = "black" 
var rainbow = false;
var erase = false;
var recentSize = 16 

$(document).ready(function(){

	addCells(recentSize)

	$("#clear").click(function(){
		$('#container').effect('shake',{times:2});
		$("#DrawPad").empty();
		addCells(recentSize);
	});

	$ ("#rainbow").click(function(){
		rainbow = true;
		erase = false;
	});

	$ ("#marker").click(function(){
		rainbow = false;
		erase = false;
		colour = "black";

	});
	$ ("#eraser").click(function(){
		rainbow = false;
		erase = true;
	});

		
});

$(document).ready(function() {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
        	var unit = $("<div class='unit' style='position:absolute'></div>");
            unit.appendTo('#container', {left:});
        }
    }
});


$(document).ready(function(){
	$('.DrawPad').bind("mouseover",function(){
		var colour = $(this).css("background-color");

		$(this).css("background", "#380606");
		$(this).bind("mouseout",function(){
			$(this).css("background", color)
		})
	})
})