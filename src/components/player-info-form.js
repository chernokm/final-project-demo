import React, { useState } from "react";
import { Link } from "react-router-dom";



function PlayerInfoForm() {
    // using useState to get and set a player name
    const [name, setName] = useState("");

    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        // Makes sure the player actually inserts a name for their player
        if (name === "") {
            alert("Please enter a name");
            return;
        }
        // FOR TESTING PURPOSES - displays name of player in alert message
        alert(`New game for ${name}, welcome!`)


        //location.href = `start-game.js`;
    };

    return <form onSubmit={onFormSubmit}>
        <div>
            <label>Player Name: </label>
            <input type="text" id="name" value={name} onChange={onNameChange} />
        </div>
        <div>

            <button type="submit"><Link to="/start">Submit</Link></button>
            {/* <input type="submit" value="Submit"></input> */}
        </div>
    </form>
}

export default PlayerInfoForm;