import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h1>
                {/* <a href="/">VocaBoost</a> */}
                <Link to={`/`}>VocaBoost</Link>
            </h1>
            <div className="menu">
                <a href="#x" className="link">Add Words</a>
                <a href="#x" className="link">Add Days</a>
            </div>
        </div>
    );
}