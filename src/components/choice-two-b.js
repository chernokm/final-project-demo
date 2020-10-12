import React from "react";
import { Link } from "react-router-dom";
import "./choice.css";

function ChoiceTwoB() {
    return (
        <div className="game-item">
            <p className="game-item__description">After choosing to go RIGHT, you come to an open room. There is a ladder going UP and one
            that is going DOWN. Which ladder would you like to choose?
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/choice3c">UP</Link></button>
                <button className="game-item__button"><Link to="/choice3d">DOWN</Link></button>
            </ul>
        </div>
    );
}

export default ChoiceTwoB;