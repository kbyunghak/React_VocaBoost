import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault(); // Prevents the default action of the form    

        fetch('http://localhost:3001/words/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                word: engRef.current.value,
                meaning: defRef.current.value,
                isDone: false,
            }),
        }).then(res => {
            if (res.ok) {
                alert('Word has been created successfully.');
                // engRef.current.value = '';
                // defRef.current.value = '';
                // dayRef.current.value = 1;
                navigate(`/day/${dayRef.current.value}`);            
            } else {
                alert('Failed to create word.');
            }            
        });
    }

    const engRef = useRef(null);
    const defRef = useRef(null);    
    const dayRef = useRef(null);

    return (
        <form  onSubmit={onSubmit}>
            <div className="input_area">
                <label>Word</label>    
                <input type="text" placeholder="Enter A Word." ref={engRef} />
            </div>
            <div className="input_area">
                <label>Definition</label>    
                <input type="text" placeholder="Enter Your Definition." ref={defRef}/>
            </div>
            <div className="input_area">                
                <label>Day</label>    
                <select ref={dayRef}>    
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}                 
                </select>                
            </div>
            <button>Add Word</button>
        </form>
    );
}