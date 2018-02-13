	// 1-create a data model to represent some of your classmates

	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	function make_friend(name,age,gander){
		return {
			name:name,
			age:age,
			gander:gander
		}
	}
	var friend1=make_friend("abdala",23,"male")
	var friend2=make_friend("shafaa",17,"fmale")
	var friend3=make_friend("nader",22,"male")
	// 	-create an array to hold the classmates that you have created.
	var classmates=[]
	function classmate(n){
		return classmates.push(n)
	}
	classmate(friend1)
	classmate(friend2)
	classmate(friend3)
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayfriend (mate){
		for (var i = 0; i < mate.length; i++) {
			console.log(i+1+"."+" "+ mate[i] +"\n")
		}
	}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	function addFriend(mate){
		return mate.push(mate)
	}
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
var result=0
function nbOfMale(mate){
	for (var i = 0; i < mate.length; i++) {
		if(mate[i].gander==="male"){
			result++;
		}
	}
	return result;
}
	// 	-Write a function searchMates that, given a query and an array of Mates,
function searchMates(str,mate){
	for (var i = 0; i < mate.length; i++) {
		if (mate[i].name===str){
			return "founded: "+mate[i]
		} 
	}
	return "notfound"
}
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
// there no time but i think i well need two loops one for take one from elemant of array and the soucnd one for searsh in the onther elemant of the same array
