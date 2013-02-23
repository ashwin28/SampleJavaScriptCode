/*
	In this exercise, we will be simulating a virtual cash register. Create a new object called cashRegister
	with the properties total and lastTransactionAmount initialized to 0. Include an add method which has a 
	single parameter, itemCost. It will add the itemCost to the total. Include a scan method which takes two 
	parameters, item and quantity, and adds the appropriate amount to total. Add a method called voidLastTransaction
	that subtracts the last amount transacted from total. Create an object constructor called StaffMember which
	takes two parameters, name and discountPercent, and then have the properties name and discountPercent equal
	the parameters. Create a new method called applyStaffDiscount which accepts a parameter employee and applies
	the staff member's discountPercent to total.
*/

//creating StaffMember to hold employee and their given discount
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

//creating the main object
var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
	//creating scan and adding some default items
    scan: function(item,quantity){
        switch (item){
        case "eggs":
			this.add(0.98 * quantity);
			break;
        case "milk":
			this.add(1.23 * quantity);
			break;
        case "magazine":
			this.add(4.99 * quantity);
			break;
        case "chocolate":
			this.add(0.45 * quantity);
			break;
        }
        return true;
    },
	//to delete previous transaction
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    //creating applyStaffDiscount
    applyStaffDiscount: function(employee) {
    	this.total *= (100 - employee.discountPercent) / 100;
    }
};

//sample run
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

var me = new StaffMember("Ashwin", 20);
cashRegister.applyStaffDiscount(me);

//Printing the bill
console.log("Your bill is $" + cashRegister.total.toFixed(2));