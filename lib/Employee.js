// must have following properties and methods:
// name
// id
// email
// getName()
//getId()
//getEmail()
//getRole() - returns 'Employee'

class Employee {
    constructor(name = '', email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
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
    getId(){
        return this.id;
    }
}
module.exports = Employee;