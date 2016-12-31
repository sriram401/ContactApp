var app=angular.module("ContactApp");

app.controller("Page3Controller", function(EmployeeService) {

	var self = this;
	
	self.message = "Put new Employee Sample - {\"id\":1,\"name\":\"Pankaj\",\"salary\":\"10000\"}";
	
	self.newEmp={"name" : "name","id" : "id", "salary" :"salary"};
	
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