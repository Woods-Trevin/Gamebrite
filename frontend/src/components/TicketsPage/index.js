import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as eventActions from '../../store/event'
import * as ticketActions from '../../store/ticket'


function TicketsPage() {
    const tickets = useSelector(state => state.tickets.ticket);
    console.log(tickets);
    const [ticket, setTicket] = useState();



    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(ticketActions.getOwnedTickets())
    }, [dispatch])
    return (
        <div>
            <h1> Tickets Page </h1>
            <div>
                <div>
                    {tickets?.map(ticket =>
                        <div>
                            <div>
                                <img key={ticket?.imageURL} src={ticket?.imageURL} alt="noPicture" />
                            </div>
                            <p key={ticket} className="ticket-DeleteBtn" onClick={() => { }} >Delete</p>
                        </div>
                    )}
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default TicketsPage;