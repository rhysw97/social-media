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
import CreateEventPost from './Pages/post-page/create-event-post';

//allow user to post
function App() {
  const [usernameContext, setUsernameContext] = useState('')
  const [loggedInContext, setLoggedInContext] = useState(false)
  //routing to allow page like structure to app
  return (
    <BrowserRouter>
      <USERNAME.Provider value={{usernameContext, setUsernameContext}}>
      <LOGGEDIN.Provider value={{loggedInContext, setLoggedInContext}}>
        <div className='min-h-screen '>
        <div className="fixed min-h-screen w-screen top-0 left-0" style={{
                backgroundImage: 'url(https://www.lastminutemusicians.com/how_to_get_gigs/wp-content/uploads/2012/04/Live-gig.jpg)',
                filter: 'blur(8px)',
                zIndex: '-10',
            }}></div>
            <div className="fixed -z-10 min-h-screen w-screen top-0 left-0 bg-black opacity-40" ></div>
        <div className="relative mx-auto min-h-screen">
          <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/register" element={<Register/>} />
              <Route element={<PrivateRoutes/>}>
                <Route path="/post" element={<CreatePost/>} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/edit-profile" element={<EditProfile/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/event-feed" element={<CreateEventPost/>} />
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
