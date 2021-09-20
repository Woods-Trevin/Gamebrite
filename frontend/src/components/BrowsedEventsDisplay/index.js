import './BrowsedEventsDisplay.css'
import { useParams, useHistory, NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event'



function BrowseEventsPage() {
    let { eventId } = useParams();
    const ID = parseInt(eventId, 10);
    // console.log("This is the eventId --->", typeof eventId);
    const userEvents = useSelector(state => state.events.events);
    console.log(userEvents);
    // const currentEvent = userEvents?.find(event => event.id === ID);

    // console.log("This is the currentEvent---->", currentEvent);
    const dispatch = useDispatch();
    const history = useHistory();
    // let reload;
    // if (reload) {
    //     reload = false
    // }
    // reload = true;

    // window.location.reload();
    useEffect(() => {
        // console.log("render")
        // dispatch(eventActions.getSingularEvent({ id: ID }))
        dispatch(eventActions.getEvents())
    }, [dispatch]);

    return (
        <div className="OuterDiv">
            <h1> Browsed Events Display</h1>
            <li> { }</li>
        </div>
    )
}

export default BrowseEventsPage;