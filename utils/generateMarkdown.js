// Function to return the license badge
function renderLicenseBadge(license) {
  if (license && license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license.replace(/\s+/g, "_")}-blue.svg)\n\n`;
  }
  return "";
}

// Function to return the license link
function renderLicenseLink(license) {
  const licenseLinks = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    "Unlicense": "https://unlicense.org/",
  };
  return licenseLinks[license] ? `[License Details](${licenseLinks[license]})` : "";
}

// Function to return the license section content
function renderLicenseSection(license) {
  if (license && license !== "None") {
    return `## License  
This project is licensed under the **${license}** license.  
${renderLicenseLink(license)}\n`;
  }
  return "## License\nThis project is **not licensed**.\n";
}

// Function to format user input safely (handle empty values)
function formatInput(input) {
  return input && input.trim() ? input : "_No information provided._";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${formatInput(data.title)}

${renderLicenseBadge(data.license)}

##  Description  
${formatInput(data.description)}

##  Table of Contents  
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [Contributing](#contributing)  
- [Tests](#tests)  
- [Contact](#contact)  

##  Installation  
${formatInput(data.installation)}

## Usage  
${formatInput(data.usage)}

${renderLicenseSection(data.license)}

##  Contributing  
${formatInput(data.contributing)}

##  Tests  
${formatInput(data.tests)}

## Contact  
If you have any questions, feel free to reach out:

-  **GitHub:** [${formatInput(data.github)}](https://github.com/${data.github})  
-  **Email:** [${formatInput(data.email)}](mailto:${data.email})  
`;
}

module.exports = generateMarkdown;