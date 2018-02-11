// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	var person1={
		fullname:"Abdulhameed Abdullah",
		age:28,
		favoriteSport:"Karate",
		nationality: "Syrian"
	}
	var person2={
		fullname:"salsabeel",
		age:24,
		favoriteSport:"Karate",
		nationality: "Jordanian"
	}
	var person3={
		fullname:"Dareen ",
		age:26,
		favoriteSport:"programming",
		nationality: "Jordanian"
	}
	var person4={
		fullname:"Atheer",
		age:35,
		favoriteSport:"some play with flying dish ^__^",
		nationality: "Iraq"
	}
	var person5={
		fullname:"Livia",
		age:29,
		favoriteSport:"playing with kids",
		nationality: "Romania"
	}

	var mates=[];

	mates.push(person1)
	mates.push(person2)
	mates.push(person3)
	mates.push(person4)
	mates.push(person5)


// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function olderClassmate(obj){
	var older=mates[0][1]
	for (var i = mates.length - 1; i >= 0; i--) {
		for (var key in obj) {
			if(key === "age"){
				if(obj[key]>older)
					older=abj[key]
			}
		}
		
	}
}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
function nbOfObjKeys(obj){
	var count=0
	for(var key in obj){
		count++;
	}
	return count;
}
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

