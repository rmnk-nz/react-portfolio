import React, { useState } from 'react';
import '../../styles/Contact.css';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'message') {
          setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (!validateEmail(email) && !name) {
          setErrorMessage(
              'Email or username is invalid'
              )
              return;
        }
        if (!message) {
            setErrorMessage(
              `Please provide details as to why you wish to get in contact`
            )
            return;
        }
        alert(`Hello ${name}, thank you for submitting your details. We will be in touch`);
    
        setName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');
      };
    return (
        <>
        <h2 className='contactTitle'>Contact @RM</h2>
        <form className='contactForm'>
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            />
            <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
            />
            <input
            className='messageBox'
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Details as to why you wish to get in contact"
            />
            <button type="button" onClick={handleFormSubmit}>SEND</button>
        </form>
        {errorMessage && (
        <div>
          <p className="errorText">{errorMessage}</p>
        </div>
      )}
        </>
    );
}
