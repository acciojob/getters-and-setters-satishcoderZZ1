//complete this code
class Person {
	private name: string;
	private age: number;
	constructor(name: string, age: number){
		this.name=name;
		this.age=age;
	}

	get name(): string{
		return this.name;
	}

	get age(): number{
		return this.age;
	}

	set age(age: number){
		this.age=age;
	}
	
}

class Student extends Person {
	study(): void{
		console.log(`${this.name} is studing`);
	}
}

class Teacher extends Person {
	teach(): void{
		console.log(`${this.name} is teaching`);
	}
}

// Creating a Person instance

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
