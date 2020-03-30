import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './avatar.js';
import BartData from './bart.js';

function App() {
  return (
    <div className="App">
      
        
        <Avatar firstName='Homer' image="https://vignette.wikia.nocookie.net/simpsons/images/3/33/Homer.png/revision/latest/scale-to-width-down/340?cb=20110703093455&path-prefix=fr" lastName='SIMPSON' />
        <Avatar firstName='Marge' image="https://vignette.wikia.nocookie.net/simpsons/images/a/a1/Marge_Simpsons.png/revision/latest/scale-to-width-down/340?cb=20130817213926&path-prefix=fr" lastName='SIMPSON' />
        <Avatar firstName='Bart' image="https://img.20mn.fr/MB0FPhiQS5i8gBmTUKVRJg/830x532_rip-bart-temporairement.jpg" lastName='SIMPSON' />
        <Avatar {...BartData} />
    </div>
  );
}

export default App;
