	// 1-create a data model to represent some of your classmates 
	// 	-think of different attributes of your classmates? what do all of them have ? // done 
	// 	-create a factory function. // done
	// 	-create an array to hold the classmates that you have created. // done
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way. // done
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.// done
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale. // Done
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
// information that i want yo use :  names , gender , age, hight(in cm) , wight (in kg)

function creatMate(name, gender, age, hight, wight){
	return {
		name: name,
		gender: gender,
		age: age,
		hight: hight,
		wight: wight
	};
}

var mate1 = creatMate("Ammar Hourani","Male",25,176,75);
var mate2 = creatMate("Tal Alomary","Female",26,164,60);
var mate3 = creatMate("Hussam aljoudeh","Male",24,167,65);

var classMates = [mate1,mate2,mate3];

function displayFriend(obj){
	return "Mate name : " + obj.name + ", Age : " + obj.age ;
}

function addFriend(mate){
	classMates.push(mate);
	return "New class mate added successfully ";
}

function nbOfMale(classMates) {
	var count = 0;
	for (var i = 0 ; i < classMates.length ; i++){
		if (classMates[i].gender === "Male"){
			count++ ;
		}
	}
	return "Number of male freinds = "+count+" .";
}

function MatchName(nameToSearch, obj){
	var searchName = nameToSearch.toLowerCase();
	var objName = obj.name.toLowerCase();
	var length = nameToSearch.length ;
	for ( var i = 0 ; i < objName.length ; i++ ){
		if (objName.substr(i,length) === searchName) {
			return true;
		}
	}		
	return false ;
}

function searchMates(nameToSearch, array){
	var result = [];
	for ( var i = 0 ; i < array.length ; i++){
		if (MatchName(nameToSearch,array[i]) === true){
			result.push(array[i]);
		}
	}
	return result;
}