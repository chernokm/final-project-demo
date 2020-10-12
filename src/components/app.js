import React from 'react'
import Header from "./header";
import Footer from "./footer";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import PlayerInfoPage from "../pages/player-info-page";
import AboutPage from "../pages/about";
import StartPage from '../pages/start-page';
import ChoiceOnePage from '../pages/choice-one-page';
import ChoiceTwoAPage from "../pages/choice-two-a-page";
import ChoiceTwoBPage from "../pages/choice-two-b-page";
import ChoiceThreeAPage from '../pages/choice-three-a-page';
import ChoiceThreeCPage from '../pages/choice-three-c-page';
import ChoiceThreeBPage from '../pages/choice-three-b-page';
import ChoiceThreeDPage from '../pages/choice-three-d-page';
import FinalRoomRedPage from '../pages/final-room-red-page';
import FinalRoomBluePage from '../pages/final-room-blue-page';
import FinalRoomGreenPage from '../pages/final-room-green-page';
import FinalRoomYellowPage from '../pages/final-room-yellow';

/*
The app is responsible for routing and loading the appropriate page within the application
*/

function App() {
    return <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/choice1">
                <ChoiceOnePage />
            </Route>
            <Route path="/choice2a">
                <ChoiceTwoAPage />
            </Route>
            <Route path="/choice2b">
                <ChoiceTwoBPage />
            </Route>
            <Route path="/choice3a">
                <ChoiceThreeAPage />
            </Route>
            <Route path="/choice3b">
                <ChoiceThreeBPage />
            </Route>
            <Route path="/choice3c">
                <ChoiceThreeCPage />
            </Route>
            <Route path="/choice3d">
                <ChoiceThreeDPage />
            </Route>
            <Route path="/finalroomred">
                <FinalRoomRedPage />
            </Route>
            <Route path="/finalroomblue">
                <FinalRoomBluePage />
            </Route>
            <Route path="/finalroomgreen">
                <FinalRoomGreenPage />
            </Route>
            <Route path="/finalroomyellow">
                <FinalRoomYellowPage />
            </Route>
            <Route path="/">
                <StartPage />
            </Route>

            {/* <Route path="/">
                <PlayerInfoPage />
            </Route> */}
        </Switch>
        <Footer />
    </BrowserRouter>
}

export default App;
