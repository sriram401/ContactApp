var app=angular.module("ContactApp");

app.controller("Page2Controller", function(EmployeeService) {

	var self = this;
	
	self.message = "Put new Employee Sample - {\"id\":1,\"name\":\"Pankaj\",\"salary\":\"10000\"}";
	
	self.newEmp={"name" : "dummy"};
	
	self.refresh = function (){
		
		EmployeeService.getEmployees()
		.then(function(data){
			self.emps =  data;
		});
		
	};
	
	
	
	self.addEmp = function(){
		console.log("Save Object :" + self.newEmp.id);
		EmployeeService.addEmployee(self.newEmp)
		.then(function(data){
			console.log(data);
			self.refresh();
		});
		
	};

	
});