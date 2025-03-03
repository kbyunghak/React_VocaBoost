import db from "../db/data.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DayList() {
    const [days, setDays] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3001/days")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDays(data);
        });        
    }, []); // []: Runs only once initially
            // [count]: Runs whenever 'count' changes
            // [days]: Runs whenever 'days' changes
            // [count, days]: Runs whenever either 'count' or 'days' changes
    
    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>                    
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul> 
        </>
       
    );
}