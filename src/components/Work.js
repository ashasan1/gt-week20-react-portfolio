import React, { Component } from 'react';
import mymental from '../screenshots/mymental.PNG';
import traderjocks from '../screenshots/traderjocks.JPG';
import weather from '../screenshots/weather.PNG';
import jsquiz from '../screenshots/jsquiz.PNG';
import dayplanner from '../screenshots/dayplanner.PNG';
import workouttracker from '../screenshots/workouttracker.JPG';
import notetaker from '../screenshots/notetaker.JPG';


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
            "name": "Workout Tracker",
            "githubRepo": "https://github.com/ashasan1/gt-week18-workout-tracker",
            "deployment": "https://gt-week18-workout-tracker.herokuapp.com/"
        },
        {
            "name": "Note Taker",
            "githubRepo": "https://github.com/ashasan1/gt-week11-note-taker",
            "deployment": "https://gt-week11-note-taker.herokuapp.com/"
        },
        {
            "name": "Weather Dashboard",
            "githubRepo": "https://github.com/ashasan1/gt-week6-weather",
            "deployment": "https://ashasan1.github.io/gt-week6-weather/"
        },
        {
            "name": "Day Planner",
            "githubRepo": "https://github.com/ashasan1/gt-week5-day-planner",
            "deployment": "https://ashasan1.github.io/gt-week5-day-planner/"
        },
        {
            "name": "JavaScript Quiz",
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
                <div id="workheader">
                    <h1>Projects</h1>
                </div>
                <div class="card work">
            <h2> {portfolioData.projects[0].name}</h2>
            <p>Link to Github Repo: {portfolioData.projects[0].githubRepo}</p>
            <p>Link to deployed app: {portfolioData.projects[0].deployment}</p>
            <img alt="work" src={mymental}></img>
            
        </div>
        <div class="card work">
            <h2> {portfolioData.projects[1].name}</h2>
            <p>Link to Github Repo: {portfolioData.projects[1].githubRepo}</p>
            <p>Link to deployed app: {portfolioData.projects[1].deployment}</p>
            <img alt="work" src={traderjocks}></img>
            
        </div>
        <div class="card work">
            <h2> {portfolioData.projects[2].name}</h2>
            <p>Link to Github Repo: {portfolioData.projects[2].githubRepo}</p>
            <p>Link to deployed app: {portfolioData.projects[2].deployment}</p>
            <img alt="work" src={workouttracker}></img>
            
        </div>
        <div class="card work">
            <h2> {portfolioData.projects[3].name}</h2>
            <p>Link to Github Repo: {portfolioData.projects[3].githubRepo}</p>
            <p>Link to deployed app: {portfolioData.projects[3].deployment}</p>
            <img alt="work" src={notetaker}></img>
            
        </div>
        <div class="card work">
            <h2> {portfolioData.projects[4].name}</h2>
            <p>Link to Github Repo: {portfolioData.projects[4].githubRepo}</p>
            <p>Link to deployed app: {portfolioData.projects[4].deployment}</p>
            <img alt="work" src={weather}></img>
            
        </div>
        <div class="card work">
            <h2> {portfolioData.projects[5].name}</h2>
            <p>Link to Github Repo: {portfolioData.projects[5].githubRepo}</p>
            <p>Link to deployed app: {portfolioData.projects[5].deployment}</p>
            <img alt="work" src={dayplanner}></img>
            
        </div>
            </div>
            
        </div>
        
        

        </>
      );
}

export default Work