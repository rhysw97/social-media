

export default function NavbarIcon({icon, text='tooltip'}) {
    return (
        <div className="navbar-icon group">
            {icon}

            <span class="navbar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}