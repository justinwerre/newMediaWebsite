window.onload = function(){
	document.onkeypress = split;
}

function split(event){
	if("1" == event.key || "3" == event.key){
		document.getElementById("next-split").click();
	}else if("2" == event.key){
		document.getElementById("prev-split").click();
	}else if("4" == event.key){
		document.getElementById("home").click();
	}
}