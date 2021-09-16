
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { useEventContext } from "./context/event"
import BasicInfoPage from "./components/BasicInfoPage";
import EventsPage from "./components/EventsPage";
import EventsPageNavigation from "./components/EventsPageNavigation";
import EventPageNavigation from "./components/EventPageNavigation";
import SingleEventPage from "./components/SingleEventPage";
import EditEventPage from "./components/EditEventPage";


// Retain the session user information across a refresh by loading the
// application after accessing the route to get the current session user
// "GET /api/session" and adding the user info to the Redux store again.
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const { eventId } = useEventContext();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navigation isLoaded={isLoaded} />
          {isLoaded && (
            <Route path="/signup">
              <SignupFormPage />
            </Route>
          )}
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/event/basicInfo">
          <BasicInfoPage />
        </Route>
        <Route path="/events">
          <EventsPageNavigation />
          <EventsPage />
        </Route>
        <Route exact path="/event/:eventId">
          <EventPageNavigation />
          <SingleEventPage />
        </Route>
        <Route path="/event/:eventId/edit">
          <EventPageNavigation />
          <EditEventPage />
        </Route>
      </Switch>



    </>
  );
}

export default App;