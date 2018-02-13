	// 1-create a data model to represent some of your classmates
  var ayman={
    name:'Ayman Ghaith',
    age:29,
    height:178,
    gender:'Male',
    nationality:'Jordanian'
  }

  var sara ={
    name:'Sara Koki',
    age:23,
    height:170,
    gender:'Female',
    nationality:'Syrian'
  }
  var ameera ={
    name:'Ameera',
    age:23,
    height:173,
    gender:'Female',
    nationality:'Syrian'
  }
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
  function addMate(name,age,gender,height,nationality) {
    return {
      name:name,
      age:age,
      gender:gender,
      height:height,
      nationality:nationality
    };
  }
	// 	-create an array to hold the classmates that you have created.
  var classMates=[ayman,sara,ameera];
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate){
  return mate.name + ', ' + mate.age + 'years old, '+ mate.gender+', '+mate.height + 'cm, '+mate.nationality+'.'
}
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
  function addFriend(mate) {
    classMates.push(mate);
    return;
  }
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
  function nbOfMale(matesArray){
    var n = 0;
    for(var i = 0;i<matesArray.length;i++){
      if(matesArray[i]['gender']==='Male'){
        n+=1;
      }
    }
    return n;
  }
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
function searchMates(arrayMates,query){

  for(var i = 0;i<arrayMates.length;i++){
    if(arrayMates[i].name.toLowerCase().indexOf(query.toLowerCase())!== -1){
      return arrayMates[i];
    }
  }
}
