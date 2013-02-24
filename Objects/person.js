/*
	Create a person object that has first name, last name and age. Include functions to get and
	set these public properties. Create a student object that inherits from person and has student
	number, institution and an array to store completed courses. Include functions to add courses,
	list all courses, return student number and institution.
*/

//creating person constructor
function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.getFirstName = function() {
		return this.firstName;
	};
	this.getLastName = function() {
		return this.lastName;
	};
	this.getAge = function() {
		return this.age;
	};
	this.setFirstName = function(firstName) {
		this.firstName = firstName;
	};
	this.setLastName = function(lastName) {
		this.lastName = lastName;
	};
	this.setAge = function(age) {
		this.age = age;
	};
}

//creating student constructor
function Student(studentNumber, institution) {
	this.studentNumber = studentNumber;
	this.institution = institution;
	this.getStudentNumber = function(firstName) {
		return this.studentNumber;
	};
	this.getInstitution = function(firstName) {
		return this.institution;
	};
	var completedCourses = new Array();
	this.addCourse = function(name) {
		completedCourses[completedCourses.length] = name;
	};
	this.listAllCourses = function() {
		for(var x in completedCourses)
			console.log(completedCourses[x]);
	};
}

//Student object inherits from Person 
Student.prototype = new Person();
