//complete this code
class Person {
	constructor(name, age){
		this._name=name;
		this._age=age;
	}
	set name(newName){
		this.name = newName.trim();
	}
	get name(){
		return this._name;
	}
	set age(age){
		this._age=age;
	}
	get age(){
		return this._age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Creating a Person instance

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
