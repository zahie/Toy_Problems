// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var classMatesInfo = [
{"full name": "Hamza Alwan",	age : 20,	"favorite sports": "swiming", 	nationality: "Syrian"},
{"full name": "Shatha Sukkar",age : 24,	"favorite sports": "walking", 	nationality: "Syrian"},
{"full name": "Yussur Alani",	age : 26,	"favorite sports": "running", 	nationality: "Iraqi"},
{"full name": "Faris Arabi",	age : 25,	"favorite sports": "Ultimate", 	nationality: "jordanian"},
{"full name": "Raed Awwad",	age : 23,	"favorite sports": "foot ball", 	nationality: "jordanian"}
]

var mates = [];
function typeInfo (array) {
	for (var i = 0; i < array.length; i++) {
		 for (var item in array[i]) {
		 	mates.push(array[i][item]);
		 }

	}
	return mates;
}
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function oldestClassmate (array) {
	var oldest = array[0];
	for (var i = 0; i < array.length; i++) {
		//if (array[0] !== "") {
			if (oldest > array[i]){
				oldest = array[i];
			}
		}
	return oldest;
	
	}
}


// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

