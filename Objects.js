// 1-define objects for 5 of your classmater containing the following keys:
	// -full name 
	// -age 
	// -favorite sports 
	// -nationality
	// and then save theme in one array called mates!
	var collegues={ [var fname: "qais" var age: 23 var favouritesports:"football" var nationality:"jordanian" ,
                    var fname: "waed" var age: 24 var favouritesports:"running" var nationality:"jordanian" ,
                     var fname: "nada" var age: 31 var favouritesports:"football" var nationality:"jordanian" ,
                     var fname: "hadeel" var age: 22 var favouritesports:"football" var nationality:"jordanian", 
                     var fname: "nariman" var age: 24 var favouritesports:"football" var nationality:"palestinian"] };

	}
// 2-depending on the previous exercises , write a function that returns the older classmate from mates array.
function oldest(obj1){
var colleguesvalue=[];
var older=collegues.age[0];
var[i]=0;
for(var key in obj1){
	colleguesvalue.push(obj1[key]);
	if(obj1.age[i]>older){
		older=obj1.age[i]};
	}

	}

return older;
}

// 3-write a function that takes an object as argument and returns how many keys does that object contain.
	 nbOfObjKeys({}) // ==> 0
	 nbOfObjKeys({name:"housam",age:"3"}) // ==> 2

	 function numofkeys(obj2){
   for(var key in obj2 ){
    sal.push(obj2[key]);
    }
return sal.length;
}

// if you finished the above, solve the following:
// write a function that takes array of strings and returns an array of the strings that have the same length
	    ['hi','hello','welcome','hy'] // ==> ["hi","hy"]

	    function lengthofarry(arr1){
	    var same=arr1[0];
	    var Rarry=[]
          for(var i=0;i<arr1.length-1;i++){
          for(var j=1;j<arr1.length-1;j++){
          	if(arr1[i]===arr1[j])
          Rarray=Rarray+arr[i];
          }
              }
        return Rarray; 




          }


	    }

