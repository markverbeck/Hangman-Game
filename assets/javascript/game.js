// Variables...

var wins = 0;
var words = ["Slayer", "Pantera", "Sepultura", "Cannibal Corpse"];
var guess = 10;
var picked = [];

var slayer = [" _ "," _ "," _ "," _ "," _ "," _ ",];
var pantera = [" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ",];
var sepultura = [" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ",];
var cCorpse = 
[" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", "   ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ",];



document.getElementById('gRemaining').innerHTML = guess;


// Players...

var human = document.onkeyup = function(event){
 	var key_press = String.fromCharCode(event.keyCode);
 	human = key_press;
 	console.log(human);
 	compare(computer, human);
 	document.getElementById('PressK').innerHTML = " ";
 	win(document.getElementById('cw').innerHTML);
 	
 	lose();
 	
 }

var computer = Math.floor(Math.random() * 4);
	if (computer === 0){
		computer = words[0];
	}else if (computer === 1){
		computer = words[1];
	}else if (computer === 2){
		computer = words[2];
	}else{
		computer = words[3];
	}
	console.log(computer);


	if (computer === words[0]){
			
			document.getElementById("cw").innerHTML= 
			(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
	}else if (computer === words[1]){
			document.getElementById("cw").innerHTML = 
			(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]);
	}else if (computer === words[2]){
			document.getElementById("cw").innerHTML = 
			(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
	}else{
			document.getElementById("cw").innerHTML =
			(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);

	}

	
	// a= computer b=human
	var compare = function(a,b){
		
			if (a === words[0]){
				if (b === ("S" || "s")){
					slayer[0]= human;
					document.getElementById("cw").innerHTML= 
					(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
					

				}else if (b === ("L" || "a")){
					slayer[1]= human;
					document.getElementById("cw").innerHTML= 
					(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
					

				}else if (b === ("A" || "a")){
					slayer[2]= human;
					document.getElementById("cw").innerHTML= 
					(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
					

				}else if (b === ("Y" || "y")){
					slayer[3]= human;
					document.getElementById("cw").innerHTML= 
					(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
					

				}else if (b === ("E" || "e")){
					slayer[4]= human;
					document.getElementById("cw").innerHTML= 
					(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
					

				}else if (b === ("R" || "r")){
					slayer[5]= human;
					document.getElementById("cw").innerHTML= 
					(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
					

				}else{
					
					picked.push(human);
					document.getElementById('letterGuessed').innerHTML = picked;
					guess --;
					document.getElementById('gRemaining').innerHTML = guess;
				}


			}else if (a === words[1]){
				
				if (b === ("P" || "p")){
					pantera[0]= human;
					document.getElementById("cw").innerHTML = 
					(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]) ;
					
				}else if (b === ("A" || "a")){
					pantera[1]= human;
					pantera[6] = human;
					document.getElementById("cw").innerHTML = 
					(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]);
						
				}else if (b === ("N" || "n")){
					pantera[2]= human;
					document.getElementById("cw").innerHTML = 
					(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]);
					
				}else if (b === ("T" || "t")){
					pantera[3]= human;
					document.getElementById("cw").innerHTML = 
					(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]);
					
				}else if (b === ("E" || "e")){
					pantera[4]= human;
					document.getElementById("cw").innerHTML = 
					(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]);
					
				}else if (b === ("R" || "r")){
					pantera[5]= human;
					document.getElementById("cw").innerHTML = 
					(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]);
					
				}else{
					picked.push(human);
					document.getElementById('letterGuessed').innerHTML = picked;
					guess --;
					document.getElementById('gRemaining').innerHTML = guess;
				}
			
			}else if (a === words[2]){
				if (b === ("S" ||"s")){
					sepultura[0] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else if (b === ("E" ||"e")){
					sepultura[1] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else if (b === ("P" ||"p")){
					sepultura[2] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else if (b === ("U" ||"u")){
					sepultura[3] = human;
					sepultura[6] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else if (b === ("L" ||"l")){
					sepultura[4] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else if (b === ("T" ||"t")){
					sepultura[5] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else if (b === ("R" ||"r")){
					sepultura[7] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else if (b === ("A" ||"a")){
					sepultura[8] = human;
					document.getElementById("cw").innerHTML =
					(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
					
				}else{
					picked.push(human);
					document.getElementById('letterGuessed').innerHTML = picked;
					guess --;
					document.getElementById('gRemaining').innerHTML = guess;
				}
			
			}else{
				if (b === ("C" || "c")){
					cCorpse[0] = human;
					cCorpse[9] = human;
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("A" || "a")){
					cCorpse[1] = human;
					cCorpse[6] = human;
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("N" || "n")){
					cCorpse[2] = human;
					cCorpse[3] = human;
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("I" || "i")){
					cCorpse[4] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("B" || "b")){
					cCorpse[5] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("L" || "l")){
					cCorpse[7] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("O" || "o")){
					cCorpse[10] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("R" || "r")){
					cCorpse[11] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("P" || "p")){
					cCorpse[12] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("S" || "s")){
					cCorpse[13] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else if (b === ("E" || "e")){
					cCorpse[14] = human;
					
					document.getElementById('cw').innerHTML = 
					(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);
					
				}else{
					picked.push(human);
					document.getElementById('letterGuessed').innerHTML = picked;
					guess --;
					document.getElementById('gRemaining').innerHTML = guess;
				}
			}

		
	}

	var win = function (a){
		if (a === "SLAYER"){
			wins ++;
			document.getElementById('wins').innerHTML = wins;
			document.getElementById('pic').src = "https://www.metal-archives.com/images/7/2/72_logo.png?1348";
			document.getElementById('song').src = "assets/images/slayer.m4a";
			document.getElementById('song').play();
			reset();
		}else if (a === "PANTERA"){
			wins ++;
			document.getElementById('wins').innerHTML = wins;
			document.getElementById('pic').src = "https://upload.wikimedia.org/wikipedia/en/9/9c/Pantera_-_This_Love_single.jpg";
			document.getElementById('song').src = "assets/images/pantera.mp3";
			document.getElementById('song').play();
			reset();
		}else if (a === "SEPULTURA"){
			wins ++;
			document.getElementById('wins').innerHTML = wins;
			document.getElementById('pic').src = "https://seeklogo.com/images/S/Sepultura-logo-E193D97E34-seeklogo.com.png";
			document.getElementById('song').src = "assets/images/sepultura.mp3";
			document.getElementById('song').play();
			reset();
		}else if (a === "CANNIBAL   CORPSE"){
			wins ++;
			document.getElementById('wins').innerHTML = wins;
			document.getElementById('pic').src = "http://cdn-s3.allmusic.com/release-covers/500/0003/562/0003562266.jpg";
			document.getElementById('song').src = "assets/images/cannibalCorpse.m4a";
			document.getElementById('song').play();
			reset();
		}else{

		}


	}

	

	var lose = function(){
		if (guess === 0){
			wins = 0;
			document.getElementById('wins').innerHTML = wins;
			document.getElementById('PressK').innerHTML = "You Lose Sucka!!";
			document.getElementById('pic').src = "https://s3.amazonaws.com/bit-photos/large/6285178.jpeg";
			document.getElementById('song').src = "assets/images/trish.m4a";
			document.getElementById('song').play();
			reset();
		}
	}

	var reset = function (){

		 slayer = [" _ "," _ "," _ "," _ "," _ "," _ ",];
		 pantera = [" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ",];
		 sepultura = [" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ",];
		 cCorpse = 
		[" _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ", "   ", " _ ", " _ ", " _ ", " _ ", " _ ", " _ ",];

		document.getElementById('cw').innerHTML = " ";
		guess = 10;
	    picked = [];
	document.getElementById('gRemaining').innerHTML = guess;
	document.getElementById('letterGuessed').innerHTML = picked;
				
	 computer = Math.floor(Math.random() * 4);
	 	if (computer === 0){
		computer = words[0];
		}else if (computer === 1){
		computer = words[1];
		}else if (computer === 2){
		computer = words[2];
		}else{
		computer = words[3];
	}

	if (computer === words[0]){
			
			document.getElementById("cw").innerHTML= 
			(slayer[0] + slayer[1] + slayer[2] + slayer[3] + slayer[4] + slayer[5]) ;
	}else if (computer === words[1]){
			document.getElementById("cw").innerHTML = 
			(pantera[0] + pantera[1] + pantera[2] + pantera[3] + pantera[4] + pantera[5] + pantera[6]);
	}else if (computer === words[2]){
			document.getElementById("cw").innerHTML = 
			(sepultura[0] + sepultura[1] + sepultura[2] + sepultura[3] + sepultura[4] + sepultura[5] + sepultura[6] + sepultura[7] + sepultura[8]);
	}else{
			document.getElementById("cw").innerHTML =
			(cCorpse[0] + cCorpse[1] + cCorpse[2] + cCorpse[3] + cCorpse[4] + cCorpse[5] + cCorpse[6] + cCorpse[7] + cCorpse[8] + cCorpse[9] + cCorpse[10] + cCorpse[11] + cCorpse[12] + cCorpse[13] + cCorpse[14]);

	}

	guess = 10;
	picked = [];
	document.getElementById('gRemaining').innerHTML = guess;
	document.getElementById('letterGuessed').innerHTML = picked;


	};

	var button = function() {
		document.getElementById('song').pause();
	}

	var button1 = function() {
		document.getElementById('song').play();
	}



				
		
	

  
		
			






















   

