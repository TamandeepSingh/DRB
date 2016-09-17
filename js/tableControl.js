app.controller("tableControl", function($scope){
  /******************************/
	/*       Making Table        */
	/****************************/


	// main function for making tables views //
	$scope.change = function(){
		 var x=25,y=25;
		 var widthS = document.getElementById("sell1");
		 var width = parseInt(widthS.options[widthS.selectedIndex].value);
		 var lengthS = document.getElementById("sell2");
		 var length = parseInt(lengthS.options[lengthS.selectedIndex].value);
		 var heightS = document.getElementById("sell3");
		 var height = parseInt(heightS.options[heightS.selectedIndex].value);
		 var widthTS = document.getElementById("sell4");
		 var widthT = parseInt(widthTS.options[widthTS.selectedIndex].value);
		 var widthLS = document.getElementById("sell5");
		 var widthL = parseInt(widthLS.options[widthLS.selectedIndex].value);
		 var lengthLS = document.getElementById("sell6");
		 var lengthL = parseInt(lengthLS.options[lengthLS.selectedIndex].value);
		 // now we have width, length, height, widthT, lengthL,widthL
		 var w=width/15;
		 var l= length/15;
		 // top view
		 var rectangle1 = document.getElementById("canvasA");
		 var rect1 = rectangle1.getContext("2d");
		 rect1.fillStyle = "#CD853F";
		 rect1.fillRect(x,y,width,widthT);
		 rect1.fillStyle = "#87CEFA";
		 rect1.fillRect(x+w,y+widthT,widthL,height-widthT);
		 rect1.fillStyle = "#87CEFA";
		 rect1.fillRect(x-w+width-widthL,y+widthT,widthL,height-widthT);
		 // side view
		 var rectangle2 = document.getElementById("canvasB");
		 var rect2 = rectangle2.getContext("2d");
		 rect2.fillStyle = "#CD853F";
		 rect2.fillRect(x,y,length,widthT);
		 rect2.fillStyle = "#87CEFA";
		 rect2.fillRect(x+l,y+widthT,lengthL,height-widthT);
		 rect2.fillStyle = "#87CEFA";
		 rect2.fillRect(x-l+length-lengthL,y+widthT,lengthL,height-widthT);
		 // top view
		 var rectangle3 = document.getElementById("canvasC");
		 var rect3 = rectangle3.getContext("2d");
		 rect3.fillStyle = "#CD853F";
		 rect3.fillRect(x,y,width,length);
		 // bottom view
		 var rectangle4 = document.getElementById("canvasD");
		 var rect4 = rectangle4.getContext("2d");
		 rect4.fillStyle = "#CD853F";
		 rect4.fillRect(x,y,width,length);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(width+x-widthL-w,y+l,widthL,lengthL);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(x+width-widthL-w,y-l+length-lengthL,widthL,lengthL);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(x+w,y+l,widthL,lengthL);
		 rect4.fillStyle = "#87CEFA";
		 rect4.fillRect(x+w,y-l+length-lengthL,widthL,lengthL);
		}

	// reseting the Table canvases //
	$scope.resetTable = function(){
		var x=0,y=0,w=600,l=600;
		var rectangle1 = document.getElementById("canvasA");
		var rect1 = rectangle1.getContext("2d");
		rect1.clearRect(x,y,w,l);
		var rectangle2 = document.getElementById("canvasB");
		var rect2 = rectangle2.getContext("2d");
		rect2.clearRect(x,y,w,l);
		var rectangle3 = document.getElementById("canvasC");
		var rect3 = rectangle3.getContext("2d");
		rect3.clearRect(x,y,w,l);
		var rectangle4 = document.getElementById("canvasD");
		var rect4 = rectangle4.getContext("2d");
		rect4.clearRect(x,y,w,l);
	}

});
