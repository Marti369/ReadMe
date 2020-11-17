// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}

  ## Description 
  ${data.description}

  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## License 
  
  ${data.license}
  
  ## Contributing
  
  ${data.guidelines}
  
  ## Tests 
  
  ${data.test}
  

  ## Questions 
  Please see my Github.com user name below!
  
  Github Username : ${data.github}
  
  Click the link below to access my project repositories
  
  [Github Profile](https://github.com/${data.github})
  
  
  Please feel free to [email me](${data.email}) if you have any questions. I will get back to you as
  soon as possible.
  Thank You!
`;
}

module.exports = generateMarkdown;