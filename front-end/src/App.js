import React from 'react';
import './App.css';
import CustomComponent from './CustomComponent';

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <img src={'http://10.195.118.144:5000/video_feed'} className="video-img" alt="logo" />
        <CustomComponent />
      </body>
    </div>
  );
}

export default App;