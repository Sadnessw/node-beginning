// console.log(__dirname, __filename);

class Person {
	constructor(name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}
	greetings() {
		console.log(`Hello! My name is ${this.name} :) 
And the last name is ${this.lastName.toUpperCase()}`)
	}
}

module.exports = Person;