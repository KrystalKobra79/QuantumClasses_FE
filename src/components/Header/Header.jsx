
import NavBar from '../NavBar/NavBar';
import './Header.scss';
import './QuantumClasses.jpg'
const Header = () => {
    return (
        <>
        <NavBar></NavBar>
        <main className='main-content'>
            
            <section className="card" id='img-card'>
                <img src="/src/assets/QuantumClasses.jpg" alt="Quantum Classes" id='qc_logo'/>
            </section>
            
        <section className='card' id='desc-card'>
            <h3 className="description">
            A premium institute offering to help students in their academic journey      
            </h3>
        </section>
        

        <section className='card' id='address-card'>
            <h2>
                Find us at:
                QUANTUM CLASSES
                1 No. Bijay Nagar,
                Madhyamgram, Kolkata-7000129
            </h2>
        </section>
    </main>
        </>
    );
}

export default Header