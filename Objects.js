// 1-define objects for 5 of your classmater containing the following keys:
var person={
	fullName:"sara koki", age:23, favoritSport:"swimming",nationality:"syrian",
	fullName:"abdullatif", age:28, favoritSport:"tennis",nationality:"jordanian",
	fullName:"bayan", age:21, favoritSport:"football",nationality:"syrian",
	fullName:"belal faouri", age:25, favoritSport:"walking",nationality:"jordanian",
	fullName:"waed alshayyab", age:28, favoritSport:"swimming",nationality:"jordanian"
}

	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function olader()
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:23})
	 var result=0
	 function nbOfObjKeys(objects){
	for(var key in nbOfObjKeys){
		return key +1
	}
	 return result ;
	 }

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]
		function sameLength(str){
			var str=[]
			var i = 0
			if (str.length[i]===str.length[i+1]){
				return str[i] + str[i+1]
			} return str
		} 