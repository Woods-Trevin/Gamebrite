import { useParams } from "react-router-dom"






function SingleEventPage() {

    let { eventId } = useParams();

    return (
        <div>
            <h1>Single Event Page</h1>
        </div>
    )
}