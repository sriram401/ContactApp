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
	
});
