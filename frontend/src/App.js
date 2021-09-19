
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
// import { useEventContext } from "./context/event"
import BasicInfoPage from "./components/BasicInfoPage";
import EventsPage from "./components/EventsPage";
import EventsPageNavigation from "./components/EventsPageNavigation";
import EventPageNavigation from "./components/EventPageNavigation";
import SingleEventPage from "./components/SingleEventPage";
import EditEventPage from "./components/EditEventPage";
import BrowseEventsPage from "./components/BrowseEventsPage";
import EventDisplayPage from "./components/EventDisplayPage";
import BookmarksPage from "./components/BookmarksPage";
import TicketsPage from "./components/TicketsPage";
import FooterNavigation from "./components/FooterNavigation";


// Retain the session user information across a refresh by loading the
// application after accessing the route to get the current session user
// "GET /api/session" and adding the user info to the Redux store again.
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // const { eventId } = useEventContext();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navigation isLoaded={isLoaded} />
          {isLoaded && (
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
          )}
          <BrowseEventsPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/signup">
          <SignupFormPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/browse/:eventId">
          <EventPageNavigation />
          <EventDisplayPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/event/basicInfo">
          <EventPageNavigation />
          <BasicInfoPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/events">
          <EventsPageNavigation />
          <EventsPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/event/:eventId">
          <EventPageNavigation />
          <SingleEventPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/event/:eventId/edit">
          <EventPageNavigation />
          <EditEventPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/bookmarks">
          <EventPageNavigation />
          <BookmarksPage />
          <FooterNavigation />
        </Route>
        <Route exact path="/tickets">
          <EventPageNavigation />
          <TicketsPage />
          <FooterNavigation />
        </Route>
      </Switch>
    </>
  );
}

export default App;