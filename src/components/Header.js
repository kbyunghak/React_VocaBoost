import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                {/* <a href="/">VocaBoost</a> */}
                <Link to={`/`}>VocaBoost</Link>
            </h1>
            <div className="menu">
                <Link to="/create_words" className="link">Add Words</Link>
                <Link to="/create_day" className="link">Add Days</Link>                
            </div>
        </div>
    );
}