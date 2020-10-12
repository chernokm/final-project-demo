import React from "react";
import { Link } from "react-router-dom";
import "./choice.css";

function ChoiceOne() {
    return (
        <div className="game-item">
            <p className="game-item__description">After entering the dungeon and walking for a bit, you come to a split in the
            path. You can either go LEFT or RIGHT.
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/choice2a">LEFT</Link></button>
                <button className="game-item__button"><Link to="/choice2b">RIGHT</Link></button>
            </ul>

        </div>
    );
}

export default ChoiceOne;