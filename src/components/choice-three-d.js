import React from "react";
import { Link } from "react-router-dom";
import "./choice.css";

function ChoiceThreeD() {
    return (
        <div className="game-item">
            <p className="game-item__description">After choosing to go left, you come to a small open room with a pedastal in the center of it.
            on top of the pedestal is YELLOW gem. It looks important so you decide to pick it up before pushing forward.
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/finalroomyellow">Pick up gem</Link></button>
            </ul>
        </div>
    );
}

export default ChoiceThreeD;