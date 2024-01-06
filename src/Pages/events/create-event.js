import React from "react";

export default function CreateEvent() {

    return(
        <form>
            <input className="input-field" placeholder="Artist Name"/>
            <input className="input-field" placeholder="location"/>
            <input className="input-field" placeholder="Genre" />
            <input className="" type="time"/>

            <button type="submit">Create Event</button>
        </form>
    )
}