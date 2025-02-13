import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js"; 

// Questions for user input
const questions = [
  {
    type: "input",
    message: "Enter Project Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Enter Project Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter Installation Instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter Testing Requirements:",
    name: "testing",
  },
  {
    type: "input",
    message: "Enter Usage Information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter Contribution Guidelines:",
    name: "contribution",
  },
  {
    type: "list",
    message: "Select a License:",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "Unlicense", "BSD 3-Clause"],
  },
  {
    type: "input",
    message: "Enter Your GitHub Username:",
    name: "github",
  },
  {
    type: "input",
    message: "Enter Your Email:",
    name: "email",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.log(`Successfully created ${fileName}!`);
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile("README.md", markdownContent);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Initialize app
init();