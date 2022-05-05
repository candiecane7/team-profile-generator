const inquirer = require("inquirer");

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
        choices:["Manager", "Intern", "Engineer"]
    },
    {
        type: 'input',
        name: "github",
        message: "Please enter employee's Github username",
        when: ({employeeType})=> {
            if(employeeType === "Engineer"){
                return true;
            }
            return false;
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the office phone number for the Employee",
        when: ({employeeType})=>{
            if(employeeType === "Manager"){
                return true;
            }
            return false;
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school is Employee attending?",
        when: ({employeeType})=>{
            if(employeeType === "Intern"){
                return true;
            }
            return false;
        }
    }
]

inquirer
.prompt(questions)
.then(answers=>{
    console.log(answers)
})