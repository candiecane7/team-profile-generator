// must have following properties and methods:
// name
// id
// email
// getName()
//getId()
//getEmail()
//getRole() - returns 'Employee'

class Employee {
    constructor(name = '', email) {
        this.name = name;
        this.email = email;
    };
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole(){
       return this.constructor.name;
    }
}
module.exports = Employee;