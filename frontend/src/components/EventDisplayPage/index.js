import { useParams, useHistory, NavLink } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event'
import * as venueActions from '../../store/venue'



function EventDisplayPage() {
    let { eventId } = useParams();
    return (
        <div>
            <h1>
                Event Display Page
            </h1>
        </div>
    )
}

export default EventDisplayPage;