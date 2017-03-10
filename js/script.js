$(document).ready(function(){
	var gridSize=8

	$("#reset").on('click',function(){
		gridSize = prompt("Please input the grid size");
		$('.box').remove();
		createGrid(gridSize);
		trail();
	});

	$("#colorGrid").on('click',function(){
		gridSize = prompt("Please input the grid size");
		$('.box').remove();
		createGrid(gridSize);
		colorF();
	});

	$("#drawGrid").on('click',function(){
		gridSize = prompt("Please input the grid size");
		$('.box').remove();
		$('.box2').remove();
		createGrid2(gridSize);
		drawF();
	});

	function randomIntFromInterval(min,max){
    	return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	function drawF(){
		$('.box2').hover(function(){

		var color1 = $(this).css("background-color");
		var regExp = /\(([^)]+)\)/;
		var matches = regExp.exec(color1);
		var splits = matches[1].split(',');
		var rColor = parseInt(splits[0]) - 10;
		var gColor = parseInt(splits[1]) - 10;
		var bColor = parseInt(splits[2]) - 10;
		$(this).css({"background-color":"rgb("+rColor+","+gColor+","+bColor+")"});
		});
	}

	function createGrid(nr){
		var nr2=(640-nr*2)/nr;
		for(var i=0;i<nr*nr;i++){
		$('#container').append("<div class='box'></div>");}
		$('.box').css({'width': nr2+"px",'height': nr2+"px"})
	}

	function createGrid2(nr){
		var nr2=(640-nr*2)/nr;
		for(var i=0;i<nr*nr;i++){
		$('#container').append("<div class='box2'></div>");}
		$('.box2').css({'width': nr2+"px",'height': nr2+"px"})
	}
	
	
	function trail(){
		$('.box').hover(function(){
			$(this).css({"background-color":"white"});
		},function(){
			$(this).animate({"background-color":"#222"},400);
		});}


	function colorF(){
		$('.box').hover(function(){
			var rColor = randomIntFromInterval(0,255);
			var gColor = randomIntFromInterval(0,255);
			var bColor = randomIntFromInterval(0,255);
			$(this).css({"background-color":"rgb("+rColor+","+gColor+","+bColor+")"});
		},function(){
			$(this).animate({"background-color":"#222"},400);
		});
	}

	createGrid(gridSize);
	trail();
});