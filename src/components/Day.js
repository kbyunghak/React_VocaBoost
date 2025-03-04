import { useParams } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import Word from "./Word";
import useFetch from "../hooks/useFetch.js";

export default function Day() {
    const { day } = useParams();    
    const words = useFetch('http://localhost:3001/words?day=' + day);    
    const existDay = useFetch('http://localhost:3001/days?day=' + day);    

    if (existDay.length == 0) {
        return (<EmptyPage />)        
    } else {
        return (
            <div>
                <h1 style={{float: 'left'}}> Day {day} </h1>
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