import React, { Component } from 'react';

let myName = "Asha Sanford";
let portfolioData = {
    "name": "Asha Sanford",
    "skills": ["CSS", "HTML", "JavaScript"],
    "projects": [
        {
            "name": "Mental Health App",
            "githubRepo": "https://github.com/mikebird2414/Well-Being",
            "imageSource": "./Assets/screenshots/mymental.PNG"
        },
        {
            "name": "Trader Jocks",
            "githubRepo": "https://github.com/figfacts/gt-bootcamp-project02-Team_Genesis",
            "imageSource": "null"
        },
    ]
}

console.log(portfolioData.projects);
function Work() {
    return (
        <div>
            <h1>Work</h1>
            <h1>Project Name: {portfolioData.projects[0].name}</h1>
            <img alt="work" src="https://drive.google.com/file/d/19mT2voMom--8FLZroqaDB5oZUHPGNs6F/view?usp=sharing"></img>
            
        </div>

        
      );
}

export default Work