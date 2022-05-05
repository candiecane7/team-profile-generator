//in addition to employee thingies, will have following properties and methods:
//officeNumber
//getRole() - Overridden to return 'Manager'
const Employee = require ('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        super(name, email, id)
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager