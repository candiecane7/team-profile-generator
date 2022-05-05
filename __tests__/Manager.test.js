const Manager = require("../lib/Manager")

test ("Creates a Manager object", ()=>{
    const manager = new Manager("Bianca", "email@email.com", 1234, "555-555-5555")

    expect (manager.officeNumber).toBe("555-555-5555")
})

test ("function that returns employee's role", ()=> {
    const manager = new Manager("Bianca", "email@email.com", 1234, "555-555-5555")

    expect (manager.getRole()).toBe("Manager")
})