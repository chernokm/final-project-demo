import React, { useState } from "react";
import PlayerInfoForm from "./player-info-form";
import { Link } from "react-router-dom";
import "./choice.css";



function StartGame() {

    return (
        <div className="game-item">
            <p className="game-item__description">Welcome to the game! depending on the path you take, will depend on the type of adventurer you become!</p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/choice1">Start Adventure</Link></button>
            </ul>


        </div>
    );

}

export default StartGame;