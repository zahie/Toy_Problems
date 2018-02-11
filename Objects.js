// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
  

	var mates =[
	{
		fullName:"Abdullatif M.Walid Jamous",
		age:28,
		favouritSport:"Tennis",
		nationality:"Syrian"
	},
	{
		fullName:"Sarah Koki",
		age:24,
		favouritSport:"swimming",
		nationality:"Syrian"
	},
	{
		fullName:"Bayan Asaad",
		age:20,
		favouritSport:"Football",
		nationality:"Syrian"
	},
	{
		fullName:"Ayman Mohammed",
		age:30,
		favouritSport:"running",
		nationality:"Jordanian"
	},
	{
		fullName:"Tal Alomary",
		age:24,
		favouritSport:"swimming",
		nationality:"Jordanian"
	}]
	

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

function olderPerson(arr){
	var older = arr[0]['age']
	var index = 0
	var newObj = {}
	for(var i=1; i<arr.length; i++){
		if(arr[i]['age']>older){
			older = arr[i]['age']
			index = i
		}
	}
	return arr[index]

}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

// some change here