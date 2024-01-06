import NavbarIcon from "./navbar-icon"
import NavbarIconFunction from "./navbar-icon-function"
import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo, FaAccusoft, FaSignOutAlt} from 'react-icons/fa'
import { LOGGEDIN, USERNAME } from "../../../data/contexts"
import { useContext } from "react"
import { postRequest } from "../../../utils/server-queries.ts"

export default function Navbar() {
    const {loggedInContext, setLoggedInContext} = useContext(LOGGEDIN)
    const {usernameContext, setUsernameContext } = useContext(USERNAME)

    function handleLogoutResponse() {
        postRequest('logout', {});
        setLoggedInContext(() => false)
        setUsernameContext(() => null)
    }

    return (
        <div className="navbar fixed top-0 min-h-screen w-16 
        flex flex-col justify-end sm:justify-start
        bg-gray-900 text-white shadow-lg">
            <NavbarIcon icon={<FaFire size="28" />} path={'/profile'} text='Profile' />
            <NavbarIcon icon={<BsPlus size="32" />} path={'/edit-profile'} text='Edit Profile'/>
            <NavbarIcon icon={<BsFillLightningFill size="20" />} path={'/post'} text='Feed' />
            <NavbarIcon icon={<BsFillLightningFill size="20" />} path={'/events'} text='Events' />
            <NavbarIcon icon={<FaPoo size="20" />} text='Landing Page'/>
            <NavbarIconFunction icon={<FaSignOutAlt size="20" />} callback={handleLogoutResponse} text='Logout'/>

        </div>
    )
}