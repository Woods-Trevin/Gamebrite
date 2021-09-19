// import { NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as eventActions from '../../store/event'
import * as ticketActions from '../../store/ticket'
import * as eventActions from '../../store/event'
import "./TicketsPage.css"

// window.location.reload();

function TicketsPage() {
    const tickets = useSelector(state => state.tickets.ticket);
    console.log(tickets);
    const user = useSelector(state => state.session.user);
    console.log(user);
    let reload;
    if (reload) {
        window.location.reload();
        reload = false
    }

    // if (reload) {
    //     window.location.reload();
    // }

    const dispatch = useDispatch();


    // if (reload) {
    //     console.log("reloading")
    // }

    // function refreshPage() {
    //     setTimeout(() => {
    //         window.location.reload(false);
    //     }, 500);
    //     console.log('page to reload')
    // }



    // let count = null;
    console.log("render above html return")

    useEffect(() => {
        console.log("render in use effect")
        dispatch(ticketActions.getOwnedTickets())
        dispatch(eventActions.getAllEvents())


    }, [dispatch, reload]);


    // setReload(true)
    return (
        <div className="outmost-ticketsContainer">
            {/* {refreshPage()} */}
            <h1 className="PageTitle"> My Tickets </h1>
            <div className="secondOuterLayer-ticketsContainer">
                <div className="ticketsContainer">
                    {tickets?.map(ticket =>
                        <div className="ticketsContent-outterContainer">
                            <div className="ticketsContent-container" >
                                {reload = true}
                                <img className="ticketImg" key={ticket?.imageURL} src={ticket?.imageURL} alt="noPicture" />
                                <li className="ticketTitle" key={ticket?.title}>{ticket?.title}</li>
                                <li className="ticketPrice" key={ticket?.price}>Payment Status: {ticket?.price === 0 ? "Free" : `$${ticket?.price}`}</li>
                            </div>
                            <li key={ticket} className="ticket-DeleteBtn" onClick={() => {
                                dispatch(ticketActions.deleteTickets({ id: ticket?.id, userId: user.id }))
                                window.location.reload();
                            }} >Delete</li>
                        </div>
                    )}
                </div>
                <div>
                    {/* {stopRefresh()} */}
                </div>
            </div>
        </div>
    )
}

export default TicketsPage;