import { Link } from "react-router";

function Header() {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                    <Link to='/following'>following</Link>
                    <Link to='/profile'>profile</Link>
                    <Link to='/upload'>upload</Link>
                    <Link to='/search'>search</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;