import React from 'react';
import profileImage from '../../images/profile.png'

const styles = {
  h1: {
    fontSize: '28px',
    padding: '10px 50px 0 50px',
  },
  h2: {
    fontSize: '22px',
    padding: '10px 50px 0 50px',
  },
  p: {
    fontSize: '18px',
    padding: '5px 50px 0 50px',
  },
  image: {
    margin: '10px 0 20px 50px',
    width: '50%',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'brightness(100%)',
  },
  inline: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    flex: '1',
    margin: '50px 0 50px 0',
    width: '18rem',
    background: '#dad7cd',
  },
  card: {
    margin: '50px 0 50px 0',
    width: '35rem',
    background: '#dad7cd',
  },
  ul: {
    listStyle: 'none',
  }
};

export default function About() {
  return (
    <div>
      <div style={styles.inline} className='container inline'>
        <div style={styles.container} className='container'>
          <img style={styles.image} class="img-fluid" src={profileImage} alt='profile' />
        </div>
        <div style={styles.card} class='container'>
          <h2 style={styles.h2}><i class="fa-solid fa-award"></i> Professional Accolades <i class="fa-solid fa-award"></i></h2>
          <section className='card-body'>
            <ul style={styles.ul} class='card-text'>
              <li>Leadership Award - 2009</li>
              <li>Company Spirit Award - 2011</li>
              <li>Top Performer Shrink Management - June 2012</li>
              <li>Top Performer Shrink Management - October 2014</li>
              <li>Top Performer Shrink Management - November 2014</li>
              <li>Customer Satisfaction 100 - December 2014</li>
              <li>Outstanding Service Award - 2017</li>
            </ul>
          </section>
        </div>
      </div>
      <div className='container'>
      <h2 style={styles.h2}><i class="fa-solid fa-school"></i> Education</h2>
        <p style={styles.p}>
         I have a Bachelor of Arts in Music Industry and a Bachelor of Science in Electronic Engineering.  I am currently attending the UPenn bootcamp program for full-stack development.
        </p>
        <h2 style={styles.h2}><i class="fas fa-briefcase"></i> Professional Career</h2>
        <p style={styles.p}>
          In late 2022, I resigned as a District Manager of a sales organization to pursue other passions and to have more time to
          spend with my family.  Through my 14 years with the organization, I had the wonderful experience of living in multiple
          states and had the ability to travel across the country fairly frequently.  I spent a few years in California at the
          corporate office as the Manager of Sales Administration and Retail Support for the entire organization.  As a District
          Manager, I was not only responsible for motivating my direct reports, but also analyzing sales trends to maximize EBITDA
          and generate incremental revenue.  Through my experience as a District Manager, I became proficient in Excel, specifically with Vlookup, Pivot tables, and VBA & Macros.
        </p>
        <h2 style={styles.h2}><i class="fa-solid fa-user"></i> Personal</h2>
        <p style={styles.p}>
          My wife Elizabeth works as an Economist for the Bureau of Labor Statistics.  We have an incredibly intelligent son who recently
          turned 5 years old in August of 2022.  As a family, we enjoy playing video and board games together.  My wife and I enjoy
          Role Playing games that can be played cooperatively.  My son has a passion for Roblox and Minecraft and is getting fairly proficient
          with redstone.  We enjoy going to various local restaurants to experience food from different cultures.  We also have two lovely and wonderful dogs.
        </p>
      </div>
    </div>
  );
}
