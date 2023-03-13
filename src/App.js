import logo from './logo.svg';
import './App.css';
import CreatePost from './components/post-system/create-post';
import Register from './components/register/register';
import LandingPage from './Pages/landing-page';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';

//allow user to post
function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/post" element={<CreatePost/>} />
        </Routes>
        </div>
        </React.StrictMode>
      </BrowserRouter>
    
  );
}

export default App;
