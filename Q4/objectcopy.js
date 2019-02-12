var mydetails = {name:prompt("Enter Name= "), college:prompt("Enter College= "), age:prompt("Enter Age= "), location:prompt("Enter Location= ")};
console.log("My Original Object= ",mydetails)
var copyobject = Object.assign({},mydetails);
console.log("My New Object= ",copyobject);