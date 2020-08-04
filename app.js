const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
newMember();
function newMember() {

    inquirer
        .prompt({
            type: "list",
            name: "title",
            message: "What is the Job Title of this employee?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "No more employees in team"
            ]
        })
        .then(({ title }) => {
            // switch and case for every type of employee
            switch (title) {
                case "Manager":
                    managerCreate();
                    break;

                case "Engineer":
                    engineerCreate();
                    break;

                case "Intern":
                    internCreate();
                    break;

                case "No more employees in team":
                    generateHTML();
                    break;

            }
        })
}

// Manager inquire function
function managerCreate(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "mgrName",
            message: "What's this team manager's name?"        
        },
        {
            type: "input",
            name: "mgrId",
            message: "What's this manager's ID number?"
        },
        {
            type: "input",
            name: "mgrEmail",
            message: "What's this manager's e-mail address?"
        },
        {
            type: "input",
            name: "mgrOffNum",
            message: "What's this manager's office phone number?"
        }
    ])
}

function engineerCreate(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "engName",
            message: "What's this engineer's name?"        
        },
        {
            type: "input",
            name: "engId",
            message: "What's this engineer's ID number?"
        },
        {
            type: "input",
            name: "engEmail",
            message: "What's this engineer's e-mail address?"
        },
        {
            type: "input",
            name: "engGithub",
            message: "What's this engineer's github username?"
        }
    ])
}

function internCreate(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "intName",
            message: "What's this intern's name?"        
        },
        {
            type: "input",
            name: "intId",
            message: "What's this intern's ID number?"
        },
        {
            type: "input",
            name: "intEmail",
            message: "What's this intern's e-mail address?"
        },
        {
            type: "input",
            name: "intSchool",
            message: "What school is this intern studying at/graduated from?"
        }
    ])
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function generateHTML(){

}
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
