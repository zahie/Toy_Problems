	// 1-create a data model to represent some of your classmates
		var classmate1={firstName:"omar",
						lastName:"haleel",
						gender:"male",
						age: 23
	}
		var classmate2={firstName:"ahmad",
						lastName:"ramez",
						gender:"male",
						age: 25	
	}

		var classmate3={firstName:"sara",
						lastName:"hadi",
						gender:"female",
						age:26

		}
	// 	-think of different attributes of your classmates? what do all of them have ?
		var diffAttributes={nationality:"jordanian",
							drivingLicense: "Yes"
}
	// 	-create a factory function.
	function classMates(firstName,lastName,gender,age,nationality,drivingLicense){
		return {firstName:firstName,
				lastName: lastName,
				gender: gender,
				age:age,
				nationality: nationality,
				drivingLicense: drivingLicense
		}
	}

	// 	-create an array to hold the classmates that you have created.
	var classMatesArr=[classmate1,classmate2,classmate3];

	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend(mate){
		return mate.firstName + ' ' + mate.lastName;
		}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	function addFriend(mate){
			return classMatesArr.push(mate);
	}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	function nbOfMale(mate){
		var male=""
		var numofMales=1;
		for (var key in classMatesArr){
			if(classMatesArr[key]==="male"){
					male=male+numofMales;
					numofMales++;
			}

		}
		return male;
	}
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

   