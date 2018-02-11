var matObj {
	fullName :"",
	age : ,
	favSport :"",
	nationality : ""
}


mats=[{fullName:"ahmad x", age:20 ,favSport:"football" ,nationality : "jord"} ,
{fullName:"ali", age:24 ,favSport:"bascketball" ,nationality : "palestain"},
{fullName:"alex", age:27 ,favSport:"tennes" ,nationality : "american"},
{fullName:"manela", age:30 ,favSport:"swimming" ,nationality : "french"},
{fullName:"joe", age:25 ,favSport:"running" ,nationality : "maroco"}]

function olderMat(array){
	var x = array[0]["age"]
	for (var i = 1; i < array.length; i++) {
		if(array[i]["age"] > x){
			x = array[i]["age"]
		}
	}
	return x
}

function numOfkeys(obj){
	var x = Object.keys(obj)
	return x.length
}