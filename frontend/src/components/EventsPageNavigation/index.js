import { NavLink } from "react-router-dom";
import ProfileButton from '../Navigation/ProfileButton';
import { useSelector } from 'react-redux';


function EventsPageNavigation() {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="events-page-container">
            <nav className="events-page-navigation">
                <div>
                    <NavLink className="eventsPageHomeLink" exact to="/">Gamebrite</NavLink>
                </div>
                <div>
                    <NavLink className="eventsPageEventsLink" to="/events">Events</NavLink>
                    <NavLink className="eventsPageOrdersLink" to="/events/orders">Orders</NavLink>
                </div>
                <div>
                    <ProfileButton className="profilebtn" user={sessionUser} />
                </div>
            </nav>
        </div>
    );
};

export default EventsPageNavigation;