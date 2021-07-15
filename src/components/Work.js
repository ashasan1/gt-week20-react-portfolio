import React, { Component } from 'react';
import mymental from '../screenshots/mymental.PNG';
import traderjocks from '../screenshots/traderjocks.JPG';

let myName = "Asha Sanford";
let portfolioData = {
    "name": "Asha Sanford",
    "skills": ["CSS", "HTML", "JavaScript"],
    "projects": [
        {
            "name": "Mental Health App",
            "githubRepo": "https://github.com/mikebird2414/Well-Being",
            "deployment": "./Assets/screenshots/mymental.PNG"
        },
        {
            "name": "Trader Jocks",
            "githubRepo": "https://github.com/figfacts/gt-bootcamp-project02-Team_Genesis",
            "deployment": "https://traderjocks.herokuapp.com/"
        },
        {
            "name": "Trader Jocks",
            "githubRepo": "https://github.com/figfacts/gt-bootcamp-project02-Team_Genesis",
            "deployment": "https://traderjocks.herokuapp.com/"
        },
    ]
}

console.log(portfolioData.projects);
function Work() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div class="card work">
            <h2>Project Name: {portfolioData.projects[0].name}</h2>
            <img alt="work" src={mymental}></img>
            
        </div>
        <div class="card work">
            <h2>Project Name: {portfolioData.projects[1].name}</h2>
            <img alt="work" src={traderjocks}></img>
            
        </div>
            </div>
            
        </div>
        
        

        </>
      );
}

export default Work