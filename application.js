function printTrueFalse() {
	var numberOne = document.getElementById ("numberOne");
	var numberTwo = document.getElementById ("numberTwo");
	var output = document.getElementById ("place");
	
	if(numberOne.value >= numberTwo.value){ 
		output.innerHTML += "True"; 
	} else {
		output.innerHTML += "False"; 
	}	
}	

function printTrueOrFalse() {
	var numberOne = document.getElementById ("numberOne");
	var numberTwo = document.getElementById ("numberTwo");
	var output = document.getElementById ("place");
	
	if(numberOne.value <= numberTwo.value){ 
		output.innerHTML += "True"; 
	} else {
		output.innerHTML += "False"; 
	}	
}
