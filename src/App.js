import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:'100px'}}>
        <Main/>
      </div>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
