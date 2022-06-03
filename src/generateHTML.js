const generateHTML = function (teamMembers) {
    const team = teamMembers;
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Members</title>
  <link rel="stylesheet" href="./assets/css/style.css" />
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main>
        <div class="cards-container">
${team.Manager.map((manager) => {
    return `
    <div class="card">
        <h2>${manager.name}</h2>
        <h3>${manager.getRole()}</h3>
        <ul>
            <li>ID:${manager.id}</li>
            <li><a href="mailto:${manager.email}">Email: ${manager.email}</a></li>
            <li>Office Number:${manager.phone}</li>
        </ul>
</div>`
})
.join(' ')
}
${team.Engineer.map((engineer) => {
    return `
    <div class="card">
        <h2>${engineer.name}</h2>
        <h3>${engineer.getRole()}</h3>
        <ul>
            <li>ID:${engineer.id}</li>
            <li><a href="mailto:${engineer.email}">Email: ${engineer.email}</a></li>
            <li><a href="https://github.com/${engineer.github}" target="_blank">Github: ${engineer.github}</a></li>
        </ul>
</div>`
})
.join(' ')
}
${team.Intern.map((intern) => {
    return `
    <div class="card">
        <h2>${intern.name}</h2>
        <h3>${intern.getRole()}</h3>
        <ul>
            <li>ID:${intern.id}</li>
            <li><a href="mailto:${intern.email}">Email: ${intern.email}</a></li>
            <li>School:${intern.school}</li>
        </ul>
</div>`
})
.join(' ')
}
</div>
</main>
    `
}






module.exports = generateHTML;