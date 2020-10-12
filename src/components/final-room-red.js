import React from "react";
import { Link } from "react-router-dom";

function FinalRoomRed() {
    return (
        <div>
            <p className="game-item__description">After picking up the RED gem, you come to a big red door. in the center of the door is a hollowed out space
            that looks like it fits the gem you have. You put the gem into the door and it slowly opens. Once inside you
            come to a chest in the back of the room. In it you find some new leather armour and some gaunlets. With this new gear,
            you will be able to sign up as the Fighter Class!
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/">Exit</Link></button>
            </ul>
        </div>
    );
}

export default FinalRoomRed;