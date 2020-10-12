import React from "react";
import { Link } from "react-router-dom";

function FinalRoomGreen() {
    return (
        <div>
            <p className="game-item__description">After picking up the GREEN gem, you come to a big green door. in the center of the door is a hollowed out space
            that looks like it fits the gem you have. You put the gem into the door and it slowly opens. Once inside you
            come to a chest in the back of the room. In it you find some new chainmail armour and a claymore. With this new gear,
            you will be able to sign up as the Knight class!
            </p>
            <ul className="game-item__answers">
                <button className="game-item__button"><Link to="/">Exit</Link></button>
            </ul>
        </div>
    );
}

export default FinalRoomGreen;