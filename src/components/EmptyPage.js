import { Link } from "react-router-dom";

export default function EmptyPage() {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link to="/">Go back to the main page</Link>
        </div>  
  );
}