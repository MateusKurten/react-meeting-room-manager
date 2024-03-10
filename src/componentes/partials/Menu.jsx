import { Link } from "react-router-dom";


export default function Menu() {

    return (
        <div className="ml-2">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Início</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}