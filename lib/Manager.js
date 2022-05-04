//in addition to employee thingies, will have following properties and methods:
//officeNumber
//getRole() - Overridden to return 'Manager'
const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, email, officeNumber){
        super(name, email)
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager