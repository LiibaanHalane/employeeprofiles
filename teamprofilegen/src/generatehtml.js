function generateCard(teamMember) {
    let roleSpecificInfo = '';
  
    switch (teamMember.getRole()) {
      case 'Manager':
        roleSpecificInfo = `Office Number: ${teamMember.officeNumber}`;
        break;
      case 'Engineer':
        roleSpecificInfo = `GitHub: <a href="https://github.com/${teamMember.github}" target="_blank">${teamMember.github}</a>`;
        break;
      case 'Intern':
        roleSpecificInfo = `School: ${teamMember.school}`;
        break;
    }
  
    return `
      <div class="card">
        <div class="card-header">
          <h2>${teamMember.name}</h2>
          <h3>${teamMember.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul>
            <li>ID: ${teamMember.id}</li>
            <li>Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></li>
            <li>${roleSpecificInfo}</li>
          </ul>
        </div>
      </div>
    `;
  }
  
  function generateHtml(teamMembers) {
    const cards = teamMembers.map(generateCard).join('\n');
  
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" />
    <style>
      /* Add CSS styles here */
    </style>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${cards}
    </main>
  </body>
  </html>
    `;
  }
  
  module.exports = generateHtml;
  