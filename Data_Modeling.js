	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
/
var classmate1 = {name: "Hamza",	age: 20,	last: "Alwan" }
var classmate2 = {name: "Shatha",age: 24,	last: "Sukkar" }
var classmate3 = {name: "Yussur",age: 26,	last: "Alani" }
var classmate4 = {name: "Faris",	age: 25,	last: "Arabi" }
var classmate5 = {name: "Raed",	age: 23,	last: "Awwad" }

function classmatesInfo (name, age, last) {
	return {
	name: name,
	age: age,
	last: last,
	}
}

var classmate1 = classmatesInfo ("Hamza", 20, "Alwan")
var classmate2 = classmatesInfo ("Shatha", 20, "Sukkar")
var classmate3 = classmatesInfo ("Yussur", 20, "Alani")
var classmate4 = classmatesInfo ("Faris", 20, "Arabi")
var classmate5 = classmatesInfo ("Raed", 20, "Awwad")


var mates = [classmate1, classmate2, classmate3, classmate4, classmate5]


function displayFriend (mate) {
	var display = "";
	for (var i = 0; mate.length; i ++) {
		display = display + "i+1" + " -" + mate[i]['name'] + " " + mate[i]['last'] + "\n";
		 
	}
	return display;
}

