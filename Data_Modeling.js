	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

// factory function 
function classMates(name,age,eyeCol,hairCol,gender){
	return {
		name:name,
		age:age,
		eyeCol:eyeCol,
		hairCol:hairCol,
		gender:gender
	}

	
}
var array=[]
var mate1=classMates('a',20 ,'brown','black','male')
var mate2=classMates('b',21 ,'green','blond','female')
var mate3=classMates('c',19 ,'blue','black','male')
var mate4=classMates('d',12 ,'black','brown','female')
array.push(mate1)
array.push(mate2)
array.push(mate3)
array.push(mate4)
//display
function displayFriend(obj){
	return obj.name+' '+obj.age+' '+obj.eyeCol+' '+obj.hairCol;

}
function addFriend(obj){
	array.push(obj)
	return array;
}
count=0;
function nbOfMale(array){
	for(var i=0;i<array.length;i++){
		if(array[i].gender==='male'){
			count++;
		}
	}
return count;
}
function searchMate(query,array){
	for(var i=0;i<array.length;i++){
		if(array[i].name===query){
			return true;
		}
		return false
	}
}
