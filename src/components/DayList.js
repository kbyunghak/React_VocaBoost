import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

export default function DayList() {
    //const [days, setDays] = useState([]);
    const days = useFetch(process.env.REACT_APP_API_URL + '/days');
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