// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

var frinds =[
             {name:'abdallah', age:25, vafSports:'football', nationality:'jordinan'} ,
             {name:'slasabel', age:23, vafSports:'run', nationality:'jordinan'}, 
             {name:'ahmad', age:20, vafSports:'basketball', nationality:'jordinan'} ,
             {name:'khadija', age:19, vafSports:'dance', nationality:'jordinan'},
             {name:'hussin', age:30, vafSports:'football', nationality:'jordinan'} 
             ];



// 2-depending on the previous exercises , write a function that returns the older classmate from mates array./

frinds[4]; 

// 3-write a function that takes an object as argument and returns how many keys does that object contain.

function  nbOfObjKeys(ky){
var k ={};
if (ky===k){
	return 0;

}
if (ky>k){
 return (ky.length);
}
}

	// nbOfObjKeys({}) // ==> 0//
	// nbOfObjKeys({name:"housam",age:"3"}) // ==> 2//

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    //['hi','hello','welcome','hy'] // ==> ["hi","hy"]


function length(array){
var r=0;
if (array[r].length===array[r+1].length){
	return (array[r].length +','+ array[r+1].length);
}

}











