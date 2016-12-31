var app=angular.module("ContactApp");

app.controller("Page2Controller", function(EmployeeService) {

	var self = this;
	
	self.message = "Modify Employee Sample - {\"id\":1,\"name\":\"Pankaj\",\"salary\":\"10000\"}";
	
	self.selectedEmp={};
	
	self.refresh = function (){
		
		EmployeeService.getEmployees()
		.then(function(data){
			self.emps =  data;
			self.selectedEmp = data[0];
		});
		
	};
	
	
	
	self.saveEmp = function(){
		console.log("Save Object :" + self.selectedEmp.id);
		EmployeeService.saveEmployee(self.selectedEmp)
		.then(function(data){
			console.log(data);
			self.refresh();
		});
		
	};

	
});