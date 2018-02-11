// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	var mates=[];
	var classmate1={fullName: "shatha sukkar",
					age : 28,
					favSport: "football",
					nationality:"syrian"

	};
	var classmate2={fullName: "livia",
					age : 28,
					favSport: "football",
					nationality:"romaian"

	};
	var classmate3={fullName: "fatima mostafa",
					age : 22,
					favSport: "tennis",
					nationality:"syrian"

	};
	var classmate4={fullName: "zolfa al bwab",
					age : 27,
					favSport: "basketball",
					nationality:"syrian"

	};
	var classmate5={fullName: "alaa Migdady",
					age : 29,
					favSport: "football",
					nationality:"Jordanian"

	};

	mates.push(classmate1,classmate2,classmate3,classmate4,classmate5);

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

ffunction getOlder(arr)
{ var older = arr[0]
	for (var i =1; i<arr.length; i++)
	{
		if (arr[i]['age']>arr[i-1]['age'])
			older = arr[i]

	}
	return older;

}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2


	 function nbOfObjKeys (obj)
	 { var k=0;
	 	for (var key in obj)
	 	{
	 		k++;
	 	}
	 	return k ;
	 }

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]
function getSameLength(arr)
	    {	var newArr=[];
	    	for(var i=0; i<arr.length; i++)
	    	{	 var str= arr[i];
				for (var j=i+1, j<arr.length,j++)
				{
	    			if (str.length === arr[j].length)
	    		{
	    			newArr.push(str,arr[j])
	    		}
				}
	    	}
	    	return newArr;
	    }
