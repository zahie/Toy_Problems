// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	// nbOfObjKeys({}) // ==> 0
	// nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	//    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

//Q1 :

var mate1 = {
	fullName: " alk essa alakraa",
	age: 27,
	favoriteSport: "football",
	nationality: "Jordainan"
};

var mate2 = {
	fullName: " Tal Alomary",
	age: 27,
	favoriteSport: "football",
	nationality: "Jordainan"
};
var mate3 = {
	fullName: "Ammar Hourani",
	age: 26,
	favoriteSport: "football",
	nationality: "Jordainan"
};
var mate4 = {
	fullName: "Hussam joudeh",
	age: 24,
	favoriteSport: "football",
	nationality: "Jordainan"
};
var mate5 = {
	fullName: "Abdulhameed",
	age: 29,
	favoriteSport: "football",
	nationality: "Jordainan"
};

var mates = [mate1,mate2,mate3,mate4,mate5];


// Question 2 :
function olderMate(arr) {
	var older = arr[0].age ;
	for (var i = 0 ; i < arr.length ; i++){
		if ( older < arr[i].age){
			older = arr[i].age;
		}
	}
	return older;
}

//Question 3 :

function nbOfObjKeys(obj){
	var arrayOfKeys = Object.keys(obj) ;
	return arrayOfKeys.length;
}


//Question 4 :
function sameLength (arr){
	var elementLength = 0;
	var result = [];
	for (var i = 0; i < arr.length ; i++){
		elementLength = arr[i].length
		for (var j = i+1 ; j < arr.length ; j++)
			if (arr[j].length === elementLength){
				result.push(arr[i])
				result.push(arr[j])
			}
	}
	return result;
}