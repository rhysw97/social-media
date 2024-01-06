import React, { useState } from "react";

export default function Event(props) {

    const eventInfo = {} 

    return(
        <div className="basis-[45%] justify-around bg-green-500 p-4 rounded-lg mx-auto shadow-black shadow-md">
                                <div className="flex flex-col">
                                    <img className="w-[100%] h-[250px] object-cover" src={eventInfo.img }></img>
                                    <h2 className="text-center text-shadow-lg py-5 font-extrabold text-4xl">{eventInfo.artist}</h2>
                                    
                                </div>
                                <p className="text-center text-xl font-semibold">{eventInfo.location}</p>
                                <div className="w-[100%] flex flex-row my-4">
                                    <div className="flex flex-col items-center basis-1/2"><FaCalendar></FaCalendar><p>{eventInfo.date}</p></div>
                                    <div className="flex flex-col items-center basis-1/2"><FaClock></FaClock><p>{eventInfo.time}</p></div>
                                </div>
                            </div>
    )
}