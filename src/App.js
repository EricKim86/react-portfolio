import React from "react";
import Header from "./components/Header";
// import Project from "./components/Project";
import Footer from "./components/Footer";

const styles = {
    body: {
      background: '#dad7cd',
      height: '100%',
      fontFamily: 'Roboto',
    },
}

const App = () => 
<div style={styles.body}>
<Header/>
{/* <Project/>; */}
<Footer/>
</div>

export default App;
