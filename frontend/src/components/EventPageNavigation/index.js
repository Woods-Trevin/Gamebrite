import { NavLink } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import { useSelector } from 'react-redux';

function EventPageNavigation() {
    const sessionUser = useSelector(state => state.session.user);
    let reload;
    if (reload) {
        window.location.reload();
        reload = false
    }
    // {reload = true}

    return (
        <nav>
            <NavLink to="/">Gamebrite</NavLink>
            <div>
                <ProfileButton className="profilebtn" user={sessionUser}>{reload = true}</ProfileButton>
            </div>
        </nav>
    )
}

export default EventPageNavigation;