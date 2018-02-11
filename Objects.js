// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

var amr = {
	fullName : {first :'amr', last : 'droubi'},
	age : 27,
	favoriteSport : 'basket ball'
	nationality : 'syrian'
}

var waleed = {
	fullName : {first :'waleed', last : 'raslan'},
	age : 26,
	favoriteSport : 'gym'
	nationality : 'syrian'
}

var fareed = {
	fullName : {first :'fareed', last : 'hisham'},
	age : 25,
	favoriteSport : 'table tennis'
	nationality : 'jordanian'
}

var anas = {
	fullName : {first :'anas', last : 'kalash'},
	age : 25,
	favoriteSport : 'soccer'
	nationality : 'syrian'
}

var owais = {
	fullName : {first :'owais', last : 'daboul'},
	age : 20,
	favoriteSport : 'running'
	nationality : 'syrian'
}

var mates = []
mates.push(owais)
mates.push(fareed)
mates.push(anas)
mates.push(waleed)
mates.push(amr)

mates

function older(arr) {
	var older = arr[0].age
	var c = 1
	while(c < arr.length) {
		if (arr[c].age > older)
			older = arr[c].age
		c++
	}
	return older
}

older(mates)

function numberOfObjKeys(obj) {
	return Object.keys(obj).length
}

