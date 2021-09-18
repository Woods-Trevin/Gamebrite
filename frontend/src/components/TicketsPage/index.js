import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as eventActions from '../../store/event'
import * as ticketActions from '../../store/ticket'


function TicketsPage() {
    const tickets = useSelector(state => state.tickets.ticket);
    console.log(tickets);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(ticketActions.getOwnedTickets())
    }, [dispatch])
    return (
        <div>
            <h1> Tickets Page </h1>
            <div>
                {tickets?.map(ticket =>
                    <div>
                        <img src={ticket.imageURL} alt="noPicture" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default TicketsPage;