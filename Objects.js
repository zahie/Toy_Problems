// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

var mates=[

var obj1={
	full name:"Ahmad yaqoba ",
	age :27,
	favorite sports:"football",
	nationality:"Jordanian" 
};
var obj2={
	full name :"Alik Alaqraa,"
	age :24,
	favorite sports:"swimming",
	nationality:"Jordanian" 
};
var obj3={
	full name :"Livia" ,
	age :28,
	favorite sports:"basketball",
	nationality:"Roman"
};
var obj4={
	full name :"Amira" ,
	age :23,
	favorite sports:"dancing",
	nationality:"syrian"
	}; 
var obj5={
	full name :"abdulatif" ,
	age :30,
	favorite sports:"runing",
	nationality:"syrian"

}
]


// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(obj){

for(var i=0;i<obj.length;i++){
	obj[i]=obj[i][age];
	if (obj[i][age]>obj[i])
}
}


// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

function nbOfObjKeys(obj){
	var object.nbOfObjKeys; 
}


// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

