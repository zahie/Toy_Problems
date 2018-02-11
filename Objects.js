// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

	    var classMate1 = { 
fullName: "firstName1 LastName1",
age: 20 ,
favSports: "football", 
natinality: "jordanian"
	    }

	    var classMate2 = { 
fullName: "firstName2 LastName2",
age: 40 ,
favSports: "basket ball", 
natinality: "syrian"
	    }

	    var classMate3 = { 
fullName: "firstName3 LastName3",
age: 25 ,
favSports: "MMA", 
natinality: "iraqi"
	    }

	    var classMate4 = { 
fullName: "firstName4 LastName4",
age: 28 ,
favSports: "tennis", 
natinality: "jordanian"
	    }

	    var classMate5 = { 
fullName: "firstName5 LastName5",
age: 30 ,
favSports: "football", 
natinality: "jordanian"
	    }

	    var mates=[classMate1 ,classMate2 , classMate3 , classMate4 , classMate5

function oldestMate() { 
var oldest = 0
for (var i = 0 ; i < mates.length ; i++) { 
if (mates[i].age > oldest ) { 
oldest = mates[i].age
 } else if (mates[i].age < oldest) { oldest = oldest}
}
return oldest
}


function nbOfObjKeys(obj) { 
count = 0 
for ( var key in obj ) { 
	count++

}
return count 
}


/*function sameLength(arr) {
var a = []

for (var i = 0 ; i < arr.length ; i++) { 
for (var o = 1 ; o < arr.length ; o++){
if ( arr[i].length = arr[o].length) {
a.push(arr[i])
} 
a = a 
}
}
return a
 }