const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const teamMembers = {
    Intern: [],
    Manager: [],
    Engineer: []
};

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the Employee's name?",
        validate: name => {
            if(name){
                return true;
            } else {
                console.log("You must enter a name")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the Employee's email?",
        validate: email => {
            if(email){
                return true;
            } else {
                console.log("You must enter an email")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the Employee's id?",
        validate: id => {
            if(id){
                return true;
            } else {
                console.log("You must enter ad id")
                return false;
            }
        }
    },
    {
        type: "list",
        name: "employeeType",
        message: "Please choose the correct role from the list below for this Employee",
        choices: ["Manager", "Intern", "Engineer"]
    },
    {
        type: 'input',
        name: "github",
        message: "Please enter employee's Github username",
        when: ({ employeeType }) => {
            if (employeeType === "Engineer") {
                return true;
            }
            return false;
        },
        validate: github => {
            if(github){
                return true;
            } else {
                console.log("You must enter a github username")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office number for the Employee",
        when: ({ employeeType }) => {
            if (employeeType === "Manager") {
                return true;
            }
            return false;
        },
        validate: officeNumber => {
            if(officeNumber){
                return true;
            } else {
                console.log("You must enter an office number")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school is Employee attending?",
        when: ({ employeeType }) => {
            if (employeeType === "Intern") {
                return true;
            }
            return false;
        },
        validate: school => {
            if(school){
                return true;
            } else {
                console.log("You must enter a school or write NA if not applicable")
                return false;
            }
        }
    }
]
const addStaff = function () {
    inquirer
        .prompt(questions)
        .then(answers => {
            if (answers.employeeType === "Intern") {
                let { name, email, id, school } = answers;
                let employee = new Intern(name, email, id, school);
                teamMembers.Intern.push(employee);
            }
            if (answers.employeeType === "Manager") {
                let { name, email, id, officeNumber } = answers;
                let employee = new Manager(name, email, id, officeNumber);
                teamMembers.Manager.push(employee);
            }
            if (answers.employeeType === "Engineer") {
                let { name, email, id, github } = answers;
                let employee = new Engineer(name, email, id, github);
                teamMembers.Engineer.push(employee);
            }

            addMoreStaff();

        })
    // .then(generateHTML(teamMembers))
    // .then(pageHTML => {
    //     fs.writeFile("./dist/index.html", pageHTML, err => {
    //         if (err){
    //             console.log("Oops something went wrong. Please try again")
    //         }
    //         console.log("Your html file has been created!");
    //     })
    // })

}

const addMoreStaff = function () {
    inquirer
        .prompt({
            type: "confirm",
            name: "confirmAdd",
            message: "Would you like to add another Team Member?"
        })
        .then(answers => {
            if (answers.confirmAdd) {
                addStaff();
            } else{
            const html = generateHTML(teamMembers);

            fs.writeFile("./dist/index.html", html, err => {
                if (err) {
                    console.log(err)
                }
                console.log("Your html file has been created!");
            })
         }
         })

}

addStaff();