import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/navBar'; 
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).toUpperCase();
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <h1 className='text-center titlePage'>THE DIGITAL TIMES</h1>
        <div className="text-center dateTime" style={{fontSize : "1.5rem", marginBottom : "0.2rem"}}>{currentDate}</div>
        <NavBar /> 
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes> 
          <Route path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general' />} />
          <Route path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} country='in' category='business' />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />} />
          <Route path='/general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general' />} />
          <Route path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country='in' category='health' />} />
          <Route path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country='in' category='science' />} />
          <Route path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country='in' category='sports' />} />
          <Route path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country='in' category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
