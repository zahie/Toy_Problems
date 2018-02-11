// 1-define objects for 5 of your classmater containing the following keys:
	// -full name
	// -age
	// -favorite sports
	// -nationality
	// and then save theme in one array called mates!

	var sara={
		fullName:"Sara Mohammad Koki",
		age:23,
		favoriteSports:"football and swimming",
		nationality:"Syrian"
	}

	var zolfa={
		fullName:"zolfa albawab",
		age:27,
		favoriteSports:"walking",
		nationality:"Syrian"
	}
	var ammar={
		fullName:"Ammar al Halboni",
		age:23,
		favoriteSports:"football and basketball",
		nationality:"Jordanian"
	}
	var ameera={
		fullName:"Ameera",
		age:23,
		favoriteSports:"running and table tennis",
		nationality:"Syrian"
	}

	var ayman={
		fullName:"Ayman Ghaith",
		age:29,
		favoriteSports:"running and football",
		nationality:"Jordanian"
	}

var mates=[sara,zolfa,ammar,ameera,ayman];
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(array){
	var oldest=0;

	for(var i =0;i<array.length;i++){

			if(array[i]['age']>oldest){
				oldest=array[i]['age'];

		}
		for(var j=0;j<array.length;j++){
			if(array[j]['age']==oldest){
				return array[j];
			}
		}
	}

	return oldest;
}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
function nbOfObjKeys(obj) {
	var keyNumber=0;
	for(var key in obj){
		keyNumber=keyNumber+1
	}
	return keyNumber;
}
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

			function sameLength(array){
				var resultArr=[];

				for(var i = 0;i<array.length;i++){
					for(var j=0;j<array.length;j++){
						if(array[i].length===array[j].length){
							resultArr.push(array[i]);
						}
					}
				}
				return resultArr;
			}
