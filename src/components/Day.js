import { useParams, Link } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import Word from "./Word";
import useFetch from "../hooks/useFetch.js";

export default function Day() {    
    const { day } = useParams();    
    const maxDay = useFetch("http://localhost:3001/days").length;
    const words = useFetch('http://localhost:3001/words?day=' + day);    
    const existDay = useFetch('http://localhost:3001/days?day=' + day);    

    if (existDay.length == 0) {
        return (<EmptyPage />)        
    } else {
        return (
            <div>                
                <div className="header">     
                    <h1> Day {day} </h1>               
                    <div className="menu">    
                         {/* Previous button: Navigates to the previous day, but not below day 1 */}                    
                        <Link to={`/day/${Math.max(1, Number(day) - 1)}`} className="link">&#9665;</Link>
                         {/* Next button: Navigates to the next day, but not above the max day */}
                        <Link to={`/day/${Math.min(maxDay, Number(day) + 1)}`} className="link">&#9655;</Link>
                    </div>
                    <h2 className="btn_del">
                        {words.length === 0 ? `There are no words for Day ${day}` : ""}
                    </h2>               
                </div>
                
                <table> 
                    <thead>
                        <tr>
                            <th></th>
                            <th>Day</th>
                            <th>Word</th>
                            <th>Meaning</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>               
                    <tbody>
                    {
                        words.map(word => (
                            <Word word={word} key={word.id} />
                        ))
                    }
                    </tbody>                                
                </table>
            </div>
        );    
    }        
}