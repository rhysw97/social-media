import NavbarIcon from "./navbar-icon"
import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'

export default function Navbar() {
    return (
        <div className="navbar fixed top-0 left-0 h-screen w-16 
        flex flex-col
        bg-gray-900 text-white shadow-lg">
            <NavbarIcon icon={<FaFire size="28" />} text='Profile' />
            <NavbarIcon icon={<BsPlus size="32" />} />
            <NavbarIcon icon={<BsFillLightningFill size="20" />} />
            <NavbarIcon icon={<FaPoo size="20" />} />
        </div>
    )
}