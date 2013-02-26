/*
	The majority element of an array is the element that occurs more than n/2 times in that array.
	Create a function that takes an integer array as an input and outputs the majority element if it exists or -1 otherwisae.

	Example:
	Input : 3 3 4 2 4 4 2 4 4 
	Output : 4 

	Input : 3 3 4 2 4 4 2 4 
	Output : -1
*/

function majorityElement(array) {
	var count = 0;
	var candidate = 0;
	
	for(var x in array) {
		if(count == 0)
			candidate = array[x];
		//If there is a majority element, worst case n/2 elements will result in count--
		//and the remaining element will be the best candidate
		if(candidate == array[x])
			count++;
		else
			count--;
	}
	
	count = 0;
	
	for(var x in array) {
		if(candidate == array[x])
			count++;
	}
	
	if(count > Math.floor(array.length / 2))
		return candidate;
	else
		return -1;
}
