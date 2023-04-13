const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const fs = require('fs');

const teamMembers = [];

function promptManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team manager's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
    },
  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptTeam();
  });
}

function promptTeam() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Finish building my team'],
    },
  ]).then(answers => {
    switch (answers.role) {
      case 'Engineer':
        promptEngineer();
        break;
      case 'Intern':
        promptIntern();
        break;
      default:
        buildTeam();
    }
  });
}

function promptEngineer() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub username?",
    },
  ]).then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    promptTeam();
  });
}

function promptIntern() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email?",
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
    },
  ]).then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    promptTeam();
  });
}

function buildTeam() {
  const html = generateHtml(teamMembers);
  fs.writeFile('./dist/team.html', html, err => {
    if (err) throw err;
    console.log('Team profile generated successfully!');
  });
}

promptManager();
