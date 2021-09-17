import { useParams, NavLink } from "react-router-dom"
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as eventActions from '../../store/event'
// import * as venueActions from '../../store/venue'



function EventDisplayPage() {
    let { eventId } = useParams();
    // const history = useHistory();


    return (
        <div>
            <h1>
                Event Display Page
                <NavLink to="/">EventId:{eventId}</NavLink>

            </h1>
        </div>
    )
}

export default EventDisplayPage;