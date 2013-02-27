/*
	Create a function that takes two Strings as arguments and returns true if they are anagrams and false otherwise.
*/

function isAnagram(word1, word2) {
	return word1.split("").sort().join("") === word2.split("").sort().join("");
}
