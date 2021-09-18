// import { NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as eventActions from '../../store/event'
import * as ticketActions from '../../store/ticket'
import * as eventActions from '../../store/event'

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
        <div>
            {/* {refreshPage()} */}
            <h1> Tickets Page </h1>
            <div>
                <div>
                    {tickets?.map(ticket =>
                        <div>
                            <div>
                                {reload = true}
                                <img key={ticket?.imageURL} src={ticket?.imageURL} alt="noPicture" />
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