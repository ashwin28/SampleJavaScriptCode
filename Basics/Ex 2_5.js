/*
	Write a program to ask yourself, using prompt, what the value of 2 + 2 is.
	If the answer is "4", use alert to say something praising. If it is "3" or "5",
	say "Almost!". In other cases, say something mean.
*/

var input = prompt("What is the value of 2 + 2 ?", "Enter answer here");

if (input == "4")
  alert("Your math skills are above average!");
else if (input == "3" || input == "5")
  alert("Almost!");
else
  alert("Why are you answering the simple question incorrectly?");