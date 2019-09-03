import React from 'react';
import './ContactForm.css';

const ContactForm = () =>   {
    return(
        <section className="outside_contact_form">
    <div className="my-heading">
      <div className="my-heading-width">CONTACT FORM</div>
    </div>
    <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
      <div className="inside_contact_form">
    <p>
    <input type="text" name="name" placeholder="Name"/>
  </p>
  <p>
    <input type="email" name="email" placeholder="Email"/>
  </p>
  
  <p>
    <textarea className="message" name="message"></textarea>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
  </div>
</form>
    </section>
    )
}

export default ContactForm