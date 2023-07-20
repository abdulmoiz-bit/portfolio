//import { style } from '@mui/system';
import { useState } from 'react';
import './Contact.css';


const Contact = () => {
    const [modal, showModal] = useState(false);
    return (
        <div className='contact' id='contact'>
            {/*
            <h1 style={{ fontSize: '6vw', textAlign: "center", textTransform: 'uppercase'}}>
                Contact
            </h1>
            */}
            <div className='contactme'>
                <form className='form' action="https://formsubmit.co/blogeesnow@gmail.com" method="POST" autoComplete="off" type="hidden" >
                    <input className='input' type="text" name="name" placeholder='Full Name'
                        required
                    />
                    <input className='input' type="email" name="email" placeholder='Email'
                        required
                    />
                    <textarea className='textarea' name="message" placeholder='Write Something'
                    ></textarea>

                    <button className='submit' type="submit" onClick={() => showModal(!modal)}>Submit</button>
                    {/*
                    {modal && (
                        <div className='thanks-modal'>
                            <img src="assets/images/avatar.png" alt="" />
                            <p style={{color: 'black'}}>Thanks, <br />
                            I will get back to you as soon as possible</p>
                            <button onClick={() => showModal(!modal)}>Close</button>
                        </div>
                    )}
                    */}
                    <input type="hidden" name="_captcha" value="false" />
                </form>
            </div>
        </div>
    )
}

export default Contact;