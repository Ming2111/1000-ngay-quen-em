
let i = 0;
let text1 = "Cũng 1000 ngày mà anh được quen em rùiii em bé cụa tuii :3";
let text2 = "Anh cảm thấy mình thật may mắn khi được quen em, và được ở bên em, được yêu thương em, và được cảm nhận tình yêu của em. hong biết iem coá nghe thấy tiếng hong nhưng mòo anh iiuuu iemm :3"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
