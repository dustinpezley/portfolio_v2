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
      {/* <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "What's your name?";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "What's your email address?";
          } else if (!values.message) {
            errors.message = 'What would you like to talk to me about?';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            window.open(
              `mailto:dustinpezley@gmail.com?from=${values.email}&subject=${values.name}%20-%20Looking%20to%20connect&body=${values.message}`
            );
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => {
          <Form>
            <label htmlFor="name">Your name: </label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email">Your email: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="message">"What would you like to talk about?</label>
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="div" />

            <button type="submit" id="form-button" disabled={isSubmitting}>
              Submit
            </button>
          </Form>;
        }}
      </Formik> */}
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
