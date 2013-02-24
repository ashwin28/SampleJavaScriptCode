/*
	Create a function that takes a number as an input and returns true if it is a prime number and false otherwise.
*/

function isPrime(number) {
	
	//2 is the only even prime
	if(number == 2)
		return true;
	else if(number % 2 == 0)
		return false;
	
	var loopLimit = Number(Math.sqrt(number).toFixed(0)) + 1;
	for(var i = 3; i < loopLimit; i += 2) {
		if(number % i == 0)
			return false;
	}
	
	return true;
}