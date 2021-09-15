import { createContext, useState, useContext } from "react";

export const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = (props) => {
    const [eventId, setEventId] = useState(0);
    const [eventStartDate, setStartDate] = useState(0);
    const [eventTitle, setTitle] = useState(0);
    const [eventTicketsCapacity, setTicketsCapacity] = useState(0);
    const [eventPrice, setPrice] = useState(0);
    const [eventImageUrl, setImageUrl] = useState(0);

    return (
        <EventContext.Provider value={{ eventId, setEventId, eventStartDate, setStartDate, eventTitle, setTitle, eventTicketsCapacity, setTicketsCapacity, eventPrice, setPrice, eventImageUrl, setImageUrl }}>
            {props.children}
        </EventContext.Provider>
    )
}