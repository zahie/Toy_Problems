	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.


	var classMates = [

	{
		name: "Mansour",
		age : 33,
		sex : "male",
		height: 170,
		isMarried : false
	},

	{
		name: "Shefaa",
		age : 17,
		sex : "female",
		height: 165,
		isMarried : false
	},

	{
		name: "Ayman",
		age : 30,
		sex : "male",
		height: 172,
		isMarried : true
	},

	];


	function mates(name,age,sex,height,isMarried){
		return{
			name : name,
			age:age,
			sex:sex,
			height: height,
			isMarried : isMarried
		}
	}

	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.

	function displayFriend(mate){

		console.log("Hello " + 
			mate.name + 
			" ," + "You are awesomly " + 
			mate.age + 
			" Years <3, " + 
			" And you are " + 
			mate.height + " CM ");

	};


	// -write a function called addFriend that takes a mate as an argument and add it to you classMates array.

	function addFriend(mate){

		classMates.push(mate);
	}

	// -calculate the number of male friends that your class have by writing a function called nbOfMale.


	function nbOfMale(mates){
		var count = 0;
		for(var i = 0 ; i < mates.length;i++){
			if(mates[i].sex === "male"){
				count++;
			}
		}
		return "You have \'" + count + "\' Males in your class";
	}



	// 	-Write a function searchMates that, given a query and an array of Mates,
	//searche the array of mates for "matching" mate. 
	// You will decide what way you want to write in your search algorithm.



	function searchMates(query,mates){
		var isMatch = true;
		if(query === "charAt"){
			for(var i = 0 ; i <mates.length; i++){
				if(mates[i].sex.charAt[i] === "m"){
					isMatch;
				}
				else{
					!isMatch;
				}
			}
			return isMatch;
		}
	}