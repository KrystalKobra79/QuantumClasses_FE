import NavBar from './NavBar.jsx';
import { Link } from "react-router-dom";
import "../styles/NotFoundPage.scss";
import "../styles/RootStyle.scss";
const NotFoundPage = () => {
    return (
        <>
        <NavBar/>
        <h1>Oops! Page Not Found</h1>
        <h2>
            <Link to={"/"}>Back to Home</Link>
        </h2>
        </>
    )
}

export default NotFoundPage;