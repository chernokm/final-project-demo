import React from 'react'
import Header from "./header";
import Footer from "./footer";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import PlayerInfoPage from "../pages/player-info-page";
import AboutPage from "../pages/about";

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
            <Route path="/">
                <PlayerInfoPage />
            </Route>
        </Switch>
        <Footer />
    </BrowserRouter>
}

export default App;
