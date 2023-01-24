import React from 'react';
import profileImage from '../../images/profile.png'

const styles = {
  h1: {
    fontFamily: 'Helvetica',
    fontSize: '28px',
    padding: '10px 50px 0 50px',
  },
  p: {
    fontFamily: 'Helvetica',
    fontSize: '18px',
    padding: '5px 50px 0 50px',
  },
  image: {
    padding: '10px 0 20px 50px',
    width: '375px',
    height: '311px',
  },
};

export default function About() {
  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>About Me</h1>
      <img style={styles.image} src={profileImage} alt="profile" />
      <p style={styles.p}>
        My name is Eric Kim.  I have a Bachelor of Arts in Music Industry and a Bachelor of Science in Electronic Engineering.
        I recently resigned as a District Manager of a sales organization to pursue other passions and to have more time to
        spend with my family.  Through my 14 years with the organization, I had the wonderful experience of living in multiple
        states and had the ability to travel across the country fairly frequently.  I spent a few years in California at the
        corporate office as the Manager of Sales Administration and Retail Support for the entire organization.  As a District
        Manager, I was not only responsible for motivating my direct reports, but also analyzing sales trends to maximize ebitda
        and generate incremental revenue.  While I did not have coding experience prior to attending the UPenn bootcamp program,
        I was proficent in Excel, specifically with Vlookup, Pivot tables, and VBA & Macros.
      </p>
      <p style={styles.p}>
        My wife Elizabeth works as an Economist for the Bureau of Labor Statistics.  We have an incredibly intelligent son who recently
        turned 5 years old in August of 2022.  As a family, we enjoy playing video and board games together.  My wife and I enjoy
        Role Playing games that can be played cooperatively.  My son has a passion for Roblox and Minecraft and is getting fairly proficient
        with redstone.  We also enjoy experiencing food from different cultures.
      </p>
    </div>
  );
}