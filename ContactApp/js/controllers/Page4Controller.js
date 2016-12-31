var app=angular.module("ContactApp");

app.controller("Page4Controller", function(EmployeeService) {

	var self = this;
	
	self.message = "Delete Employee Sample - {\"id\":1,\"name\":\"Pankaj\",\"salary\":\"10000\"}";
	
	self.selectedEmp={};
	
	self.refresh = function (){
		
		EmployeeService.getEmployees()
		.then(function(data){
			self.emps =  data;
			self.selectedEmp = data[0];
		});
		
	};
	
	
	
	self.delEmp = function(){
		console.log("Delete Object :" + self.selectedEmp.id);
		EmployeeService.delEmployee(self.selectedEmp)
		.then(function(data){
			console.log(data);
			self.refresh();
		});
		
	};

	
});