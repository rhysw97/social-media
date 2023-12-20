import React, { useEffect, useState } from "react";

export default function events() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents()
    }, [])
    return (
        <div>
            <h1 className="header">Events</h1>

            <div>

            </div>
        </div>
    );
}