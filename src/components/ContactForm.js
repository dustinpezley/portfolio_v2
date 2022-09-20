import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  return (
    <div id="contact-form">
      <h1 id="contact-title" className="title">
        Contact
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
      <form className="ui form" id="form-elements">
        <div className="field">
          <label htmlFor="name">What is your name?</label>
          <input type="text" name="name" />
        </div>
        <div className="field">
          <label htmlFor="email">What is your email address?</label>
          <input type="email" name="email" />
        </div>
        <div className="field">
          <label htmlFor="message">What would you like to talk about?</label>
          <textarea name="message" cols={15} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
