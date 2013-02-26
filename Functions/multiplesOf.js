/*
	Create a function that takes two integer arguments, x and n, and 
	returns the sum of all multiples of x in the first n natural numbers.
*/

function multiplesOf(x, n) {
	if( x > n)
		return;

	//the formula for the sum of an arithmetic series is:
	//Sn = (n * (a1 + an))/2
	//this is an arithmetic series with a common difference of x
	return (Math.floor(n / x) * (x + (Math.floor(n / x) * x))) / 2;
}