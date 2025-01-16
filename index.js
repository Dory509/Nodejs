import inquirer from "inquirer";

const userQuestions = [
  {
    type:"input",
    message:"Enter Project Title",
    name:"title"
  },
  {
    type:"input",
    message:"Enter project description",
    name:"Description"
  },
  {
    type:"input",
    message:"Enter project installation",
    name: "Installation"
  },

    {
      type:"input",
      message:"Enter testing requirement for the project",
      name:"testing"
    },
    {
      type:"input",
      message:"Enter Project Usage Information",
      name:"Usage"
    },
    {
      type:"input",
      message:"Enter Contribution Guideline",
      name:"Contribution"
    },
    {
      type:"list",
      message:"Select Project License",
      name:"license",
      choices:["MIT","ISC","APACHE","GPL","The Unlicensed","BSD"]
    },
    {
      type:"input",
      message:"Enter Project Github",
      name:"Github"
    },
    {
      type:"input",
      message:"Enter Rmail ",
      name:"Email"
    },
]


inquirer.prompt(userQuestions)
.then((response) => {
  console.log(response)
})