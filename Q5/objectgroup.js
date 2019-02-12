var employee = [
    { Name: 'Joyesh', Age: 23, Salary: 6000, DOB: '23/04/1995' },
    { Name: 'Kamal', Age: 22, Salary: 7000, DOB: '27/11/1996' },
    { Name: 'Rohit', Age: 19, Salary: 800, DOB: '27/11/1993' },
    { Name: 'Mohit', Age: 20, Salary: 950, DOB: '27/11/1993' },
    { Name: 'Sonu', Age: 18, Salary: 1000, DOB: '27/11/1993' },
];

console.log("a. List of all employees= ",employee);

console.log("b.");
console.log("Employees whose salary > 5000 = ")
for(var i=0;i < employee.length;i++)
{
	if(employee[i].Salary > 5000)
	console.log(employee[i]);
}

console.log("d.");
for(var i=0;i < employee.length;i++)
{
	if(employee[i].Salary > 1000 && employee[i].Age > 20)
	{
		var inc = employee[i].Salary * 5;
		console.log("Salary of ",employee[i].Name," after increment= ",inc);
	}
	
}