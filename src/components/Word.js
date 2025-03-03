import React, { useState } from 'react';

export default function Word({ word}) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggelShow() {
        setIsShow(!isShow);
    }

    function toggleIsDone() {
        setIsDone(!isDone);
    }

    return (
        <tr className={ isDone ? "off" : "" }>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleIsDone}/>
            </td>
            <td>{word.day}</td>
            <td>{word.word}</td>
            <td>{isShow && word.meaning}</td>
            <td>
                <button onClick={ toggelShow }>                    
                    { isShow? "Show" : "Hide" }
                </button>
            </td>
            <td>                                                    
                <button className="btn_del">Delete</button>
            </td>
        </tr>
    );
  }
