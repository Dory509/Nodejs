const licenseRender=(license) =>{
    if(license === "MIT"){
        return `
     ![GitHub license](https://img.shields.io/badge/license-${license.replace(
      ' ',
      '_'
    )}-green.svg)
    [For further Details](https://choosealicense.com/licenses/mit/)
        `
    }else if(license === "GPL"){
        return `
        ![GitHub license](https://img.shields.io/badge/license-${license.replace(
         ' ',
         '_'
       )}-green.svg)
       [For further Details](https://choosealicense.com/licenses/gpl-3.0/)
           `
    }
    else if(license === "APACHE"){
        return `
        ![GitHub license](https://img.shields.io/badge/license-${license.replace(
         ' ',
         '_'
       )}-green.svg)
       [For further Details](https://choosealicense.com/licenses/apache-2.0/)
           `
    }
    else if(license === "BSL"){
        return `
        ![GitHub license](https://img.shields.io/badge/license-${license.replace(
         ' ',
         '_'
       )}-green.svg)
       [For further Details](https://choosealicense.com/licenses/bsl-1.0/)
           `
    }
    else{
        return `
        ![GitHub license](https://img.shields.io/badge/license-${license.replace(
         ' ',
         '_'
       )}-green.svg)
       [For further Details](https://choosealicense.com/licenses/unlicense/)
           `
    }
}
const render = (userData) => {
    return(`

        # Project Title : ${userData.title}


        ## Table Of Contents
        
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#License)
        * [Contribution](#contribution)
        * [Testing](#testing)
        *  [Contact](#contact)
       

        ### Description
        ${userData.Description}s


        ### Installation
        ${userdata.Installation}


        ### Usage
        ${userData.Usage}


        ### License
        ${licenseRender(userData.license)}

        
        ### Contribution
        ${userData.Contribution}
        
        ### Testing
        ${userData.Testing}
        
        ### Contact

        Feel free to reahc me if you have any questions regarding this project at ${userData.Email}
        Check my other works, feel free to reach
        
        [Github](https://github.com/${userData.Github})
        `)
}