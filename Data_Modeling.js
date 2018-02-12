	// 1-create a data model to represent some of your classmates
	// 	-think of different attributes of your classmates? what do all of them have ?
	// 	-create a factory function.
	// 	-create an array to hold the classmates that you have created.
	// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
	// 	-Write a function searchMates that, given a query and an array of Mates,
	//           searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.

// MY ANSWERS:
	// - name , gender , favfood
	var mate1={name:fatima,gender:female,favfood:ma2loobeh};
	var mate2={name:hamze,gender:male,favfood:meet};
	var mate3={name:mona,gender:female,favfood:mahashe};

	function CMatt (name,gender,favfood){
		return {
			name: name,
			gender: gender,
			favfood: favfood}
		}

		var classmates=[mate1,mate2,mate3];

    function displayFriend (object){
    	
    	return "name "+object.name+" ,"+"gender "+ object.gender+" ,"+"favfood "+object.favfood

    }
    function addFriend (newmate){
    	classmates.push(newmate);  
    	return classmates;
    }
    function nbOfMale (array){
    	var sum=0;
    	for (var i = 0 ; i<array.length; i++){
    		for (var key in array[i]){
    			if (array[i][key]=="male"){
    				sum=sum+1;
    			}
    		}
    	}   
    	return sum;
    }

    function searchMates (query,array){
    	for (var i =0;i<array.length;i++){
    		for (var key in array[i]){
    			if (array[i][key]=="string"){
    				if (array[i][key].indexOf(query)>=0){
    					return array[i];}
    				}}} return "no match";}
    		
    	
    

	

