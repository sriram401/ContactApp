var app=angular.module("ContactApp");

app.service("EmployeeService",function($http){
	
	this.getEmployees = function()
	{
		return $http.get("http://localhost:3000/employees")
		.then(function(response){
			console.log(response);
			return response.data;
		});
	};


	this.saveEmployee = function(emp)
	{
		console.log("Saving Object :" + emp.id);
		
		return $http.put("http://localhost:3000/employees/"+emp.id,emp)
		.then(function(response){
			console.log(response);
			return response.data;
		});
	};

	
	
	this.addEmployee = function(emp)
	{
		console.log("Saving Object :" + emp.id);
		
		return $http.post("http://localhost:3000/employees",emp)
		.then(function(response){
			console.log(response);
			return response.data;
		});
	};

	
});
