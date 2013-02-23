/*
	Create a person constructor called Person that has two properties (name and age). Create an empty array called family.
	There will be four objects in the array. Using your Person constructor, create the four objects and put them in the array.
	The order of the objects are: {"alice",40}, {"bob", 42}, {"michelle", 8}, {"timmy", 6}
	Create a for-loop that loops through the family array and prints out the name property for each family member in order of creation.
*/

//creating constructor
function Person(name, age) {
	this.name = name;
	this.age = age;
}

//creating and filling family array
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// looping through array and printing names
for(var x in family)
	console.log(family[x].name);