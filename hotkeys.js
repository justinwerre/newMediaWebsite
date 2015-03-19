window.onload = function(){
	document.onkeypress = split;
}

function split(event){
	var key = event.keyCode || event.which;
	
	if(49 == key || 51 == key){
		document.getElementById("next-split").click();
	}else if(50 == key){
		document.getElementById("prev-split").click();
	}else if(52 == key){
		document.getElementById("home").click();
	}
}