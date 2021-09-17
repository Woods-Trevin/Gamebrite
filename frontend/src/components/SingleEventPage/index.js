import { useParams, useHistory, NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event'





function SingleEventPage() {


    let { eventId } = useParams();
    const ID = parseInt(eventId)
    // console.log("This is the eventId --->", typeof eventId);
    const userEvents = useSelector(state => state.events.events);
    // console.log(userEvents);

    const currentEvent = userEvents?.find(event => event.id === ID);
    // console.log("This is the currentEvent---->", currentEvent);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // console.log("render")
        dispatch(eventActions.getEvents())
    }, []);


    function handleDeletionOfEvents(e) {
        e.preventDefault();


        dispatch(eventActions.deleteEvents(ID))
        history.push("/events")
    }

    // function handleDeletionOfEvents(e) {
    //     e.preventDefault();
    //     const payload = { id: ID }
    //     // dispatch(eventActions.deleteEvents(payload)
    // }

    return (
        <div>
            <h1>Single Event Page</h1>
            <div className="eventDisplay-container">
                <div className="eventDisplay">
                    {<img src={currentEvent?.imageURL} />}
                    {<li>{currentEvent?.startDate}</li>}
                    {<li>{currentEvent?.title}</li>}
                    {<li>{currentEvent?.ticketsCapacity}</li>}
                    {<li>{currentEvent?.price}</li>}
                    {<li>{currentEvent?.description}</li>}
                    <div>
                        <NavLink to={`/event/${ID}/edit`}> EDIT </NavLink>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button type="button" name="deletebutton" value={"Delete"} onClick={handleDeletionOfEvents} >DELETE</button>
                </div>
            </div>
        </div>

    )
}

export default SingleEventPage;