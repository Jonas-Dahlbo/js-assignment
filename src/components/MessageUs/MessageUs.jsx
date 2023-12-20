import React from 'react'
import { useState } from 'react'

const MessageUs = () => {
    const [name, setName] = useState('')
    const [placeholderName, setPlaceholderName] = useState('Name*')
    const [nameError, setNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [placeholderEmail, setPlaceholderEmail] = useState('Email*')
    const [emailError, setEmailError] = useState(false)
    const [message, setMessage] = useState('')
    const [placeholderMessage, setPlaceholderMessage] = useState('Your Message*')
    const [messageError, setMessageError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {

        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLength(e.target.value, 2))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateLength(e.target.value, 3))
                break
            case 'message':
                setMessage(e.target.value)
                setMessageError(validateLength(e.target.value, 4))
                break
        }
    }

    const validateLength = (value, minLength = 1) => {
        if (value.length < minLength)
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')

        if (nameError || name == '') {
            setPlaceholderName("Your name must be at least 2 characters long")
            setErrorMessage('Something went wrong.')
        }
        if (emailError || email == '') {
            setPlaceholderEmail("You must provide a valid email adress")
            setErrorMessage('Something went wrong.')
        }
        if (messageError || message == '') {
            setPlaceholderMessage("You must leave a message that's at least 4 characters long")
            setErrorMessage('Something went wrong.')
        }

        if (!nameError && !emailError && !messageError) {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                })
            })

            if (result.status === 200)
                alert('Message sent successfully')
            else
                setErrorMessage('Something went wrong.')
        }
    }

    return (
        <section className="message">
            <div className="container">
                <h2>Leave us a message <br />for any information.</h2>
                <p className="errorMessage">{errorMessage}</p>
                <form onSubmit={handleSubmit} noValidate>
                    <input type="text" name="name" placeholder={placeholderName} value={name} onChange={(e) => handleChange(e)} />
                    <input type="text" name="email" placeholder={placeholderEmail} value={email} onChange={(e) => handleChange(e)} />
                    <textarea name="message" placeholder={placeholderMessage} value={message} onChange={(e) => handleChange(e)}
                        cols="30" rows="5"></textarea>
                    <button type="submit" className="btn-yellow">Send Message <i
                        className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    )
}

export default MessageUs