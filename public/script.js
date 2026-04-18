/**
 * 
 */
let x = 5;
let y = 10;
let z = x + y;
let age; 

const button = document.getElementById('myButton');
button.addEventListener("click", function() {
	age = prompt("How old are you?");
	
	if (age < 18) {
		alert("You are not old enough!");
	} else {
		alert("You are old enough to visit the page!");
	}
});

let firstName = "Kenneth";

document.getElementById('username').innerHTML = "Hello, " + firstName;
document.getElementById('addition').innerHTML = x + " + " + y + " = " + z;