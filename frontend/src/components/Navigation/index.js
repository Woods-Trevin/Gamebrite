import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';


function Navigation({ isLoaded }) {
    const [search, setSearch] = useState("")
    const sessionUser = useSelector(state => state.session.user);
    let [reload, setReload] = useState(false);
    if (reload) {
        window.location.reload();
        reload = false
    }
    // {reload = true}

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                {reload = true}
                <div className="userNavlinks">
                    <NavLink to="/event/basicInfo"> Create Event </NavLink>
                    <NavLink to="/bookmarks"> Bookmarks </NavLink>
                    <NavLink to="/tickets" onClick={() => setReload(true)}> Tickets </NavLink>
                </div>
                <ProfileButton className="profilebtn" user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                {reload = true}
                <LoginFormModal />
                <NavLink className="signupbtn" to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className="browsepage-container">
            <div className="nav-container">
                <li className="navlinks">
                    {reload = true}
                    <NavLink className="Home" exact to="/">Gamebrite</NavLink>
                    <label className="nav-search">
                        <input
                            className="searchInput"
                            type="text" name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Events"
                        />
                    </label>
                    {isLoaded && sessionLinks}
                </li>
            </div>
            <div className="browsepageImg-container">
                <img className="browsepageImg" src="https://eventbrite-s3.s3.amazonaws.com/marketing/homepage/Daybreaker_tablet_1067x470.jpg" alt="GamebriteImg"></img>
            </div>
        </div>
    );
}

export default Navigation;