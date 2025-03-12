import useFetch from '../hooks/useFetch';   
import { useNavigate } from 'react-router-dom';

export default function CreateDays() {
    const day = useFetch(process.env.REACT_APP_API_URL + '/days');    
    const navigate = useNavigate();
    function onSubmit(event) {
        event.preventDefault();

        fetch(process.env.Rander_URI + '/days', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: day.length + 1 ,
            }),
        }).then(res => {
            if (res.ok) {
                alert('Day has been created successfully.');     
                //navigate(`/`);   
                navigate(`/day/${day.length + 1}`);     
            } else {
                alert('Failed to create day.');
            }            
        }); 
    }   

    return (
        <form onSubmit={ onSubmit}>
            <div>
                <h3>Number of Days: {day.length} </h3>                                               
                <button>Add 1 Day</button>
            </div>            
        </form>
    );
}