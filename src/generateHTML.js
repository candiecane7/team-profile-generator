const generateHTML = function(teamMembers){
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
${generateTeam(team)}
</main>
    `
}

const generateTeam = function(teamArr){
    return `
    <div class="cards-container">
    ${teamArr
        .filter(word => word === "Intern")
        .map(({name, email, id, school})=> {
        return `
        <div class="card">
            <h2>${name}</h2>
            <h3>${getRole()}</h3>
            <ul>
                <li>"ID:${id}"</li>
                <li>"Email:${email}"</li>
                <li>"School:${school}"</li>
            </ul>
        </div>`
        }) 
    }
  </div>`  
}

module.exports = generateHTML;