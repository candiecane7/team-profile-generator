const Employee = require('../lib/Employee.js');

test ('creates an employee object', ()=>{
    const employee = new Employee("Emily");
    // employee.id = '3';
    employee.email = 'email@email.com';
    
    expect(employee.name).toBe('Emily');
    expect(employee.email).toContain('@')
})

test ('function that will return name', ()=>{
    const employee = new Employee("Emily");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
})

test ("function that returns employee's email", ()=>{
    const employee = new Employee("Emily");
    employee.email = 'email@email.com';

    expect (employee.getEmail()).toEqual(expect.stringContaining(employee.email))
})
test ("Function that returns employee's role", ()=>{
    const employee = new Employee("Emily");

    expect (employee.getRole()).toEqual(expect.stringContaining(employee.constructor.name))
})