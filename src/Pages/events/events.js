import React, { useEffect, useState } from "react";
import   {BlackMassImage, HamishHawkImage, QuelleChrisImage } from "../../assets/images/image-links"  
import { FaCalendar, FaClock } from "react-icons/fa";                         

export default function Events() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents(() => {
            return [
                {
                    artist: 'Black Mass',
                    location: 'O2 Academy- Bristol',
                    date: '24th Sep 2024',
                    time: '19:00',
                    img: BlackMassImage
                    
                },
                {
                    artist: 'Quelle Chris',
                    location: 'London Roundhouse',
                    date: '7th Mar 2024',
                    time: '18:00',
                    img: QuelleChrisImage
                    
                },
                {
                    artist: 'Hamish Hawk',
                    location: 'O2 Academy- Brixton',
                    date: '19th Aug 2024',
                    time: '18:30',
                    img: HamishHawkImage
                    
                }
            ]
        })
    },[])
    return (
        <div className="h-20">
            <h1 className="heading">Events</h1>

            <div className="ml-16 flex flex-row w-[100%] flex-wrap">
                <div className="mx-5">
                    <div className="flex flex-row gap-2 flex-wrap w-[100%]">
                        {events.map(event => {
                            return (<div className="basis-[45%] justify-around bg-slate-500 mx-auto">
                                <div className="flex flex-col">
                                    <img className="w-[100%] h-[250px] object-cover" src={event.img }></img>
                                    <h2 className="">{event.artist}</h2>
                                    
                                </div>
                                <p>{event.location}</p>
                                <div className="w-[100%]flex row">
                                    <div className="flex flex-row"><FaCalendar></FaCalendar><p>{event.date}</p></div>
                                    <div className="flex flex-row"><FaClock></FaClock><p>{event.time}</p></div>

                                </div>
                            </div>)
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}