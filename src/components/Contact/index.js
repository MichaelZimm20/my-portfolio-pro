import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { validEmail } from '../../utils/helpers';

function Contact() {
    
    // error handling 
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({
        name:'',
        email:'',
        message:''
    });

    // destructure values to equal formState
    const { name, email, message } = formState

    // email validation for contact form
    // handles when values are added to the form
    function handleFormChange(e) {
        if (e.target.name === 'email') {
            const isValid = validEmail(e.target.value);
            console.log(isValid);

            // if email is not valid 
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            // if name not equal to length
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`)
            } else {
                setErrorMessage('');
            }
        }

        // if no error 
        if (!errorMessage) { setFormState({...formState, [e.target.name]: e.target.value })}
    }

    // handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


return (
        <section className='card'>
            <h1 className='mb-4 card-header mx-auto d-flex justify-content-center w-100'>Contact Me</h1>
            <Form className='card-body border-0 col-8 justify-content-center mx-auto form-fluid' onSubmit={handleFormSubmit}>
                
                {/* // name input */}
                <Form.Group>
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control type="text" name='name' defaultValue={name} placeholder="Name" onChange={handleFormChange}/>
                </Form.Group>
                {/* // email input */}
                <Form.Group>
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control type="email" name='email' defaultValue={email} placeholder="name@example.com" onChange={handleFormChange} />
                </Form.Group>
                {/* // message textarea  */}
                <Form.Group>
                    <Form.Label htmlFor="message">Message:</Form.Label>
                    <Form.Control as="textarea" name='message' rows='5' defaultValue={message} placeholder="Leave a message here" onChange={handleFormChange} />
                    {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
               )}
                </Form.Group>
               
                <Button className='col-md-4 my-2 mx-auto d-flex justify-content-center bg-warning border-dark border-0 fs-3 ' variant="primary" type="submit">Submit</Button>
            </Form>
        </section>
    );
};

export default Contact;