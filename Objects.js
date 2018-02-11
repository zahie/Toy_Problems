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


//1
var obj1={
	fullName:{
		firstName:"Ahmad",
		lastName:"zoubi"
	},
	age:22,
	favSports:["football","pingbong"],
	nationality:"syrian"
};
var obj2={
	fullName:{
		firstName:"livia",
		lastName:"netsor"
	},
	age:25,
	favSports:["walking"],
	nationality:"romanian"
};
var obj3={
	fullName:{
		firstName:"abdullatif",
		lastName:"jamous"
	},
	age:28,
	favSports:["football","pingbong"],
	nationality:"syrian"
};
var obj4={
	fullName:{
		firstName:"Abdulhameed",
		lastName:"abdulla"
	},
	age:28,
	favSports:["football","pingbong","badmenton"],
	nationality:"syrian"
};
var obj5={
	fullName:{
		firstName:"Atheer",
		lastName:"Mahmoud"
	},
	age:30,
	favSports:["ultimate"],
	nationality:"Iraqi"
};

var mates=[];
mates.push(obj1,obj2,obj3,obj4,obj5);


//2
function getTheOlder(matesArray){
	var theOlder={};
	var maxAge=0;
	for(var i=0;i<matesArray.length;i++){
		if (matesArray[i].age>maxAge){
			maxAge=matesArray[i].age;
			theOlder=matesArray[i];
		};
	}
	return theOlder;
}


//3
function getNumOfKeys(obj){
	var count=0;
	for(var key in obj){
		count++
	}
	return count;
}

//4


//['hi','hello','welcome','hy']

function arrayOfSameLength(array){
	var result=[];
	for(var entry in array){
		for (var otherEntry in array){
			if(entry===otherEntry){
				continue;
			}
			var count=0
			for (var resultentry in result){
				if (result[resultentry].length===array[entry].length){
					count++;
					break;
				}
			}
			if (count===0){
				if (array[otherEntry].length===array[entry].length) {
					result.push(array[entry]);
				}
				
			}		
		}
	}
	return result;
}