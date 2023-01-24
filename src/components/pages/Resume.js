import React from 'react';

const styles = {
  pdf: {
    height: "100vh",
  },
};

export default function Resume() {
  return (
    <div>
      <object style={styles.pdf} width="100%" height="400" data="http://www.africau.edu/images/default/sample.pdf" type="application/pdf">   </object>
    </div>
  );
}
