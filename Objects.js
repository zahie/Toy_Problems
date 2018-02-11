// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var hanan = {
	"full name": "Hanan Nouman",
	age: 24,
	"favorite sports": "swimming",
	"nationality": "Palestinian"
};
var nada = {
	"full name": "Nada Hussian",
	age: 34,
	"favorite sports": "runing",
	"nationality": "Yemenian"
};
var muna = {
	"full name": "Hanan Nouman",
	age: 27,
	"favorite sports": "skiing",
	"nationality": "Yemenian"
};
var farah = {
	"full name": "Farah Hasan",
	age: 22,
	"favorite sports": "texting",
	"nationality": "Jordanian"
};
var roba = {
	"full name": "Roba Taha",
	age: 23,
	"favorite sports": "jogging",
	"nationality": "Palestinian"
};
var mates = [hanan,nada,muna,farah,roba];
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(array){
	var max = 0;
	var olderst = {};
	for (var i=0; i<array.length; i++){
		if(array[i]["age"] > max){
			max= array[i]["age"];
			oldest = array[i];
		}
	}
	return oldest;		
}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2
	 function nbOfObjKeys(obj){
	 	var i=0;
	 	for (var key in obj){
	 		i++;
	 	}
	 	return i;
	 } 

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]
function sameLength(array){
	var arr =[];
	    for (var i=0; i< array.length; i++){
	    	for (var c=0; c< array.length; c++){
	    		if (array[i].length=== array[c].length && i !== c){
	    			arr.push(array[i]);
	    		}
	    	}			
	    }
	    return arr;            
}
