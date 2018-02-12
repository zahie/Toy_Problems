	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?//
	// 	-create a factory function.//
	// 	-create an array to hold the classmates that you have created.//
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.??
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

function classMates (name, age, location, weight, race, sex){
	return {
		Name: name,
		Age: age,
		Location: location,
		Weight: weight,
		Race: race,
		Sex: sex
	
	};

}

var mate1 = {Name: 'John', Age: 22, Location: 'England', Weight: 88, Race: 'White', Sex: 'Male'}
var mate2 = {Name: 'Tom', Age: 42, Location: 'London', Weight: 75, Race: 'White', Sex: 'Male'}
var mate3 = {Name: 'Isabelle', Age: 25, Location: 'Spain', Weight: 55, Race: 'Hispanic', Sex: 'Female'}

var mateArray = [mate1, mate2, mate3]


function displayFriends(mate){
	for (var i = 0; i < mateArray.length; i++) { //iterates along the var(s)
		mateArray[i]

		return Name[i] + ' ' + Age[i] + ' ' + Location[i]; // returns mate# with specified parameters
	}
	//repeat interation
}

function addFriends(){
// must use .push to add (ex mate 4) to array of friends
}

