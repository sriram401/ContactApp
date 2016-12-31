var app=angular.module("ContactApp");

app.controller("Page1Controller", function(EmployeeService) {

	this.message = "Sample GET from Employee Service - http://localhost:3000/employees"
	
	var self = this;
	
	 EmployeeService.getEmployees()
		.then(function(data){
			self.emps =  data;
		});
	
});