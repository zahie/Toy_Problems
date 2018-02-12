	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.

	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.

	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.

	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

var classmates1 = {
	Name : "Ayman",
	Age: 30,
	Nationality:"Jordanian",
	work:"student in RBK"
	gender:"male"
}

var classmates2 = {
	Name : "sarah",
	Age: 20,
	Nationality:"Jordanian",
	work:"student in RBK"
	gender:"female"
}

var classmates3 = {
	Name : "Hamzeh",
	Age: 22,
	Nationality:"Syrian",
	work:"student in RBK"
	gender:"male"
}

function makeClassmate(Name1,Age1,Nationality1,work1,gender1){
	Name : Name1,
	Age: Age1,
	Nationality:Nationality1,
	work:work1
	gender:gender1
}

var arrClassmates = [classmates1,classmates2,classmates3];

function displayFriend(mate){
	return mate.Name;
}

function addFriend(mate){
	arrClassmates.push(mate);
}

function nbOfMale(arr){
	var numOfMale = 0;
	for(var i=0; i<arr.length;i++){
		if(arr[i].gender==="male")
			numOfMale += 1;
	}
	return numOfMale;
}

