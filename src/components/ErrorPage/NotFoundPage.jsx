import NavBar from '../NavBar/NavBar.jsx';
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
    return (
        <>
        
        <main className="main-content">
            <NavBar/>
            <section>
                <h1>
                    OOPS! THIS PAGE DOES NOT EXISTS!
                </h1>
            </section>
            <section>
                <Link to={"/"}>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                Go Back Home</Link>
            </section>
        </main>
        </>
    )
}

export default NotFoundPage;