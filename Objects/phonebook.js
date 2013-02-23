/*
	In this exercise, create an array called contacts to store objects that have first name, last name and phone number.
	Have functions to print contact list all contacts, search contacts by last name, add contacts and delete contacts by last name.
*/

var contacts = new Array();

function addContact(firstName, lastName, phoneNumber) {
	contacts[contacts.length] = {
    	firstName: firstName,
    	lastName: lastName,
    	phoneNumber: phoneNumber
	};
}

function printContact(contact) {
	console.log(contact.firstName + " " + contact.lastName + ", #:" + contact.phoneNumber)
}

function listAllContacts() {
	for(var x in contacts)
		printContact(contacts[x]);
}

function search(lastName) {
	for(var x in contacts){
		if(contacts[x].lastName === lastName)
			printContact(contacts[x]);
	}
}

function deleteContact(lastName) {
	for(var x in contacts){
		if(contacts[x].lastName === lastName) {
			contacts.splice(x, 1);
			return;
		}
	}	
}

