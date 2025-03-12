import React, { useState } from 'react';

export default function Word({ word : w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggelShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        //setIsDone(!isDone);
        fetch(process.env.REACT_APP_API_URL + `/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },            
            body: JSON.stringify({ 
                ...word, 
                isDone: !isDone 
            }),
        })
        .then(res => {
            if (res.ok) {
                setIsDone(!isDone); 
            }
        }); 
    }

    function del() {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API_URL + `/words/${word.id}`, {
                method: 'DELETE',
            })
            .then(res => {
                if (res.ok) {
                    setWord({ id: 0 });
                }
            })  
            .catch(error => {
                console.error("Delete error:", error);
                alert("Error deleting word.");
            });;
        } else {
            alert('Cancelled');
        }   
    }

    if (word.id === 0) {
        return null;
    }   

    return (
        <tr className={ isDone ? "off" : "" }>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
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
                <button className="btn_del" onClick={ del }>Delete</button>
            </td>
        </tr>
    );
  }
