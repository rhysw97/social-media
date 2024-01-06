import React, { useEffect, useState } from "react";
import   {BlackMassImage, HamishHawkImage, QuelleChrisImage } from "../../assets/images/image-links"  
import { FaCalendar, FaClock, FaLocationArrow} from "react-icons/fa";                         

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
        <div className="gothic text-white">
            <h1 className="heading">Events</h1>

            <div className="ml-16 flex flex-row w-[100%] flex-wrap">
                    <div className="flex flex-row gap-2 flex-wrap w-[100%]">
                        {events.map(event => {
                            return (<div className="basis-[45%] justify-around bg-green-500 p-4 rounded-lg mx-auto shadow-black shadow-md">
                                <div className="flex flex-col">
                                    <img className="w-[100%] h-[250px] object-cover" src={event.img }></img>
                                    <h2 className="text-center text-shadow-lg py-5 font-extrabold text-4xl">{event.artist}</h2>
                                    
                                </div>
                                <p className="text-center text-xl font-semibold">{event.location}</p>
                                <div className="w-[100%] flex flex-row my-4">
                                    <div className="flex flex-col items-center basis-1/2"><FaCalendar></FaCalendar><p>{event.date}</p></div>
                                    <div className="flex flex-col items-center basis-1/2"><FaClock></FaClock><p>{event.time}</p></div>
                                </div>
                            </div>)
                        })}

                    </div>
                </div>
            </div>
    );
}