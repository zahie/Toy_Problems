	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

function makeClassMate(name, age, passion, favoriteFood, sex){
	return {
		name : name,
		age :age,
		passion : passion,
		favoriteFood : favoriteFood,
		sex : sex
	};
}

var classMate1 = makeClassMate('tarek', 22, 'social media', 'steak', 'male')
var classMate2 = makeClassMate('samer', 25, 'soccer', 'mansaf', 'male')
var classMate3 = makeClassMate('samar', 27, 'tv shows', 'pasta', 'female')
var classMate4 = makeClassMate('khaled', 30, 'politics', 'flafel', 'male')

var classMates = [classMate1, classMate2, classMate3, classMate4]

function displayFriend (obj) {
	return obj.name +', a ' + obj.age + ' ' + obj.sex + ', passionate about ' + obj.passion + ', and loves ' + obj.favoriteFood
}

function addFriend(obj) {
	classMates.push(obj)
	return 'Added'
}

function nbOfMale(arr) {
	var number = 0
	for(var i = 0; i < arr.length; i++){
		if(arr[i].sex === 'male')
			number++
	}
	return number
}

function searchMates(arr, query) {
	var str = ''
	for(var i = 0 ; i < arr.length; i++){
		if(displayFriend(arr[i]).indexOf(query.toLowerCase()) > 0 )
			str += arr[i].name + '\n'
	}
	return str
}