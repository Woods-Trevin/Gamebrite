import { useParams, NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event'
import * as ticketActions from '../../store/ticket'



function EventDisplayPage() {
    let { eventId } = useParams();
    const ID = parseInt(eventId)
    // const history = useHistory();
    const dispatch = useDispatch();

    const allEvents = useSelector(state => state.events.events);
    console.log("events ---->", allEvents)
    const user = useSelector(state => state.session.user);
    console.log("user store ----->", user)
    const currentEvent = allEvents?.find(event => event.id === ID)



    useEffect(() => {
        dispatch(eventActions.getAllEvents());

    }, [dispatch])


    function handleRegistration() {
        const payload = { eventId: ID, userId: user.id }
        dispatch(ticketActions.createTickets(payload))

    }
    function handlePurchase() {
        const payload = { eventId: ID, userId: user.id }
        dispatch(ticketActions.createTickets(payload))
    }



    return (
        <div className="outermost-container">
            <h1>
                Event Display Page
                <li>EventId:{eventId}</li>

            </h1>
            <div>
                <div>
                    {currentEvent?.title}
                    {<img src={currentEvent?.imageURL} alt="NoPicture" />}
                </div>
                <div>
                    <button type="button" name="registerBtn" className="registerBtn" onClick={() => { handleRegistration() }} disabled={currentEvent?.price > 0}>Join</button>
                </div>
                <div>
                    <button type="button" name="ticketBtn" className="ticketBtn" onClick={() => { handlePurchase() }} disabled={currentEvent?.price < 1} >Ticket</button>
                </div>
            </div>


        </div>
    )
}

export default EventDisplayPage;