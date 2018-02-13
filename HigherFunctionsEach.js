	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
		var result=[];
		each(array,function(x){if(x>=0){
			result.push(x);}
			else{result.push(-1*x)}
		})
		return result;

	 
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
		
    */
    // Hanan Nouman
    //Then the question is to push element*4 if it was a multiple of 4.
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
		var four=[];
		each(array,function(x,index){if (x%4==0 && x!=0){four.push(x*4)}})
		return four;
			
	}
