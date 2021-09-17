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
    if (browse) {
        renderElement = (
            allEvents?.map(event =>
                <div>
                    <NavLink className="" to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>
                    <div>
                        <button type="button" className="" onClick={() => { dispatch(bookmarkActions.createBookmark({ eventId: event.id, userId: user.id })) }}>Bookmark</button>
                    </div>
                </div>
            )
        )
    } else if (tournament) {
        const tournamentEvents = allEvents?.filter(event => event.categoryId === 1)
        // console.log(tournamentEvents);
        renderElement = (
            <div>
                {tournamentEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    } else if (LAN) {
        const LANEvents = allEvents?.filter(event => event.categoryId === 2)
        // console.log(LANEvents);
        renderElement = (
            <div>
                {LANEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    } else if (casual) {
        const casualEvents = allEvents?.filter(event => event.categoryId === 3)
        // console.log(casualEvents);
        renderElement = (
            <div>
                {casualEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    } else if (competitive) {
        const competitiveEvents = allEvents?.filter(event => event.categoryId === 4)
        // console.log(competitiveEvents);
        renderElement = (
            <div>
                {competitiveEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    } else if (LFG) {
        const LFGEvents = allEvents?.filter(event => event.categoryId === 5)
        // console.log(LFGEvents);
        renderElement = (
            <div>
                {LFGEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    } else if (raid) {
        const raidEvents = allEvents?.filter(event => event.categoryId === 6)
        // console.log(raidEvents);
        renderElement = (
            <div>
                {raidEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    } else if (teamUp) {
        const teamUpEvents = allEvents?.filter(event => event.categoryId === 7)
        // console.log(teamUpEvents);
        renderElement = (
            <div>
                {teamUpEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    } else if (charity) {
        const charityEvents = allEvents?.filter(event => event.categoryId === 8)
        // console.log(charityEvents);
        renderElement = (
            <div>
                {charityEvents?.map(event =>
                    <NavLink to={`/browse/${event.id}`}>
                        <ul className="renderedElement">
                            <li>{event.title}</li>
                            <li>{event.startDate}</li>
                            <li>{event.startTime}</li>
                            <img className="eventImage" src={event.imageURL} alt="" />
                        </ul>
                    </NavLink>)}
            </div>
        )

    }

    // const tournamentEvents = allEvents?.filter(event => event.categoryId === categoryIdAsInt)
    // console.log(tournamentEvents);


    useEffect(() => {
        dispatch(eventActions.getAllEvents());

    }, [tournament, LAN, casual, competitive, LFG, raid, teamUp, charity, dispatch])


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
                    }} >
                        Charity
                    </li>
                </div>
                <div className="browseOptions-container">
                    <div className="browseOptions-innerContainer">
                        {browse && renderElement}
                        {tournament && renderElement}
                        {LAN && renderElement}
                        {casual && renderElement}
                        {competitive && renderElement}
                        {LFG && renderElement}
                        {raid && renderElement}
                        {teamUp && renderElement}
                        {charity && renderElement}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BrowseEventsPage;