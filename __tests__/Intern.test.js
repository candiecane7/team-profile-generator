const Intern = require("../lib/Intern");

test ("Function that creates Intern Object", ()=> {
    const intern = new Intern("Mandy", "email@email.com", "University of Toronto")

    expect(intern.name).toBe("Mandy")
    expect(intern.email).toBe("email@email.com")
    expect(intern.school).toBe("University of Toronto")
})

test ("Function that returns employee's school", () =>{
    const intern = new Intern("Mandy", "email@email.com", "University of Toronto")

    expect(intern.getSchool()).toEqual(intern.school)
})