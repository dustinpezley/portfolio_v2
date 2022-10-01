import React from 'react';
import { validateEmail } from '../utils/helpers';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Please enter a valid email address.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.value.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function sendMail({ name, email, message }) {
    const link =
      'mailto:dustinpezley@gmail.com' +
      '?subject=' +
      encodeURIComponent(name + ' would like to discuss some things.') +
      '&body=' +
      encodeURIComponent(message + '\n I can be reached at: ' + email);

    window.location.href = link;
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMail({ name, email, message });
  }

  return (
    <div id="contact-form">
      <h1 id="contact-title" className="title">
        CONTACT
      </h1>
      <p id="contact-description">
        Fill out the form below to send an email directly to{' '}
        <span id="contact-description-email">dustinpezley@gmail.com</span>.
      </p>
      <form className="ui form" id="form-elements" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            name="name"
            autoComplete="on"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">What is your email address?</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="message">What would you like to talk about?</label>
          <textarea
            name="message"
            cols={15}
            autoComplete="on"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="ui basic big button" id="form-button">
          <span id="form-button-label">Let's talk</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
