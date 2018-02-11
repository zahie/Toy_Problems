// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

	var mates = [ 
	{
		Fname:'Jo',
		Lname:'Jose',
		Age: 22,
		FavSports: 'Soccer',
		Nationality: 'Mexican',
	},

		{
			Fname:'Alex',
			Lname:'Jones',
			Age: 20,
			FavSports: 'Soccer',
			Nationality: 'American',
		},

			{
				Fname:'Nader',
				Lname:'Nasr',
				Age: 27,
				FavSports: 'Squash',
				Nationality: 'Jordanian',
			},

				{
					Fname:'John',
					Lname:'Smith',
					Age: 31,
					FavSports: 'Soccer',
					Nationality: 'American',
				},

					{
						Fname:'Steve',
						Lname:'Jobless',
						Age: 48,
						FavSports: 'Apples in a basket',
						Nationality: 'Syrian'
					}


	]

// 2-depending on the previous exercises , 
//write a function that returns the older classmate 
//from mates array.

function olderMates (age){
		//var i = 0;
		var newArr = [];
		for(var key in mates){
			if(mates.age >= age){
				//console.log(mates.age)
				i++
				newArr = mates; 
			}
			return mates.age;
			
		}

}


// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

