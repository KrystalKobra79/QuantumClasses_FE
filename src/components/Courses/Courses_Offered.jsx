import './Courses_Offered.scss';
import NavBar from '../NavBar/NavBar.jsx';
const Courses_Offered = () => {
    return (
        <>
        <NavBar></NavBar>
        <main className='main-container'>

            <h1>Courses Offered:</h1>
            <section className='course-card-container'>

                <div className="course-card">
                    <div className="course-title">
                        <h3>Mathematics</h3>
                    </div>
                    <div className="course-content">
                        <p>VII-XII</p>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-title">
                        <h3>Physics</h3>
                    </div>
                    <div className="course-content">
                        <p>VII-XII</p>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-title">
                        <h3>Chemistry</h3>
                    </div>
                    <div className="course-content">
                        <p>VII-XII</p>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-title">
                        <h3>Biology</h3>
                    </div>
                    <div className="course-content">
                        <p>VII-XII</p>
                    </div>
                </div>

                <div className="course-card">
                    <div className="course-title">
                        <h3>Computer</h3>
                        <h3>Science</h3>
                    </div>
                    <div className="course-content">
                        <p>VII-XII</p>
                    </div>
                </div>

                   </section>
        </main>
        
        </>
    )
}

export default Courses_Offered;