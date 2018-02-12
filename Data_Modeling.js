	//1-create a data model to represent some of your classmates
	 //	-think of different attributes of your classmates? what do all of them have ?
		//-create a factory function.
		// -create an array to hold the classmates that you have created.
	//-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	//	-write a function called addFriend that takes a mate as an argument and add it to you classMates array.
	//-calculate the number of male friends that your class have by writing a function called nbOfMale.
	//	-Write a function searchMates that, given a query and an array of Mates,
      //     searche the array of mates for "matching" mate. You will decide what way you want to write in your search algorithm.
    

   function classmates(name,age,phoneNumber,gender)
   {

   	return {
   	
        name:name,
        age:age,
        phoneNumber:phoneNumber,
        gender:gender};
   	
   }

var mate1=classmates("alik",24,0797934156,"male")
var mate2=classmates("tal",25,0783634746,"female")
var mate3=classmates("dareen",30,0987654327,"female")
var mate4=classmates("ammar",24,84759384574,"male")

var mates=[mate1,mate2,mate3,mate4]


function displayMateInfo(mates)
  {
    var str="\n"
    count=1;
    for(var i=0;i<mates.length;i++)
    {
    	str+=count+"."+"student name:"+mates[i].name+","+" age:"+mates[i].age+","+" phone number:"+mates[i].phoneNumber+"\n";
    	count++
    }
    return str;

 }

 function addFriednd(name,age,phonenumber,gender)
{ 
 var newMate=mates.push(classmates)    

   return newMate;
}


  function nbOfMale(mates)
  {  var count=0;
   for(var i=0;i<mates.length;i++)
        if(mates[i].gender=="male")
        {
        	count+=1;
        }
        return  "numbes of males in the class are:"+count;
  }