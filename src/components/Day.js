import db from "../db/data.json";
import { useParams } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import Word from "./Word";

export default function Day() {
    const { day } = useParams();
    //const isNumber = !isNaN(parseInt(day));       
    console.log("selected day: " + day);
    const wordList = db.words.filter(word => word.day === Number(day));
    const foundWord = wordList.length > 0;
    if (!foundWord) {
        return (<EmptyPage />)        
    } else {
        return (
            <div>
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
                        wordList.map(word => (
                            <Word word={word} key={word.id} />
                        ))
                    }
                    </tbody>                                
                </table>
            </div>
        );    
    }        
}