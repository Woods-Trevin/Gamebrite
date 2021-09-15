import { createContext, useState, useContext } from "react";

export const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = (props) => {
    const [eventId, setEventId] = useState(0);
    const [venueId, setVenueId] = useState(0);

    return (
        <EventContext.Provider value={{ eventId, setEventId, venueId, setVenueId }}>
            {props.children}
        </EventContext.Provider>
    )
}