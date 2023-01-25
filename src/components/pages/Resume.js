import React from 'react';
import resume from '../../images/resume.pdf'

const styles = {
  pdf: {
    height: "100vh",
  },
};

export default function Resume() {
  return (
    <div>
      <object style={styles.pdf} width="100%" height="400" data={resume} type="application/pdf"></object>
    </div>
  );
}
