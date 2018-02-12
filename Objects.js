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

function keys (obj){
	

}








// solution 1 
var obj1={ 
	fullName:'MaisMuhtaseb',                 
	age:31,
	favSpo:'racket',
	nationality:'jordanian',

};
var obj2={ 
	fullName:'Nada',
	age:32,
	favSpo:'football',
	nationality:'yameni',
};
var obj3={ 
	fullName:'SaraKoki',
	age:23,
	favSpo:'football',
	nationality:'syrian',
	

};
var obj4={ 
	fullName:'abdelhamed',
	age:28,
	favSpo:'football',
	nationality:'jordanian',
	

};
var obj5={ 
	fullName:'salsabeel',
	age:23,
	favSpo:'football',
	nationality:'jordanian',
	

};
var objArray=[obj1,obj2,obj3,obj4,obj5];

// solution 2 
function OldestAge(objArray){
	var max=objArray[0].age;
	for(var i=1;i<objArray.length;i++){
		if (max<objArray[i].age;){
			max=objArray[i].age;
		}
	}
	return max
}
//



















