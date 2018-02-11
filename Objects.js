// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var myClassMater={
	first:{
		fullName:
		{
			first: 'monther',
			last:'amer',
		},
		age:27,
		favoriteSports: "football",
		nationality:'palastinian',
	},
	second:{
		fullName:
		{
			first: 'mohammad',
			last:'Al-refaee',
		},
		age:24,
		favoriteSports:"bascketball",
		nationality:'syrian',
	},
	third:{
		fullName:
		{
			first: 'fares',
			last:'frehat',
		},
		age:26,
		favoriteSports:"walking",
		nationality:'jordanian',
	},
	fourth:{
		fullName:
		{
			first: 'hamza',
			last:'alwan',
		},
		age:20,
		favoriteSports:"running",
		nationality:'syrian',
	},
	fifth:{
		fullName:
		{
			first: 'ayman',
			last:'ghieth'
		},
		age:30,
		favoriteSports:"football",
		nationality:'jordanian',
	}

}


var mates=[myClassMater.first,myClassMater.second,myClassMater.third,myClassMater.fourth,myClassMater.fifth];

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

function older(arr){
	 var old=0;
	for (var i = 0; i === arr.length - 1; i++) {
		for (var key in arr[i]){
		old =old+arr[i].key.age;
		}
		
	}return old;
	}


// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 //nbOfObjKeys({}) // ==> 0
	 //nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

