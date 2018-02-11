// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!

	 var mates = [ 
       {
       	name: 
       	{first: 'Ammar', middle: 'Dr', last: 'Halbouni'}, 
       	age: 22,
       	favoriteSports: "football",
       	nationality: "Jordanian"
       }, 
       {
       	name: 
       	{first: 'omar', middle: 'om', last: 'omari'}, 
       	age: 24,
       	favoriteSports: "Tennis",
       	nationality: "syrian"

       }, 
       {name: 
       	{first: 'ahmad', middle: 'jal', last: 'ramez'}, 
       	age: 26,
       	favoriteSports: "basketball",
       	nationality: "iraqi"

       }, 
       {name: 
       	{first: 'hady', middle: 'Ammar', last: 'shami'}, 
       	age: 20,
       	favoriteSports: "volleyball",
       	nationality: "lebanese"

       }, 
       {name: 
       	{first: 'reda', middle: 'ahmad', last: 'hani'}, 
       	age: 19,
       	favoriteSports: "futsal",
       	nationality: "Jordanian"

       }
 ];

// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
       function olderMate(array,name){
              var older=array[0];
              for(var i<1; i<array.length;i++){
                     if(older.age>array[i].age){
                            return older;
                     }
              }
              return array[i];
       }
// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

