	// 1-create a data model to represent some of your classmates
                var classmate1={fname:'salsabeel',age:23,nationality:'jordinian',gender:'female'}
                var classmate2={ fname:'sara',age:23,nationality:'jordinian',gender;'female'}
                var classmate3={fname:'samer',age:23,nationality:'syrian',female:'male';}

   

	// 	-think of different attributes of your classmates? what do all of them have ?

	// 	-create a factory function.
function create (fname,age,nationality){
	return fname:fname
	       age:age
	       nationality:nationality
	   };


	// 	-create an array to hold the classmates that you have created.

	var arrclassmates=[classmate1,classmate2,classmate3]
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate){

	
return "the first name is:"+ mate.fname+"   the age is :"+mate. age+ ' the nationality is'+ mate.nationality

};


	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.

function addFriend (mate){
      arrclassmates[length-1]=mate;
}

	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
          function nbOfMale(arrayclassmates){
          	var count=0;
         for (var i = 0;i<arrclassmates.length; ; i++) {
         if(arrayclassmates.gender[i]==='male')
         	count++
       
         }
         return count;

}

	// 	-Write a function searchMates that, given a query and an array of Mates,

	function searchMates(array,query){
		var catch=''
for (var i = 0;i<array.length; ; i++) {
         if(array.fname[i].indexOf(array.fname[i].query)===-1){
         	catch='notfound'
         	}
       
         else 
         catch='found'

	}
       return catch;
	//  searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.












