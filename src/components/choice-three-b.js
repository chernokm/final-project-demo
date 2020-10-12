import React from "react";
import { Link } from "react-router-dom";
import "./choice.css";

function ChoiceThreeB() {
    return (
        <div className="game-item">
            <p className="game-item__description">After choosing to go left, you come to a small open room with a pedastal in the center of it.
            on top of the pedestal is BLUE gem. It looks important so you decide to pick it up before pushing forward.
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/finalroomblue">Pick up gem</Link></button>
            </ul>

        </div>
    );
}

export default ChoiceThreeB;