
import './Header.scss';
import './QuantumClasses.jpg'
const Header = () => {
    return (
        <>
        <main className='main-content'>
            <section className="card">
                <img src="QuantumClasses.jpg" alt="Quantum Classes" id='qc_logo'/>
            </section>
            
        <section className='card'>
            <h3 className="description">
            A premium institute offering to help students in their academic journey      
            </h3>
        </section>
        

        <section className='card'>
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