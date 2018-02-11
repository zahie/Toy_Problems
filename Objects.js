// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]



var mate1=
{
	fullName:"alik essa alaqra",
	age:24,
	favSport:"football",
	nationality:"jordanian"

};

var mate2=
{
	fullName:"ahmad zeyad salameh",
	age:33,
	favSport:"walking",
	nationality:"palestanian"

};
var mate3=
{
	fullName:"sleman nayef rusan",
	age:27,
	favSport:"running ",
	nationality:"canadian"

};
var mate4=
{
	fullName:"ibrahem riyad jawdat",
	age:24,
	favSport:"football",
	nationality:"jordanian"

};var mate5=
{
	fullName:"moath waleed alnajar",
	age:26,
	favSport:"basketball",
	nationality:"ukranian"

};


var arr=[mate1,mate2,mate3,mate4,mate5];


function older(arr)
{
    var old=0;
    var count=arr.length
      {for(var i=0;i<count;i++)
      

    {	
    	if(arr[i].age>old) 

    	old=arr[i].age
    {
    }
    return old;	



    


}