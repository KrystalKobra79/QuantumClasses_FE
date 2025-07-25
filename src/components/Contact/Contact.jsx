
import './Contact.scss';

import { useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar.jsx';

const Contact = () => {
    const [form, setForm] = useState(
        {
            name:'', email:'', message:''
        }
    );
    const [status, setStatus] = useState('');

    const handleFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
        console.log(e);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            // url,data,{headers:{"Content-Type" : "application/json"}}
            const response = await axios.post('http://localhost:9090/api/send-email',form, {headers:{"Content-Type" : "application/json"}});
            setStatus('Message sent successfully!!!');
            setForm({name:'', email:'', message:''});
            console.log(response)
        } catch (er) {
            console.error(er.response.data);
            setStatus('Failed to send your query. Try again later... :)');
        }
    };
    return (
        <>
        <NavBar></NavBar>
        <main className="main-content">
        <section className="form-card">
            <form className = "contact-form" action={handleFormChange} method="post">
                <h1>Contact us for your queries:</h1>
                <input type="text" name="name" value={form.name} placeholder='Your Name' id="form_name" onChange={handleFormChange} required/>
                <input type="text" name="email" value={form.email} placeholder='Your Email-Id' id="form_email" onChange={handleFormChange} required/>
                <textarea rows="5" name="message" value={form.message} placeholder='Your Questions :)' id="form_message" onChange={handleFormChange} required/>
                <button type="submit" onClick={handleFormSubmit}>Send Message</button>
            </form>
            <div className='status-cardlet'>
                <h3>Enquiry Status:{form.name.length === 0 && form.email.length === 0 && form.message.length === 0 ? " Not Writing..." : " Writing..."}</h3>
            </div>
        </section>
        
        <section className="info-card">
            <div className="card-item">
            <h3>For enquiries, fill out the form and their required fields and the click on submit.</h3>
            </div>
            <div className="card-item">
            <h3>Call between 09:30 a.m. and 09.30 p.m. for further enquiries.</h3>
            </div>
        </section>
        
        </main>
        </>
    )
}

export default Contact;