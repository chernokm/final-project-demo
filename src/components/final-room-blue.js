import React from "react";
import { Link } from "react-router-dom";

function FinalRoomBlue() {
    return (
        <div>
            <p className="game-item__description">After picking up the BLUE gem, you come to a big blue door. in the center of the door is a hollowed out space
            that looks like it fits the gem you have. You put the gem into the door and it slowly opens. Once inside you
            come to a chest in the back of the room. In it you find some new mage robes and arcane staff. With this new gear,
            you will be able to sign up as the Mage class!
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/">Exit</Link></button>
            </ul>

        </div>
    );
}

export default FinalRoomBlue;