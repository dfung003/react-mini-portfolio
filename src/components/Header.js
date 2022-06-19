import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <nav className="nav">
            <Link className="nav-link" to="/">
                <h1>Damon Fung</h1>
            </Link>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/dfung003">
                <div>GitHub</div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/damonfung27/">
                <div>LinkedIn</div>
            </a>
        </nav>
    )

}