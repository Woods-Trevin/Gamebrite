import { useParams, useHistory, NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event'
import "./SingleEventPage.css"





function SingleEventPage() {


    let { eventId } = useParams();
    const ID = parseInt(eventId);
    // console.log("This is the eventId --->", typeof eventId);
    const userEvents = useSelector(state => state.events.events);
    // console.log(userEvents);

    const currentEvent = userEvents?.find(event => event.id === ID);
    console.log("This is the currentEvent---->", currentEvent);
    const dispatch = useDispatch();
    const history = useHistory();
    let reload;
    if (reload) {
        window.location.reload();
        reload = false
    }

    useEffect(() => {
        // console.log("render")
        dispatch(eventActions.getEvents())
    }, [dispatch], reload);


    // function handleDeletionOfEvents(e) {
    //     e.preventDefault();


    //     dispatch(eventActions.deleteEvents({ id: ID }))
    //     history.push("/events")
    // }

    // function handleDeletionOfEvents(e) {
    //     e.preventDefault();
    //     const payload = { id: ID }
    //     // dispatch(eventActions.deleteEvents(payload)
    // }

    return (
        <div className="singleEvent-Container" >
            <img className="singleEvent-backgroundImg" src={currentEvent?.imageURL} alt="noPicture" />
            {reload = true}
            <div className="eventDisplay-container">
                <div className="eventDisplay">
                    {<img className="eventDisplay-image" src={currentEvent?.imageURL} alt="" />}
                    {<li className="eventDisplay-element date">{currentEvent?.startDate}</li>}
                    {<li className="eventDisplay-element tickets">Tickets Available: {currentEvent?.ticketsCapacity}</li>}
                    {<li className="eventDisplay-element price">Price: ${currentEvent?.price}</li>}
                    {<li className="eventDisplay-element title">{currentEvent?.title}</li>}
                    {<li className="eventDisplay-element description">{currentEvent?.description}</li>}
                    <div className="eventDisplay-editBtn">
                        <NavLink className="EditLink" to={`/event/${ID}/edit`}> EDIT </NavLink>
                    </div>
                </div>
            </div>
            <div className="delete-container">
                <li type="button" name="deletebtn" value={"Delete"} onClick={() => {
                    dispatch(eventActions.deleteEvents({ id: ID }))
                    history.push("/events");
                    window.location.reload();
                }} >DELETE</li>
            </div>
        </div>

    )
}

export default SingleEventPage;