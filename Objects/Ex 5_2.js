/*
	Examine the languages object. Three properties are strings, whereas one is a number.
	Use a for-in loop to print out print hello in the 3 different languages.
*/

var languages = {
	english: "Hello!",
	french: "Bonjour!",
	notALanguage: 4,
	spanish: "Hola!"
};

// print hello in the 3 different languages
for(var x in languages) {
	if(typeof languages[x] == "string") {
		console.log(languages[x]);
	}
}