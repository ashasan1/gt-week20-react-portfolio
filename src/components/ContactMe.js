import React from 'react';
import profile from '../screenshots/profilepic.jfif';

function ContactMe() {
    return (
      <>
      <div id ="contactme" className="container">
        <div className="row">
          <div className="col md">
            <h1>Contact Me</h1>
                <p>Asha Sanford is available to contact for all inqueries. Please inlcude your name and reason for contact.</p>
                <p>Phone:</p> 
                <p>(313)-461-5358</p>
                <p>Email:</p> <p>sanford.asha97@yahoo.com</p>
                <p>Github Link:</p>
                <p>https://github.com/ashasan1</p>
               <a href="https://drive.google.com/file/d/1MDxhq5rMatuXIs3rU600Dds5lhzELxTO/view?usp=sharing"><h2>Resume</h2></a>
          </div>
          <div className="col md">
            <img id="profile" src={profile}></img>
          </div>
          
        </div>
          
      </div>
      </>
    );
  }

export default ContactMe;