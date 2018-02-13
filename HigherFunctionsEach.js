	// 1) 'absAll' create function that accept array as input and check the element 
    //     if it's negative make it positive 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function absAll(array) {
	 //your code here
	 var arr = [];
	 each(array,function(element){
	 	if(element >= 0 ){
	 		arr.push(element);
	 	} else {
	 		arr.push(-element);
	 	}
	 });
	 return arr;
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
    /*
	the question ask me to use (index) if it is  multiply of 4 it will give me that element mutiplay by 4;
	But the example in the question is multiplaying 4 for each element that multiplay of 4.
	and as i ask HIR they told me to solve as the question ask not as the example doing.
    */
	function multiplyOfFour(array) {
	    //your code here
	    var arr = [];
	    each(array,function(element,i){
	    	if (i %4 === 0){
	    		arr.push(element*4)
	    	}
	    })
	    return arr;
	}
