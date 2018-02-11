// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var classmater1={
	 fullName:"Qais trad",
	 age:23,
	 favoriteSports:"football",
	 nationality:"Jordanian"
}
var classmater2={
	 fullName :"Salsabil Jaafra",
	 age :"23",
	 favoriteSports :"basket ball",
	 nationality:"Jordanian"
}
var classmater3={
	 fullName :"Alik Aqraa",
	 age :22,
	 favoriteSports :"swimming",
	 nationality:"Ukranian"
}
var classmater4={
	 fullName :"Zolfa Albawab",
	 age :23,
	 favoriteSports :"tennis",
	 nationality:"Lebanese"
}
var classmater5={
	 fullName :"AbdAlhameed Abullah",
	 age :29,
	 favoriteSports :"football",
	 nationality:"Syrian"
}
var mates=[];
mates.push(classmater1,classmater2,classmater3,classmater4,classmater5)
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(mates)
{
	var older=0
	var olderClassmater={}
	for(var i =0;i<mates.length;i++)
	{
		if(mates[i].age>older)
		{
			older=mates[i].age
			olderClassmater=mates[i]
		}
	}
	return olderClassmater
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

function howManyKeys(obj)
{
	var arr =Object.keys(obj)
	return arr.length
}

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy','daree'] // ==> ["hi","hy"]
function samelength(arr){
	
	var newArr=[]
	var count=0
	for(var i=0;i<arr.length;i++)
	{
		count=0
		for(var x=0;x<arr.length;x++)
		{
			if(x!==i)
			{
				if(arr[i].length===arr[x].length)
			{
              count++
			}
			}
			
		}
		if(count!==0)
		{
newArr.push(arr[i]);
		}
	}
	return newArr

}
