import db from "../db/data.json";
import { useParams } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import Word from "./Word";
import { useEffect, useState } from "react";

export default function Day() {
    const { day } = useParams();
    // console.log("selected day: " + day);
    //const isNumber = !isNaN(parseInt(day));       
    // const wordList = db.words.filter(word => word.day === Number(day));
    const [words, setWords] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3001/words?day=" + day)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setWords(data);
        });
    }
    , [day]);

    const foundWord = words.length > 0;
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