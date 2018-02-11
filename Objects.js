// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!


	var mates = [

	{
		fullName : "Abdulla", age : 20, favSport: "Basketball", nationality:"Jordanian"
	},

	{
		fullName : "Salsabeel", age : 22, favSport: "Walking", nationality:"Jordanian"
	},

	{
		fullName : "Atheer", age : 31, favSport: "frusbii", nationality:"Iraqian"
	},

	{
		fullName : "Shefaa", age : 35, favSport: "reading", nationality:"Syrian"
	},

	{
		fullName : "Dareen", age : 29, favSport: "biking", nationality:"Jordanian"
	}


	];


// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

function older(obj){

	var newObj = {};
	var max = obj[0].age;
	for(var key in obj){
		if(max > obj[key].age){
			max = max;
		}
		else{
			max = obj[key].age;
		}
	}
	return "The Max Age is : " + max;
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2


	 function nbOfObjKeys(obj){
	 	var count = 0;
	 	var arr = [];
	 	for (var key in obj){
	 		arr.push(key);
	 	}
	 	var x = arr.length
	 	return x;

	 }


// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    // ['hi','hello','welcome','hy'] // ==> ["hi","hy"]


	    function stringsLength(arr){

	    	var temp = [];
	    	var arrLength = arr.length-1;

	    	for(var key in arr){
	    		// console.log(arr[key].length);
	    		if(arr[key].length === arr[arrLength].length ){
	    			temp.push(arr[key]);
	    		}

	    	}
	    	return temp;


	    }
