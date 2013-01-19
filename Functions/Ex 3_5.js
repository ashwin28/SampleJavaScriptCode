/*
	Write a function called creditCheck that takes the parameter income.
	Inside the function, write an if statement where if the income is greater than or equal to 100,
	use console.log to print out "You earn a lot of money! You qualify for a credit card."
	If the income is less than 100, have the computer print out 
	"Alas you do not qualify for a credit card. Capitalism is cruel like that."
*/

function creditCheck(income) {
	if(income >= 100)
		console.log("You earn a lot of money! You qualify for a credit card.");
	else
		console.log("Alas you do not qualify for a credit card. Capitalism is cruel like that.");
}