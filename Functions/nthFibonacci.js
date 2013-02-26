/*
	Create a function that takes an integer input n and returns the nth fibonacci number.
	F(0) = 0, F(1) = 1, F(n) = F(n - 1) + F(n - 2) for n > 1.
*/

function nthFibonacci(n) {
	if(n == 0)
		return 0;
	else if(n == 1)
		return 1;
	
	var secondLast = 0;
	var last = 0;
	var current = 1;
	
	for(var i = 2; i <= n; i++) {
		secondLast = last;
		last = current;
		current = last + secondLast;
	}
	
	return current;
}