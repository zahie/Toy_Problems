	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.


function create(n , g , a ,h , w) {
return {
name: n ,
gender : g ,
age: a ,
hieghtInCm: h,
wieghtInKg: w ,
}
}

var classMate1 = create("name1","male",23,170,72)
var classMate2 = create("name2","female",25,168,65)
var classMate3 = create("name3","male",40,178,85) 

var classMates = [classMate1 , classMate2 ,classMate3]


function displayFriend(mate) {

for (i = 0 ; i < classMates.length ; i++) { 
if (mate === classMates[i]) { 
return  classmates[i].name + " , " +classMates[i].gender + " , " + classmMates.age + " , " +classMates.hieghtInCm + " , " + wieghtInKg
} return " friend can't be found" 

function addFriend(mate) {
classMates.push(mate)
}