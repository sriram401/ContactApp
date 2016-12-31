var app=angular.module("ContactApp");

app.controller("Page1Controller", function(EmployeeService) {

	this.message = "Still under construction- P1!"
	
	var self = this;
	
	 EmployeeService.getEmployees()
		.then(function(data){
			self.emps =  data;
		});
	
});