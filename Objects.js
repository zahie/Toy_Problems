// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
var mates={

student1:{name:"yussur",
age:27,
sports:"swimming",
nationality:"iraqi"},

student2:{
name:"ameera",
age:23,
sports:" ",
nationality:"syrian"},

student3:{
name:"atheer",
age:36,
sports:" ",
nationality:"iraqi"},

student4:{
name:"mohammed",
age:23,
sports:" ",
nationality:"jordanian"},

student5:{
name:"zolfa",
age:23,
sports:" ",
nationality:"lebanese"},
}

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function older(x){

var classmate=[]
for(var key in x)
{
 classmate.push(x[key])
}

return classmate
}
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

function nbOfObjKeys(x){

var res=[]
for(var key in x)
{
 res.push(key)

}
return res.length
}
// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

function array(x){
var h=[]
for(var i=0;i<x.length;i++){

	if(x[i].length===x[i+1].length){

  h=h.push(x[i],x[i+1])

	}
}

return h
}








