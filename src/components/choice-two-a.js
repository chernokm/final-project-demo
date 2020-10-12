import React from "react";
import { Link } from "react-router-dom";
import "./choice.css";

function ChoiceTwoA() {
    return (
        <div className="game-item">
            <p className="game-item__description">After choosing to go LEFT, you come to a room with two different passages.
            You can either choose the passage on the LEFT or the one on the RIGHT.
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/choice3a">LEFT</Link></button>
                <button className="game-item__button"><Link to="/choice3b">RIGHT</Link></button>
            </ul>
        </div>
    );
}

export default ChoiceTwoA;