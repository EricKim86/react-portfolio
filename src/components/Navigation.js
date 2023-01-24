import React from 'react';

const styles = {
  navigation: {
    background: '#344e41',
    display: 'flex',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  link: {
    color: '#dad7cd',
    fontSize: '28px',
    fontFamily:'Playfair',
    textDecoration: 'underline',
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
        <li className="nav-item">
          <a style={styles.link} href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About</a>
        </li>
        <li className="nav-item">
          <a style={styles.link} href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >Portfolio</a>
        </li>
        <li className="nav-item">
          <a style={styles.link} href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</a>
        </li>
        <li className="nav-item">
          <a style={styles.link} href="#Contact"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
