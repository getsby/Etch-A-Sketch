var sizeofpad = 500;
var colour = "black" 
var rainbow = false;
var erase = false;
var recentSize = 16 

$(document).ready(function(){

	addCells(recentSize)

	$("#clear").click(function(){
		$('#frame').effect('shake',{times:2});
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

function addCells(size) {
	var pixelSize = sizeofpad/ size
	 for ( x = 0; x <size; x++){
	 	for (y = 0; y < size; y++{
	 		$("#frame").append("<div id = 'pixel'></div>")
	 	}
	 }

var mouseDown = false;
$(document).mouseDown(function(){
	mouseDown = true;
}).mouseup(function(){mouseDown = false});

