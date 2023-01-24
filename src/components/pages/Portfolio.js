import React from 'react';
import '../../styles/hover.css';
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'
import project4 from '../../images/project4.png'
import project5 from '../../images/project5.png'
import project6 from '../../images/project6.png'

const styles = {
  image: {
    width: '100%',
  },
  text: {
    position: 'absolute',
    bottom: '8px',
    left: '16px',
  },
  btn: {
    margin: '10px',
  },
  card: {
    margin: '25px',
  }
}

export default function Portfolio() {
  return (
    <div class="container">
      <div class="row">

        <div class="col ">
          <div  style={styles.card} class="card project">
            <img style={styles.image} src={project1} alt='profile' />
            <div class="card-body">
              <h5 class="card-title">Disney Character Locator</h5>
              <p class="card-text">Find your favorite Disney character's and discover all the movies they have appeared in.  This application utilizes two separate APIs to populate data for the user.  Furthermore, this application demonstrate the usage of Bulma as a css framework.</p>
              <a href="https://github.com/EricKim86/disney-character-locator" style={styles.btn} class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://erickim86.github.io/disney-character-locator/" style={styles.btn} class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
        </div>

        <div class="col ">
          <div  style={styles.card} class="card project">
            <img style={styles.image} src={project2} alt='profile' />
            <div class="card-body">
              <h5 class="card-title">Ben's Friends</h5>
              <p class="card-text">A mock e-commerce site integrated with a social media platform.  This project utilizes Node.js and Express.js to create a RESTful API.  In additional, Handlebars.js provides the view for the user. MySQL, in conjunction with Sequelize provides the database.</p>
              <a href="https://github.com/EricKim86/bens-friends" style={styles.btn} class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://secure-oasis-69885.herokuapp.com/" style={styles.btn} class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
        </div>

        <div class="w-100"></div>

        <div class="col ">
          <div  style={styles.card} class="card project">
            <img style={styles.image} src={project3} alt='profile' />
            <div class="card-body">
              <h5 class="card-title">Video Game Quiz</h5>
              <p class="card-text">Test your nintendo knowledge with this fun quiz!  Demonstrates usage of local storage to save the user's highscore, event listeners, and query selectors.</p>
              <a href="https://github.com/EricKim86/video-game-quiz" style={styles.btn} class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://erickim86.github.io/video-game-quiz/" style={styles.btn} class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
        </div>

        <div class="col ">
          <div  style={styles.card} class="card project">
            <img style={styles.image} src={project4} alt='profile' />
            <div class="card-body">
              <h5 class="card-title">Work Day Scheduler</h5>
              <p class="card-text">A convenient scheduler the allows a user to plan our their day efficiently. This application utilizes Day.js and local storage.</p>
              <a href="https://github.com/EricKim86/work-day-schedule" style={styles.btn} class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://erickim86.github.io/work-day-schedule/" style={styles.btn} class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
        </div>

      
        <div class="w-100"></div>

        <div class="col ">
          <div  style={styles.card} class="card project">
            <img style={styles.image} src={project5} alt='profile' />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Never struggle again with creating a password with this amazing Password Generator application.  This application demonstrates basic javascript concepts and conditional statements to generate a random password based on the user's selected criteria. </p>
              <a href="https://github.com/EricKim86/password-generator" style={styles.btn} class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://erickim86.github.io/password-generator/" style={styles.btn} class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
        </div>

        <div class="col ">
          <div  style={styles.card} class="card project">
            <img style={styles.image} src={project6} alt='profile' />
            <div class="card-body">
              <h5 class="card-title">Just Another Text Editor</h5>
              <p class="card-text">This single-page application is text editor that runs in a user's browser and meets the PWA criteria.  In addition, the app has the ability to function offline utilizing webpack and service workers.</p>
              <a href="https://github.com/EricKim86/progressive-web-application-text-editor" style={styles.btn} class="btn btn-primary" target="blank">GitHub</a>
              <a href="https://hidden-hamlet-22116.herokuapp.com/" style={styles.btn} class="btn btn-primary" target="blank">Deployment</a>
            </div>
          </div>
        </div>
    
      </div>
    </div>

  );
}
