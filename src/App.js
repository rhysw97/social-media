import CreatePost from './Pages/post-page/create-post';
import Register from './Pages/register/register';
import LandingPage from './Pages/landing-page/landing-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import Navbar from './components/UI/navbar/navbar';
import "./assets/main.css"
import { USERNAME, LOGGEDIN } from './data/contexts';
import EditProfile from './Pages/edit-profile/edit-profile';
import ProfilePage from './Pages/Profile/profile-page';
import PrivateRoutes from './utils/PrivateRoutes';
import Events from './Pages/events/events';

//allow user to post
function App() {
  const [usernameContext, setUsernameContext] = useState('')
  const [loggedInContext, setLoggedInContext] = useState(false)
  //routing to allow page like structure to app
  return (
    <BrowserRouter>
      <USERNAME.Provider value={{usernameContext, setUsernameContext}}>
      <LOGGEDIN.Provider value={{loggedInContext, setLoggedInContext}}>
        <div className='bg-slate-400 min-h-screen'>
        <div className="relative max-w-[1480px] mx-auto bg-white min-h-screen">
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/register" element={<Register/>} />
              <Route element={<PrivateRoutes/>}>
                <Route path="/post" element={<CreatePost/>} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/edit-profile" element={<EditProfile/>} />
                <Route path="/events" element={<Events/>} />
              </Route>
          </Routes>
          <Navbar/>
        </div>
        </div>
      </LOGGEDIN.Provider>
      </USERNAME.Provider>
    </BrowserRouter>
  
  );
}

export default App;
