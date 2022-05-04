//in addition to employee, will have following properties and methods:
//school
//getSchool()
//getRole() - overridden to return 'Intern'
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, school){
    super(name, email)
    
    this.school = school;
    }
    getSchool() {
        return this.school;
    }
}





module.exports = Intern;