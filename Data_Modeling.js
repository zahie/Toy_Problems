	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	var classMate1 = {
		name: "Ahmad",
		age: 22,
		favoriteSport: "Football",
		gender: "Male"
	}
	var classMate2 = {
		name: "Abdullah",
		age: 27,
		favoriteSport: "Basketball",
		gender: "Male"
	}
	var classMate3 = {
		name: "Nader",
		age: 23,
		favoriteSport: "Table Tennis",
		gender: "Male"
	}
	var classMate4 = {
		name: "Hanan",
		age: 24,
		favoriteSport: "walking",
		gender: "Female"
	}
	// 	-create a factory function.
	function factory (obj){
		return "His/Her Name is " + obj.name + ", his/her age is " + obj.age + ", his/her favorite sport is " + obj.favoriteSport+ ", and his/her gender is " + obj.gender +"." 
	}
	// 	-create an array to hold the classmates that you have created.
	var classMates = [classMate1, classMate2, classMate3, classMate4]

	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend (mate){
		return factory(mate)
	} 
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	function addFriend (Name, Age, Favoritesport, Gender){
		return {
		name: Name,
		age: Age,
		favoriteSport: Favoritesport,
		gender: Gender
	}}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	function nbOfMale (arr){
		number = 0
		for (i = 0; i < arr.length; i++){
			for (var key in arr[i]){
				if (arr[i][key] !== "Male"){
					delete arr[i][key]
				}

			}number = number + 1
	}return number
}
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
	function searchMates (query, arr){
		for (i = 0; i < arr.length; i++){
			for (var key in arr[i]){
				if (arr[i][key] === query){
					return "Match this Classmate " + arr[i]
				}
			}
	}return "Does not math any mate."
}
