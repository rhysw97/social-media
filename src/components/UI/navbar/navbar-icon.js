import { useNavigate } from "react-router-dom"

export default function NavbarIcon({icon, text='tooltip'}, path='/') {
    const navigate = useNavigate()

    const navigateToPage = () => {
        console.log('to the profile page')
        navigate('profile')
    }
    return (
        <div onClick={navigateToPage} className="navbar-icon group">
            {icon}

            <span className="navbar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}