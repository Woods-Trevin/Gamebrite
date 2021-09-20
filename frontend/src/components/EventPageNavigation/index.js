import { NavLink } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import { useSelector } from 'react-redux';
import './EventPageNavigation.css'

function EventPageNavigation() {
    const sessionUser = useSelector(state => state.session.user);
    let reload;
    if (reload) {
        window.location.reload();
        reload = false
    }
    // {reload = true}

    return (
        <nav className="outterContainer">
            <NavLink className="GamebriteLogo" to="/">Gamebrite</NavLink>
            <div className="profilebtnOtherEvents">
                <ProfileButton user={sessionUser}>{reload = true}</ProfileButton>
            </div>
        </nav>
    )
}

export default EventPageNavigation;