import React from "react";

export default function CreateEvent() {

    

    return(
        <form>
            <input className="input-field" placeholder="Artist Name"required/>
            <input className="input-field" placeholder="location"required/>
            <input className="input-field" placeholder="Genre" required/>
            <input className="input-field" placeholder="Genre" required/>
            <input className="" type="time"required/>

            <button type="submit">Create Event</button>
        </form>
    )
}