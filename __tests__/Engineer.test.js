const Engineer = require("../lib/Engineer");

test ('creates engineer object', ()=>{
    const engineer = new Engineer("Kate","email@email.com", 1234, "monkeypants");

    expect(engineer.name).toBe("Kate");
    expect(engineer.email).toBe("email@email.com")
    expect(engineer.github).toBe("monkeypants")
    expect(engineer.id).toBe(1234)
})

test ("Function that returns github account name", ()=>{
    const engineer = new Engineer("Kate","email@email.com", "monkeypants")

    expect(engineer.getGithub()).toEqual(engineer.github)
})

test ("Function that returns employee's role", ()=>{
    const engineer = new Engineer("Kate","email@email.com", "monkeypants")

    expect(engineer.getRole()).toEqual("Engineer")
})