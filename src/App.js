
import CreatePost from './Pages/post-page/create-post';
import Register from './Pages/register/register';
import LandingPage from './Pages/landing-page/landing-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import Navbar from './components/UI/navbar/navbar';
import "./assets/main.css"
import { USERNAME, LOGGEDIN } from './data/contexts';
import EditProfile from './Pages/edit-profile/edit-profile';



//allow user to post
function App() {
  const [usernameContext, setUsernameContext] = useState('')
  const [loggedInContext, setLoggedInContext] = useState(false)

  return (
    <BrowserRouter>
      <React.StrictMode>
        <USERNAME.Provider value={{usernameContext, setUsernameContext}}>
        <LOGGEDIN.Provider value={{loggedInContext, setLoggedInContext}}>
          <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/post" element={<CreatePost/>} />
                <Route path="/profile" element={<CreatePost/>} />
                <Route path="/edit-profile" element={<EditProfile/>} />
            </Routes>
            <Navbar/>
          </div>
        </LOGGEDIN.Provider>
        </USERNAME.Provider>
        </React.StrictMode>
      </BrowserRouter>
    
  );
}

export default App;
