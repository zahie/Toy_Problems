// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	var mates = [
	{
		fullName: "Ahmed Mostafa",
		age: 22,
		favoriteSport: "Football",
		nationality: "Syrian"
	}, 
	{
		fullName: "Mohammad duraidy",
		age: 25,
		favoriteSport: "Running",
		nationality: "Syrian"
	},
	{
		fullName: "Abdullah Mohammadd",
		age: 27,
		favoriteSport: "Swimming",
		nationality: "Jordanian"
	},
	{
		fullName: "Hamza Alwan",
		age: 21,
		favoriteSport: "Running",
		nationality: "Basketball"
	},
	{
		fullName: "Ayman Ahmed",
		age: 29,
		favoriteSport: "Football",
		nationality: "Jordanian"
	}];

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older (array)
result = []
for(i = 0; i < array.length; i++){
	if(array[i].age > 22){
		result.push(array[i].fullName)
	}
}return result


// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

	 function NOK (obj){
	 	numKeys = 0
	 for (var key in obj){
	 	numKeys = numKeys + 1
	 }return numKeys
}
// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

function samelength (array){
	result = []
	
	for (i = 0; i < array.length; i++){
		if (array[i].length === )
			result.push(array[i])
	}
}






























