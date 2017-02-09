
function game(){
	var wins = 0;
	var losses = 0;
	var targetnumber = Math.floor((Math.random()*120)+19);
	var score = 0;
	var crystal1value = Math.floor((Math.random()*12)+1);
	var crystal2value = Math.floor((Math.random()*12)+1);
	var crystal3value = Math.floor((Math.random()*12)+1);
	var crystal4value = Math.floor((Math.random()*12)+1);

	console.log("crystal1value: " + crystal1value)
	console.log("crystal2value: " + crystal2value)
	console.log("crystal3value: " + crystal3value)
	console.log("crystal4value: " + crystal4value)
	console.log("Score: " + score)

	$("#wincount").text(wins);
	$("#losscount").text(losses);
	$("#randomnumber").text(targetnumber);
	$("#totalscore").text(score);

	function reset(){
		targetnumber = Math.floor((Math.random()*120)+19);
		crystal1value = Math.floor((Math.random()*12)+1);
		crystal2value = Math.floor((Math.random()*12)+1);
		crystal3value = Math.floor((Math.random()*12)+1);
		crystal4value = Math.floor((Math.random()*12)+1);
		score = 0;
		$("#wincount").text(wins);
		$("#losscount").text(losses);
		$("#randomnumber").text(targetnumber);
		$("#totalscore").text(score);
		console.log("crystal1value: " + crystal1value)
		console.log("crystal2value: " + crystal2value)
		console.log("crystal3value: " + crystal3value)
		console.log("crystal4value: " + crystal4value)
	}

	function check(){
		if (score === targetnumber){
			wins++;
			alert("YOU WIN!!! PLAY AGAIN")
			reset();
		}
		if (score > targetnumber){
			losses++;
			alert("YOU LOSE!!! PLAY AGAIN");
			reset();
		}
	}

	$("#crystal1").on("click", function(event){
		score = crystal1value + score;
		$("#totalscore").text(score);
		check();
		console.log("Score: " + score)
	});
	$("#crystal2").on("click", function(event){
		score = crystal2value + score;
		$("#totalscore").text(score);
		check();
		console.log("Score: " + score)
	});
	$("#crystal3").on("click", function(event){
		score = crystal3value + score;
		$("#totalscore").text(score);
		check();
		console.log("Score: " + score)
	});
	$("#crystal4").on("click", function(event){
		score = crystal4value + score;
		$("#totalscore").text(score);
		check();
		console.log("Score: " + score)
	});
}

game();
