var app=angular.module("ContactApp");

app.controller("MainController", function() {
	this.age = 37;
	this.name = "Sriram2";
	
	this.courses = [
		{name:'English',Mark:85},
		{name:'Tamil',Mark:86},
		{name:'Maths',Mark:95},
		{name:'Science',Mark:95},
		{name:'Social Science',Mark:97}
		];
	
	this.addOne = function (name)
	{
		console.log("Adding One Mark to " + name);
		
		for(var i = 0; i < this.courses.length; i++) {
		    var course = this.courses[i];
			if(name == course.name)
			{
				course.Mark++;
			}
		}
		
	}

	this.subtractOne = function (name)
	{
		console.log("Adding One Mark to " + name);
		
		for(var i = 0; i < this.courses.length; i++) {
		    var course = this.courses[i];
		    if(name == course.name)
			{
				course.Mark--;
			}
		}
		
	}

	
});