import React from 'react';

const styles = {
  footer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '10vh',
    background: '#dad7cd',
  },
  space: {
    padding: '40px 10px 0 0'
  }
};

export default function Footer() {
  return (
    <div style={styles.footer}>
      <i style={styles.space} class="fa-brands fa-github fa-lg"></i>
      <i style={styles.space} class="fab fa-linkedin-in fa-lg"></i>
    </div>
  );
}