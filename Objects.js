// 1-define objects for 5 of your classmater containing the following keys:
	var mates = [{
	fullName: Livia Nistor,
	age: 28,
	favorite sports: hiking,
	nationality: Romanian
	};
	{
	fullName: Alik Alaqra,
	age: 24,
	favorite sports: footbal,
	nationality: Jordanian
	};
	{
	fullName: Hanan Nouman,
	age: 24,
	favorite sports: yoga,
	nationality: Jordanian
	};
	{
	fullName: Shatha Sukkar,
	age: 28,
	favorite sports: volleyball,
	nationality: Syrian
	};
	{
	fullName: Ayman Ghaith,
	age: 29,
	favorite sports: carting,
	nationality: Jordanian
	}
	];

	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function olderMate(mate,age){
	var x=age;
	var arr=[];
	

	for(var i = 0; i < mates.length; i++ ){
		if(x<mates[i].age){
			arr.push(mates[i].fullName;
		}
		return arr; 
	}
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2



// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

