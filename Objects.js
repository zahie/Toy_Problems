// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	mates=[
		{
		fullname: "bushra al absi",
		age: 24,
		favoritesport: "running",
		nationality: "jordanian"},
		{
		fullname: "bayan",
		age: 20,
		favoritesport: "tennis",
		nationality: "syrian"},
		{
		fullname: "hamze",
		age: 20,
		favoritesport: "football",
		nationality: "syrian"},
		{
		fullname: "atheer",
		age: 30,
		favoritesport: "fretzie",
		nationality: "jordanian"},
		{
		fullname: "mona",
		age: 27,
		favoritesport: "ping pong",
		nationality: "yemeni"}]


// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(array){
var age1=0;
var result;
for (var i=0; i< array.length ;i++){
	if (array[i].age>age1){
		age1=array[i].age;
		result=array[i];
	}}

return result ;

}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2
	 
	 function nbOfObjKeys(obj){
	 	var sum=0;
	 	for ( var key in obj){
	 		sum++;
	 	}
	 	return sum;
	 }

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]
	    function samelength(array){
	    	var array1=[];
	    	for (var i=0 ; i< array.length; i++){
	    		var j=i+1;
	    		if (array[i]!=""){
	    		for (j=i+1;j<array.length;j++){
	    			if (array[i].length==array[j].length){
	    				array1.push(array[j])
	    				array[j]="";
	    				j++;
	    				array1.push(array[i]);}}}
	    			}
	    			return array1;}//hanannouman

	    			
	    	
	    

