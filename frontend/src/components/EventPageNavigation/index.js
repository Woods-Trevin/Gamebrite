import { NavLink } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import { useDispatch, useSelector } from 'react-redux';

function EventPageNavigation() {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <nav>
            <NavLink to="/">Gamebrite</NavLink>
            <div>
                <ProfileButton className="profilebtn" user={sessionUser} />
            </div>
        </nav>
    )
}

export default EventPageNavigation;