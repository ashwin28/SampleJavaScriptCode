/*
	Create a function that takes an integer as an input and returns all prime numbers that occur before it.
	For example, 25 outputs {2, 3, 5, 7, 11, 13, 17, 19, 23}.
*/

function listAllPrimesBefore(n) {
	var result = "{";
	for(var i = 2; i < n; i++) {
		if(isPrime(i)) {
			result += (result.length == 1) ? "" : ",";
			result += i;
		}
	}
	
	return result + "}";
}


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
