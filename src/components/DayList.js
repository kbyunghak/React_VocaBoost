import db from "../db/data.json";
import { Link } from "react-router-dom";

export default function DayList() {
    return (
        <ul className="list_day">
            {db.days.map(day => (
                <li key={day.id}>
                    {/* <p>Day {day.day}</p> */}
                    {/* <button onClick = {() => console.log(day.day)}>Day {day.day}</button> */}
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}