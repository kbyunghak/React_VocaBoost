import db from "../db/data.json";
import { useParams } from "react-router-dom";
import EmptyPage from "./EmptyPage";

export default function Day() {
    return (
        <div>
            <table> 
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Word</th>
                        <th>Meaning</th>
                    </tr>
                </thead>               
                <tbody>
                {
                    db.words.map(word => (
                        <tr key={word.id}>
                            <td>{word.day}</td>
                            <td>{word.word}</td>
                            <td>{word.meaning}</td>
                        </tr>
                    ))
                }
                </tbody>                                
            </table>
        </div>
    );         
}