import React from "react";
import { Link } from "react-router-dom";

function FinalRoomYellow() {
    return (
        <div>
            <p className="game-item__description">After picking up the YELLOW gem, you come to a big yellow door. in the center of the door is a hollowed out space
            that looks like it fits the gem you have. You put the gem into the door and it slowly opens. Once inside you
            come to a chest in the back of the room. In it you find some new steel plate armour and steel lance. With this new gear,
            you will be able to sign up as the Lancer class!
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/">Exit</Link></button>
            </ul>
        </div>
    );
}

export default FinalRoomYellow;