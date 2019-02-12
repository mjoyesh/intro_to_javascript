var str=prompt("Enter a String= ");
var low = str.toLowerCase();
  var splitString = low.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 

if(joinArray==low)
{
	alert("Palindrome")
}
else
{
	alert("Not Palindrome")
}

