const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const teamMembers = [];

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the Employee's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the Employee's email?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Employee's id?"
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
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office phone number for the Employee",
        when: ({ employeeType }) => {
            if (employeeType === "Manager") {
                return true;
            }
            return false;
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
        }
    }
]
const addStaff = function () {
    inquirer
        .prompt(questions)
        .then(answers => {
            if (answers.employeeType === "Intern") {
                let { Name, Email, ID, School } = answers;
                let employee = new Intern(Name, Email, ID, School);
                teamMembers.push(employee);
            }
            if (answers.employeeType === "Manager") {
                let { Name, Email, ID, Phone } = answers;
                let employee = new Manager(Name, Email, ID, Phone);
                teamMembers.push(employee);
            }
            if (answers.employeeType === "Engineer") {
                let { name, email, id, github } = answers;
                let employee = new Engineer(name, email, id, github);
                teamMembers.push(employee);
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