import React from 'react';
import '../styles/hover.css';

const styles = {
  navigation: {
    background: '#344e41',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '100%',
    minHeight: '15vh',
  },
  link: {
    color: '#dad7cd',
    fontSize: '24px',
    fontFamily:'Playfair',
    textDecoration: 'none',
  },
  header: {
    color: '#dad7cd',
    fontSize: '38px',
  }
};

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="container-fluid" style={styles.navigation}>
      <h1 style={styles.header}>Eric Kim</h1>
      <ul className="nav">
        <li className="nav-item glow">
          <a style={styles.link} href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >ABOUT</a>
        </li>
        <li className="nav-item glow">
          <a style={styles.link} href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >PORTFOLIO</a>
        </li>
        {/* <li className="nav-item glow">
          <a style={styles.link} href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >CONTACT</a>
        </li> */}
        <li className="nav-item glow">
          <a style={styles.link} href="#Contact"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >RESUME</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
