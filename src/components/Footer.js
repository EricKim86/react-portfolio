import React from 'react';
import '../styles/hover.css';

const styles = {
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '20vh',
    background: '#dad7cd',
  },
  space: {
    padding: '40px 30px 0 0',
    fontSize: '50px'
  },
};

export default function Footer() {
  return (
    <div style={styles.footer}>
      <a href='https://github.com/EricKim86' target="blank"><i style={styles.space} class='fa-brands fa-github glow'></i></a>
      <a href='https://www.linkedin.com/in/eric-kim-221a437b/' target='blank'><i style={styles.space} class='fab fa-linkedin-in glow'></i></a>
      <a href='mailto:erickimek86@gmail.com'><i style={styles.space} class='fa fa-envelope glow' aria-hidden='true'></i></a>
    </div>
  );
}