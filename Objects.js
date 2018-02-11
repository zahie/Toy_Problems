// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!




	 var Mates=[
	{fullname:"sara",age:25,favoriteSports:"tennis",nationality:"jordanian"},
	{fullname:"Nour", age:32, favoriteSports:"swimming",nationality:"Syrian"},
	{fullname:"Saja",age:23 ,favoriteSports:"dancing", nationality:"jordanian"},
	{fullname:"Reem" ,age:23 ,favoriteSports:"eating", nationality:"jordanian"},
	{fullname:"Eman",age:22 ,favoriteSports:"Dancing",nationality:"Syrian"} ]

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

function olderClassmate (arr){
	var older=Mates[0].age
	var i=0

	while (i<arr.length){
		
		if (Mates[i].age>older){
			older=Mates[i].age
		}
		i=i+1
	}
return older;
}



  /*var MatesValues = [];

    for(var nader in person2){
        person2Values.push(person2[nader])
    }

    return person2Values;*/


// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 //nbOfObjKeys({}) // ==> 0
	 //nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

	 function length(nbOfObjKeys) {
 var mValues = [];

    for(var nader in nbOfObjKeys){
        mValues.push(nbOfObjKeys[nader])
    }

    return mValues.length;
}

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

function sameLength (array) {
	var i=0
	var res=[]
	while (i<array.length){
     i=i+1
if (array[i].length===str.length[i]){
     res=res.push(array[i])
     }
	}
return res
}



