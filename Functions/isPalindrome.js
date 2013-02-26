/*
	Create a function that takes a String as an input and returns true if it is a palindrome and false otherwise.
*/

function isPalindrome(input) {
	if(input.length == 1)
		return true;
	
	var reverse = "";
	
	for(var i = input.length - 1; i >= 0; i--)
		reverse += input.charAt(i)
	
	if(input == reverse)
		return true;
	else
		return false;
}