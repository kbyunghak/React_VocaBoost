import useFetch from "../hooks/useFetch";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {        
        e.preventDefault(); // Prevents the default action of the form    

        if (!isLoading) {
            setIsLoading(true);

            fetch('http://localhost:8080/api/words/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: Date.now().toString(),
                    day: dayRef.current.value,
                    word: wordRef.current.value,
                    meaning: meanRef.current.value,
                    isDone: false,
                }),
            }).then(res => {
                if (res.ok) {
                    alert('Word has been created successfully.');
                    navigate(`/day/${dayRef.current.value}`);                                
                } else {
                    alert('Failed to create word.');
                }     
                setIsLoading(false);       
            });
        }   
    }

    const wordRef = useRef(null);
    const meanRef = useRef(null);    
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Word</label>    
                <input type="text" placeholder="Enter A Word." ref={wordRef} />
            </div>
            <div className="input_area">
                <label>Definition</label>    
                <input type="text" placeholder="Enter Word's Definition." ref={meanRef}/>
            </div>
            <div className="input_area">                
                <label>Day</label>    
                <select ref={dayRef}>    
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}                 
                </select>                
            </div>
            <button style={{opacity: isLoading? 0.3 : 1}}>  
                {isLoading ? "Saving..." : "Save"}
            </button>
        </form>
    );
}