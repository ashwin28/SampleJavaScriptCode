//write a program that calculates and shows the value of 2^10 (2 to the 10th power).

var answer = 1;
for(var count = 0; count < 10; count++)
	answer *= 2;

alert("2 ^ 10 = " + answer);