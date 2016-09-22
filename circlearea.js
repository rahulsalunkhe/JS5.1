//this is not a full fledged working. Done only for requirement.

var ticker = 0;
function calling(a)
{
	ticker++;	
	 var area = 3.14*a*a;
	 if(ticker == 1 && a == 7)
	 {
	 	document.getElementById('firstArea').innerHTML = document.getElementById('firstArea').innerHTML +" " + area;
	 }
	 else if(ticker == 2 && a == 1.5)
	 {
	 	document.getElementById('secondArea').innerHTML = document.getElementById('secondArea').innerHTML +" " + area;
	 }
	 else if(ticker == 3 && a == 20) 
	 {
	 	document.getElementById('thirdArea').innerHTML = document.getElementById('thirdArea').innerHTML +" " + area;
	 }
	 else
	 {
	 	alert("The clicks have max out");
	 	ticker = 0;
	 	document.getElementById('firstArea').innerHTML="The area of Circle with Radius 7 is :";
	 	document.getElementById('secondArea').innerHTML="The area of Circle with Radius 1.5 is :";
	 	document.getElementById('thirdArea').innerHTML="The area of Circle with Radius 20 is :"; 	
	 }
	 
	 
}
