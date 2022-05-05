const Intern = require("../lib/Intern");

test ("Function that creates Intern Object", ()=> {
    const intern = new Intern("Mandy", "email@email.com", 1234, "University of Toronto")

    expect(intern.name).toBe("Mandy")
    expect(intern.email).toBe("email@email.com")
    expect(intern.school).toBe("University of Toronto")
    expect(intern.id).toBe(1234)
})

test ("Function that returns employee's school", () =>{
    const intern = new Intern("Mandy", "email@email.com", 1234, "University of Toronto")

    expect(intern.getSchool()).toEqual(intern.school)
})