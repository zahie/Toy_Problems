// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var abdallah={full_name:"abdallah",age:23,favorite_sports:"basketball",nationality:"jordnian"}
var shafaa={full_name:"shafaa almostafa",age:17,favorite_sports:"football",nationality:"syrian"}
var fatama={full_name:"fatama almostafa",age:22,favorite_sports:"football",nationality:"syrian"}
var samer={full_name:"samer salmeh",age:25,favorite_sports:"swimming",nationality:"syrian"}
var mansoor={full_name:"mansoor",age:28,favorite_sports:"football",nationality:"syrian"}
	var mates=[];

function d(n){
	
		mates.push(n);
	
}
d(samer);
d(shafaa);
d(fatama);
d(abdallah);
d(mansoor);



// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function oldest(n){
	var older=n[0].age;
	for (var i = 0; i < n.length; i++) {
		if(older<n[i].age){
			older=n[i].age
		}
	}
	return older;
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 // nbOfObjKeys({}) // ==> 0
	// nbOfObjKeys({name:"housam",age:"3"}) // ==> 2
function Key_Number(n){
	var result=0
	for (var key in n ){
		result++;
	}
	return result;
}
// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	   // ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

function same(n){
	var d=n[0].length;
	for (var i = 0; i < n.length; i++) {
		if(d!==n[i].length){
	delete n[i];
		}
	}return n;
}
