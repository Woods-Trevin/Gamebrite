import './basicInfo.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from '../../store/event'
import * as venueActions from '../../store/venue'
import { useHistory } from 'react-router';


export default function BasicInfoPage() {
    const user = useSelector(state => state.session);
    const currentUser = user.user
    const venueMade = useSelector(state => state.venue);
    const currentVenue = venueMade.venue
    // const event = useSelector(state => state.events);
    // const currentEvent = event.events
    // console.log(currentUser.id);
    // const { venueId } = useEventContext();
    const dispatch = useDispatch();
    const history = useHistory();


    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [gameName, setGameName] = useState("");
    const [gameType, setGameType] = useState("");
    const [categoryId, setCategoryId] = useState(0);
    const [description, setDescription] = useState("");

    const [disableEventSubmission, setToDisableEventSubmission] = useState(true);

    const [venue, setVenue] = useState(false);
    const [onlineEvent, setOnlineEvent] = useState(false);
    const [TBA, setTBA] = useState(false);

    const [venueName, setVenueName] = useState("");
    const [venueAddress, setVenueAddress] = useState("");
    const [venueCity, setVenueCity] = useState("");
    const [venueState, setVenueState] = useState("");
    const [venueZipcode, setVenueZipcode] = useState(0);
    let [onlineEventUrl, setOnlineEventUrl] = useState("");

    const [ticketPrice, setTicketPrice] = useState(0);
    const [ticketsCapacity, setTicketsCapacity] = useState(0);

    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");

    // hasValue = currentVenue


    const [basicInfoFormSubmissionErrors, setBasicInfoFormSubmissionErrors] = useState([]);
    const [venueformSubmissionErrors, setVenueFormSubmissionErrors] = useState([]);
    const [createEventErrors, setCreateEventErrors] = useState([]);

    useEffect(() => {
        const basicInfoErrors = []
        const venueErrors = []
        if (imageURL === null || imageURL === undefined || imageURL === '') basicInfoErrors.push('Must provide a valid image Url')

        if (!title) basicInfoErrors.push('Must provide a valid Title')
        if (title.length > 200) basicInfoErrors.push('Title must be less than 200 characters')

        if (!gameName) basicInfoErrors.push('Must provide a valid Game Name')
        if (gameName.length > 30) basicInfoErrors.push('Game name should be less than 30 characters')

        if (!organizer) basicInfoErrors.push('Must provide a valid image Url')
        if (organizer.length > 50) basicInfoErrors.push('Organizer must be less than 50 characters')

        if (!description) basicInfoErrors.push('Must provide a valid Description')
        if (description.length > 1500) basicInfoErrors.push('Description must be less than 1500 characters')

        if (!gameType) basicInfoErrors.push('Must provide a valid Game Type')
        if (gameType.length > 30) basicInfoErrors.push('Game Type must be less than 30 characters')

        if (!categoryId) basicInfoErrors.push('Must provide a valid Category')

        if (!startDate) basicInfoErrors.push('Must provide a valid Start Date')

        if (!endDate) basicInfoErrors.push('Must provide a valid End Date')


        if (!ticketsCapacity) basicInfoErrors.push('Must provide amount of tickets available. If no tickets required enter 0')


        if (!ticketPrice) basicInfoErrors.push('Must provide a price. If there is no price enter 0')


        if (!startTime) basicInfoErrors.push('Must provide a valid startTime')

        if (!endTime) basicInfoErrors.push('Must provide a valid End Time')

        if (onlineEventUrl.length > 300) basicInfoErrors.push('Online Event Url should be less than 300 characters')

        setBasicInfoFormSubmissionErrors(basicInfoErrors)

        if (!venueName) venueErrors.push('Must provide a valid Name');
        if (venueName.length > 50) venueErrors.push('Venue Name must be less than 50 characters')

        if (!venueAddress) venueErrors.push('Must provide a valid Address');
        if (venueAddress.length > 25) venueErrors.push('Venue Address must be less than 50 characters')

        if (!venueCity) venueErrors.push('Must provide a valid City');
        if (venueCity.length > 15) venueErrors.push('Venue City must be less than 50 characters')

        if (!venueState) venueErrors.push('Must provide a valid State');
        if (venueState.length > 50) venueErrors.push('Venue State must be less than 50 characters')

        if (!venueZipcode) venueErrors.push('Must provide a valid Zipcode');

        setVenueFormSubmissionErrors(venueErrors)

        // if (basicInfoFormSubmissionErrors.length > 0 || venueformSubmissionErrors.length > 0) {
        //     setToDisableEventSubmission(true)
        // } else {
        //     setToDisableEventSubmission(false)
        // }


    }, [disableEventSubmission, venueZipcode, venueState, venueCity, venueAddress, venueName, title, imageURL, gameName, organizer, description, gameType, categoryId, startDate, endDate, ticketsCapacity, ticketPrice, startTime, endTime, onlineEventUrl, user, venueMade])





    function handleVenueFormSubmit(e) {
        e.preventDefault();
        const payload = {
            name: venueName,
            address: venueAddress,
            city: venueCity,
            state: venueState,
            zipcode: venueZipcode
        }
        dispatch(venueActions.createVenue(payload))

    }

    let renderElement;

    if (venue) {
        renderElement = (
            <form onSubmit={handleVenueFormSubmit}>
                <div>
                    {venueformSubmissionErrors && venueformSubmissionErrors.map((error) =>
                        <li key={error.id} >{error}</li>
                    )}
                    <div>
                        <label>
                            Name:
                            <div>
                                <input
                                    type="text"
                                    name="venueName"
                                    value={venueName}
                                    onChange={(e) => setVenueName(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Address:
                            <div>
                                <input
                                    type="text"
                                    name="venueAddress"
                                    value={venueAddress}
                                    onChange={(e) => setVenueAddress(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            City:
                            <div>
                                <input
                                    type="text"
                                    name="venueCity"
                                    value={venueCity}
                                    onChange={(e) => setVenueCity(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            State:
                            <div>
                                <input
                                    type="text"
                                    name="venueState"
                                    value={venueState}
                                    onChange={(e) => setVenueState(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Zipcode:
                            <div>
                                <input
                                    type="text"
                                    name="venueZipcode"
                                    value={venueZipcode}
                                    onChange={(e) => setVenueZipcode(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                    <button type="submit" className="" disabled={venueformSubmissionErrors.length > 0}>Add Venue</button>
                </div>
            </form>
        )
    } else if (onlineEvent) {
        renderElement = (
            <div>
                Online Event Url:
                <input
                    type="text"
                    name="onlineEventUrl"
                    value={onlineEventUrl}
                    onChange={(e) => setOnlineEventUrl(e.target.value)}
                />
            </div>
        )
    } else if (TBA) {
        renderElement = (
            <>
                To Be Announced
            </>
        )
    }



    const handleBasicInfoSubmit = (e) => {
        e.preventDefault();

        if (onlineEventUrl === undefined || onlineEventUrl === null) onlineEventUrl = "No Online Event Url"

        const currentVenueId = currentVenue?.id ? currentVenue?.id : 1

        // console.log(venueId)
        const ticketsCapacityAsInt = parseInt(ticketsCapacity);
        const priceAsInt = parseInt(ticketPrice);
        const categoryIdAsInt = parseInt(categoryId);

        const payload = {
            imageURL: imageURL,
            title,
            game: gameName,
            organizer,
            description,
            gameType,
            startDate,
            endDate,
            ticketsCapacity: ticketsCapacityAsInt,
            price: priceAsInt,
            startTime,
            endTime,
            onlineEventUrl,
            categoryId: categoryIdAsInt,
            hostId: currentUser.id,
            venueId: currentVenueId,
        }

        console.log(imageURL,
            title,
            gameName,
            organizer,
            description,
            gameType,
            startDate,
            endDate,
            ticketsCapacityAsInt,
            priceAsInt,
            startTime,
            endTime,
            onlineEventUrl,
            categoryIdAsInt,
            currentUser.id,
            currentVenueId)
        dispatch(eventActions.createEvent(payload))

        history.push("/")

    }




    return (
        <div>
            {<h1>Basic Info Page</h1>}
            <div className="location-section">
                Location
                <div>
                    <span>Help people in the area discover your event and let attendees know where to show up.</span>
                </div>
                <div className="locationSectionBtns">
                    <button type="button" value={venue} onClick={() => {
                        setVenue(true)
                        setOnlineEvent(false)
                        setTBA(false)
                        setToDisableEventSubmission(true)
                    }}
                        disabled={venue}
                    // enable={}
                    >
                        Venue
                    </button>
                    <button type="button" value={onlineEvent} onClick={() => {
                        setVenue(false)
                        setOnlineEvent(true)
                        setTBA(false)
                        setToDisableEventSubmission(false)
                    }}
                        disabled={onlineEvent}
                    >
                        Online Event
                    </button>
                    <button type="button" value={TBA} onClick={() => {
                        setVenue(false)
                        setOnlineEvent(false)
                        setTBA(true)
                        setToDisableEventSubmission(false)

                    }}
                        disabled={TBA}
                    >
                        To Be Announced
                    </button>
                </div>
                {venue && renderElement}
                {onlineEvent && renderElement}
                {TBA && renderElement}
            </div>
            <div>
                <form onSubmit={handleBasicInfoSubmit}>
                    <div className="FormContainer">
                        {createEventErrors && createEventErrors.map((createEventError) =>
                            <li key={createEventError.id} >{createEventError}</li>
                        )}
                        {basicInfoFormSubmissionErrors && basicInfoFormSubmissionErrors.map((basicInfoFormSubmissionError) =>
                            <li key={basicInfoFormSubmissionError.id} >{basicInfoFormSubmissionError}</li>
                        )}
                        <div className="eventImg-container">
                            <div className="eventImg-imgdropdown">
                                <h2> Event Image</h2>
                                <label>
                                    Choose Event Image:
                                    <div className="eventImg">
                                        <img src={imageURL} alt="NoImagefound" />
                                    </div>
                                    <select name="eventImg" value={imageURL} onChange={(e) => setImageURL(e.target.value)} >
                                        <option value="https://s3.envato.com/files/78652366/Image%20Preview.jpg">Strategy option 1</option>
                                        <option value="https://miro.medium.com/max/1200/1*cVaERjbYJql7KFb1ZO20Lw.jpeg">Strategy option 2</option>
                                        <option value="https://i.ytimg.com/vi/ZX0hlrmgDcU/maxresdefault.jpg">Strategy option 3</option>
                                        <option value="https://www.tournaments-organizers.com/wp-content/uploads/2021/05/Top-Moba.jpg">MOBA option 1</option>
                                        <option value="https://mobilemodegaming.com/wp-content/uploads/2019/05/filters_quality40_background_colorwhite_formatjpeg-1685946942349812939.-1.jpg">MOBA option 2</option>
                                        <option value="https://www.lol-smurfs.com/blog/wp-content/uploads/2018/06/moba-games.jpg">MOBA option 3</option>
                                        <option value="https://www.nerdmuch.com/wp-content/uploads/2020/07/new-world-mmo.jpg">MMO option 1</option>
                                        <option value="https://s.yimg.com/os/creatr-uploaded-images/2020-06/b102f600-af05-11ea-9577-6593d1a3c2c2">MMO option 2</option>
                                        <option value="https://miro.medium.com/max/2000/1*XBwM4_dCVkG0pajnH806rw.jpeg">MMO option 3</option>
                                        <option value="https://majornelson.com/wp-content/uploads/sites/7/2021/05/FPS-Boost_VisID_Final_1920x1080.jpg">FPS option 1</option>
                                        <option value="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/01/Best-FPS-Games.jpg">FPS option 2</option>
                                        <option value="https://img.gurugamer.com/resize/1200x-/2019/10/18/3449739-blackops4-fortnite-pubg-32bc.jpg">FPS option 3</option>
                                        <option value="https://img.cinemablend.com/filter:scale/quill/c/8/a/6/b/d/c8a6bd2e8b91f1bde3fc5d832e32efdeecefd526.jpg?mw=600">RPG option 1</option>
                                        <option value="https://heavy.com/wp-content/uploads/2014/12/fable-mass-effect-3.jpg?quality=65&strip=all">RPG option 2</option>
                                        <option value="https://i0.wp.com/www.gamingguidetips.com/wp-content/uploads/2019/03/Best-Switch-RPG-Games.jpg?resize=720%2C276&ssl=1">RPG option 3</option>
                                        <option value="https://cdn.wccftech.com/wp-content/uploads/2018/01/Most-Anticipated-Simulation-Games-2018-02-Railway-Empire.jpg">Simulation option 1</option>
                                        <option value="https://www.appolicious.com/wp-content/uploads/2012/08/citybuilding.jpg">Simulation option 2</option>
                                        <option value="https://www.autoguide.com/blog/wp-content/uploads/2018/07/Project-Cars-2-1.jpg">Simulation option 3</option>
                                        <option value="https://qrius.com/wp-content/uploads/2020/10/qrius.com-IMG.jpg">Sports option 1</option>
                                        <option value="https://lh3.googleusercontent.com/proxy/JY69ZDzjo2esB1TI094IxUdsMJnBqIbN7NcdLU_ku4th2WVEc4u4emGGaV_TAquOseW2E2X58qjrOLME0nFwBId3hQ">Sports option 2</option>
                                        <option value="https://cdn.vox-cdn.com/thumbor/oZ6hJqKgDu1JWIa6RG1u0pf-ICw=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/48437011/sgotyMontage.0.0.jpg">Sports option 3</option>
                                        <option value="https://i1.wp.com/www.mobileworldlive.com/wp-content/uploads/2019/06/mobile-game-shutterstock-650-e1560299964919.jpg?fit=650%2C401&ssl=1">Mobile option 1</option>
                                        <option value="https://fscl01.fonpit.de/userfiles/7446224/image/xiaomi-blackshark-2/AndroidPIT-xiaomi-blackshark-2-gaming-w1400h788.jpg">Mobile option 2</option>
                                        <option value="https://www.pockettactics.com/wp-content/uploads/2021/09/best-mobile-games-900x506.jpg">Mobile option 3</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="basicInfo-Section">
                            Basic Info
                            <div>
                                <span className="basicInfoTxt">Name your event and tell event-goers why they should come.Add details that highlight what makes it unique.</span>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={title}
                                        placeholder="Event Title"
                                        className="basicInfo title"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="text"
                                        name="organizer"
                                        value={organizer}
                                        placeholder="Organizer"
                                        className="basicInfo organizer"
                                        onChange={(e) => setOrganizer(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="text"
                                        name="gameName"
                                        value={gameName}
                                        placeholder="Game Name"
                                        className="gameName-input"
                                        onChange={(e) => setGameName(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <textarea
                                        name="description"
                                        value={description}
                                        rows="8"
                                        cols="50"
                                        placeholder="Description"
                                        className="description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Choose Game Type:
                                    <select name="gameType" value={gameType} onChange={(e) => setGameType(e.target.value)} >
                                        <option value="Strategy">Strategy</option>
                                        <option value="MOBA">MOBA</option>
                                        <option value="MMO">MMO</option>
                                        <option value="FPS">FPS</option>
                                        <option value="RPG">RPG</option>
                                        <option value="Simulation">Simulation</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Mobile">Mobile</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Choose Category:
                                    <select name="category" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} >
                                        <option value={1}>Tournament</option>
                                        <option value={2}>LAN</option>
                                        <option value={3}>Casual</option>
                                        <option value={4}>Competitive</option>
                                        <option value={5}>LFG</option>
                                        <option value={6}>Raid</option>
                                        <option value={7}>TeamUp</option>
                                        <option value={8}>Charity</option>

                                    </select>
                                </label>
                            </div>
                        </div>
                        <div>
                            Tickets
                            <div>
                                <label>
                                    <input
                                        type="number"
                                        name="ticketPrice"
                                        value={ticketPrice}
                                        onChange={(e) => setTicketPrice(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="number"
                                        name="ticketsCapacity"
                                        value={ticketsCapacity}
                                        onChange={(e) => setTicketsCapacity(e.target.value)} />
                                </label>
                            </div>
                        </div>
                        <div className="datetime-section">
                            Date and Time
                            <div>
                                <span>Tell event-goers when your event starts and ends so they can make plans to attend.</span>
                            </div>
                            <div className="datetime-container">
                                <div className="startdatetime-inputs">
                                    <label>
                                        Event Start Date:
                                        <input type="date" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                    </label>
                                    <label>
                                        Event Start Time:
                                        <input type="time" name="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                                    </label>

                                </div>
                                <div className="enddatetime-inputs">
                                    <label>
                                        Event End Date:
                                        <input type="date" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                    </label>
                                    <label>
                                        Event End Time:
                                        <input type="time" name="endTime" value={endTime} onChange={(e) => {
                                            setEndTime(e.target.value)
                                            setToDisableEventSubmission(false)
                                        }} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* (!(!currentVenue && onlineEvent) && TBA !== true) */}
                    </div>
                    <button type="submit" className="sumbit-btn" disabled={disableEventSubmission && (basicInfoFormSubmissionErrors.length > 0 || venueformSubmissionErrors.length > 0)} >Submit</button>
                </form >
            </div >
        </div >
    )
}