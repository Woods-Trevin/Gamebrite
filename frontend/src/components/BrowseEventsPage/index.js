import { useEffect, useState } from 'react';
import './BrowseEventsPage.css';
import * as eventActions from '../../store/event'
import * as bookmarkActions from '../../store/bookmark'
// import * as venueActions from '../../store/venue'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';



function BrowseEventsPage() {
    const dispatch = useDispatch();
    const allEvents = useSelector(state => state.events.events);
    const user = useSelector(state => state.session.user);
    console.log(user)
    let reload;
    if (reload === true) {
        window.location.reload();
        console.log("reloading browser...")
        reload = false
    }
    // {reload = true}

    // const [categoryId, setCategoryId] = useState(0);
    const [browse, setBrowse] = useState(false);
    const [tournament, setTournament] = useState(false);
    const [LAN, setLAN] = useState(false);
    const [casual, setCasual] = useState();
    const [competitive, setCompetitive] = useState(false);
    const [LFG, setLFG] = useState(false);
    const [raid, setRaid] = useState(false);
    const [teamUp, setTeamUp] = useState(false);
    const [charity, setCharity] = useState(false);

    // const categoryIdAsInt = parseInt(categoryId)
    // console.log(categoryIdAsInt);

    let renderElement;
    let renderBrowseElement;
    if (browse) {
        renderElement = (
            allEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        {reload = true}
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )
        )
    } else if (tournament) {
        const tournamentEvents = allEvents?.filter(event => event.categoryId === 1)
        // console.log(tournamentEvents);
        renderElement = (
            tournamentEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )
        )

    } else if (LAN) {
        const LANEvents = allEvents?.filter(event => event.categoryId === 2)
        // console.log(LANEvents);
        renderElement = (

            LANEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )

        )

    } else if (casual) {
        const casualEvents = allEvents?.filter(event => event.categoryId === 3)
        // console.log(casualEvents);
        renderElement = (

            casualEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )

        )

    } else if (competitive) {
        const competitiveEvents = allEvents?.filter(event => event.categoryId === 4)
        // console.log(competitiveEvents);
        renderElement = (

            competitiveEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )

        )

    } else if (LFG) {
        const LFGEvents = allEvents?.filter(event => event.categoryId === 5)
        // console.log(LFGEvents);
        renderElement = (

            LFGEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )

        )

    } else if (raid) {
        const raidEvents = allEvents?.filter(event => event.categoryId === 6)
        // console.log(raidEvents);
        renderElement = (

            raidEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )

        )

    } else if (teamUp) {
        const teamUpEvents = allEvents?.filter(event => event.categoryId === 7)
        // console.log(teamUpEvents);
        renderElement = (

            teamUpEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )

        )

    } else if (charity) {
        const charityEvents = allEvents?.filter(event => event.categoryId === 8)
        // console.log(charityEvents);
        renderElement = (

            charityEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )

        )

    } else {
        renderBrowseElement = (
            allEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            {reload = true}
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="bookmarksBtn" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )
        )
    }

    // const tournamentEvents = allEvents?.filter(event => event.categoryId === categoryIdAsInt)
    // console.log(tournamentEvents);


    useEffect(() => {
        dispatch(eventActions.getAllEvents());

    }, [reload, tournament, LAN, casual, competitive, LFG, raid, teamUp, charity, dispatch])


    return (
        <div>
            <h1>
                Browse Events
            </h1>
            <div>
                <div className="categoryOptions">
                    <li className="category" onClick={() => {
                        setBrowse(true)
                        setTournament(false)
                        setLAN(false)
                        setCasual(false)
                        setCompetitive(false)
                        setLFG(false)
                        setRaid(false)
                        setTeamUp(false)
                        setCharity(false)
                        reload = true
                    }} >
                        Browse
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(true)
                        setLAN(false)
                        setCasual(false)
                        setCompetitive(false)
                        setLFG(false)
                        setRaid(false)
                        setTeamUp(false)
                        setCharity(false)
                        reload = true
                    }} >
                        Tournament
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(false)
                        setLAN(true)
                        setCasual(false)
                        setCompetitive(false)
                        setLFG(false)
                        setRaid(false)
                        setTeamUp(false)
                        setCharity(false)
                        reload = true
                    }} >
                        LAN
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(false)
                        setLAN(false)
                        setCasual(true)
                        setCompetitive(false)
                        setLFG(false)
                        setRaid(false)
                        setTeamUp(false)
                        setCharity(false)
                        reload = true
                    }} >
                        Casual
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(false)
                        setLAN(false)
                        setCasual(false)
                        setCompetitive(true)
                        setLFG(false)
                        setRaid(false)
                        setTeamUp(false)
                        setCharity(false)
                        reload = true
                    }} >
                        Competitive
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(false)
                        setLAN(false)
                        setCasual(false)
                        setCompetitive(false)
                        setLFG(true)
                        setRaid(false)
                        setTeamUp(false)
                        setCharity(false)
                        reload = true
                    }} >
                        LFG
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(false)
                        setLAN(false)
                        setCasual(false)
                        setCompetitive(false)
                        setLFG(false)
                        setRaid(true)
                        setTeamUp(false)
                        setCharity(false)
                        reload = true
                    }} >
                        Raid
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(false)
                        setLAN(false)
                        setCasual(false)
                        setCompetitive(false)
                        setLFG(false)
                        setRaid(false)
                        setTeamUp(true)
                        setCharity(false)
                        reload = true
                    }} >
                        TeamUp
                    </li>
                    <li className="category" onClick={() => {
                        setBrowse(false)
                        setTournament(false)
                        setLAN(false)
                        setCasual(false)
                        setCompetitive(false)
                        setLFG(false)
                        setRaid(false)
                        setTeamUp(false)
                        setCharity(true)
                        reload = true
                    }} >
                        Charity
                    </li>
                </div>
                <div className="browseOptions-container">
                    <div className="browseOptions-innerContainer">
                        {reload = true}
                        {browse && renderElement}
                        {tournament && renderElement}
                        {LAN && renderElement}
                        {casual && renderElement}
                        {competitive && renderElement}
                        {LFG && renderElement}
                        {raid && renderElement}
                        {teamUp && renderElement}
                        {charity && renderElement}
                        {renderBrowseElement}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BrowseEventsPage;