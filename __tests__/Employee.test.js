const Employee = require('../lib/Employee.js');

test ('creates an employee object', ()=>{
    const employee = new Employee("Emily", "email@email.com", 1234);
    
    expect(employee.name).toBe('Emily');
    expect(employee.email).toContain('@')
    expect(employee.id).toEqual(expect.any(Number))
})

test ('function that will return name', ()=>{
    const employee = new Employee("Emily");

    expect(employee.getName()).toEqual(employee.name)
})

test ("function that returns employee's email", ()=>{
    const employee = new Employee("Emily", "email@email.com");


    expect (employee.getEmail()).toEqual(employee.email)
})
test ("Function that returns employee's role", ()=>{
    const employee = new Employee("Emily");

    expect (employee.getRole()).toEqual("Employee")
})