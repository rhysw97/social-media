
import CreatePost from './Pages/post-page/create-post';
import Register from './Pages/register/register';
import LandingPage from './Pages/landing-page/landing-page';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React, { createContext } from 'react';
import "./assets/main.css"

//allow user to post
function App() {
  const UserContext = createContext()
  const loggedIn = createContext()
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
