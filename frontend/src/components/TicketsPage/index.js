import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as eventActions from '../../store/event'
import * as ticketActions from '../../store/ticket'
import * as eventActions from '../../store/event'

// window.location.reload();

function TicketsPage() {
    const tickets = useSelector(state => state.tickets.ticket);
    console.log(tickets);
    const [reload, setReload] = useState();


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


    console.log("render above html return")

    useEffect(() => {
        console.log("render in use effect")
        dispatch(ticketActions.getOwnedTickets())
        dispatch(eventActions.getAllEvents())
        setReload(true)

        // setTimeout(() => {
        //     window.location.reload(false);
        // }, 1000000000000);
        // console.log('page reload')

    }, [dispatch]);
    return (
        <div>
            {/* {refreshPage()} */}
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
                    {/* {stopRefresh()} */}
                </div>
            </div>
        </div>
    )
}

export default TicketsPage;