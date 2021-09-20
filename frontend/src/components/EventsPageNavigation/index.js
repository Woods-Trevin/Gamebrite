import { NavLink } from "react-router-dom";
import ProfileButton from '../Navigation/ProfileButton';
import { useSelector } from 'react-redux';
import './EventsPageNav.css'


function EventsPageNavigation() {
    const sessionUser = useSelector(state => state.session.user);
    let reload;
    if (reload) {
        window.location.reload();
        reload = false
    }
    // {reload = true}
    return (
        <div className="events-page-container">
            <nav className="events-page-navigation">
                <div className="homeLink-container">
                    <NavLink className="eventsPageHomeLink" exact to="/">Gamebrite{reload = true}</NavLink>
                </div>
                <div className="eventsLink-container">
                    <NavLink className="eventsPageEventsLink" to="/events">Events{reload = true}</NavLink>
                    <NavLink className="eventsPageOrdersLink" to="/events/orders">Orders{reload = true}</NavLink>
                </div>
                <div className="profilebtn-container">
                    <ProfileButton className="profilebtn" user={sessionUser}>{reload = true}</ProfileButton>
                </div>
            </nav>
        </div>
    );
};

export default EventsPageNavigation;