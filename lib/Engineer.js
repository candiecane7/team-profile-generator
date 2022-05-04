// in addition to employee, will also have following properties and methods:
//github - done
//getGithub() - done
//getRole() - overridden to return 'Engineer' - done
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email);
        this.github = github;
    }
    getGithub() {
         return this.github;
    }
}

module.exports = Engineer;