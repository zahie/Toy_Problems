	// 1-create a data model to represent some of your classmates
	var person1={
		name:"Ahmed",
		age:"25",
		class:"RBK",
		gender:"male"
	}
	var person2={
		name:"Beslan",
		age:"26",
		study:"RBK",
		gender:"male"
	}
	var person3={
		name:"Aymen",
		age:"27",
		study:"RBK",
		gender:"male"
	}
	var person4={
		name:"Tal",
		age:"23",
		study:"RBK",
		gender:"female"
	}
	var person5={
		name:"Livia",
		age:"29",
		study:"RBK",
		gender:"female"
	}
	// 	-think of different attributes of your classmates? what do all of them have ?
	//same study
	// 	-create a factory function.
	function  makeperson(name,age,study,gender){
		return{
			name:name,
			age:age,
			study:study,
			gender:gender
		}
	}
	// 	-create an array to hold the classmates that you have created.
	var classmates=[person1,person2,person3,person4,person5]

	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend(friend){
		return ' Name:' friend.name + '\n age '+friend.age+ '\n study '+friend.study
		}
	}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	function addFriend(mate){
		classmates.push(mate);
	}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	function nOfmale(classmate){
		var count=0;
		for (var i = classmate.length - 1; i >= 0; i--) {
			
				if(classmates[i].gender === "male"){
					count++
				
			}
		}
		return "number of males ="+count
	}
	// 	-Write a function searchMates that, given a query and an array of Mates,
	function (query,classmate){
		for (var i = classmates.length - 1; i >= 0; i--) {
			if (classmates[i].name === "query") {
				return displayFriend(classmates[i]);
			}
		}
	}
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
