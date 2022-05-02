const Employee = require('../lib/Employee');

test ('creates an employee object', ()=>{
    const employee = new Employee("Emily");
    
    expect(employee.name).toBe('Emily');
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toContain('@')
})