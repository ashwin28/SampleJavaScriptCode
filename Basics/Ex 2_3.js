//Print out ten lines. On the first line there is one '#' character. On the second there are two. And so on.

var result = "";
var currentLine = "";

for(var repeat = 0 ; repeat < 10; repeat++) {			
	currentLine = currentLine + "#";
	result +=  currentLine + "\n";
}

alert(result);