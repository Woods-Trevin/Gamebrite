import { useEffect, useState } from 'react';
import './BrowseEventsPage.css';
import * as eventActions from '../../store/event'
// import * as venueActions from '../../store/venue'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';



function BrowseEventsPage() {
    const dispatch = useDispatch();
    const allEvents = useSelector(state => state.events.events);

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
                <NavLink to={`/browse/${event.id}`}>
                    <li>{event.title}</li>
                </NavLink>)
        )
    } else if (tournament) {
        const tournamentEvents = allEvents?.filter(event => event.categoryId === 1)
        // console.log(tournamentEvents);
        renderElement = (
            <div>
                {tournamentEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
            </div>
        )

    } else if (LAN) {
        const LANEvents = allEvents?.filter(event => event.categoryId === 2)
        // console.log(LANEvents);
        renderElement = (
            <div>
                {LANEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
            </div>
        )

    } else if (casual) {
        const casualEvents = allEvents?.filter(event => event.categoryId === 3)
        // console.log(casualEvents);
        renderElement = (
            <div>
                {casualEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
            </div>
        )

    } else if (competitive) {
        const competitiveEvents = allEvents?.filter(event => event.categoryId === 4)
        // console.log(competitiveEvents);
        renderElement = (
            <div>
                {competitiveEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
            </div>
        )

    } else if (LFG) {
        const LFGEvents = allEvents?.filter(event => event.categoryId === 5)
        // console.log(LFGEvents);
        renderElement = (
            <div>
                {LFGEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
            </div>
        )

    } else if (raid) {
        const raidEvents = allEvents?.filter(event => event.categoryId === 6)
        // console.log(raidEvents);
        renderElement = (
            <div>
                {raidEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
            </div>
        )

    } else if (teamUp) {
        const teamUpEvents = allEvents?.filter(event => event.categoryId === 7)
        // console.log(teamUpEvents);
        renderElement = (
            <div>
                {teamUpEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
            </div>
        )

    } else if (charity) {
        const charityEvents = allEvents?.filter(event => event.categoryId === 8)
        // console.log(charityEvents);
        renderElement = (
            <div>
                {charityEvents?.map(event => <NavLink to={`/browse/${event.id}`}>{event.title}</NavLink>)}
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
                <div>
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                    <li onClick={() => {
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
                <div>
                    <div>
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