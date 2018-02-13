	// 1-create a data model to represent some of your classmates
	// 	_/-think of different attributes of your classmates? what do all of them have ?
	// 	_/-create a factory function.
	// 	_/-create an array to hold the classmates that you have created.
	// 	_/-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	_/-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	_/-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.


	// 	_/-create a factory function.
function matesFactory(name,age,gender,nationality){
	return {
		name:name,
		age:age,
		gender:gender,
		nationality:nationality
	}
}


	// 	-create an array to hold the classmates that you have created.
var classmates=[];


	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mateObj){
	return "Mate Name: "+mateObj.name+", age: "+ mateObj.age+ ", Nationality: "+ mateObj.nationality+".";
}

	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
function addFriend(mateObj){
	return "Number of mates: "+classmates.push(mateObj);
}

	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(matesArray){
	var result=0;
	for (var i = 0; i < matesArray.length; i++) {
		if (matesArray[i].gender==="male"){
			result++
		}
	}
	return "Number of Male mates is:"+ result;
}

	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
function searchMates(query,matesArray){
	for (var i = 0; i < matesArray.length; i++) {
		if (matesArray[i].name.toLowerCase()===query.toLowerCase()){
			return "We found the mate you are asking for:\n"+displayFriend(matesArray[i]);
		}
	}
	return "Sorry we did not found the mate you are asking for, you can add the mate by invoking this addFriend(matesFactory(name,age,gender,nationality))"
}