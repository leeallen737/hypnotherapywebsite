import React from 'react';
import { withFormik } from 'formik';

const ContactForm = () =>   {
    return(
        <div>
            <input type="email" name="email" placeholder="Email"/>
        </div>
    )
}

const FormikApp = withFormik({

})(ContactForm)

export default ContactForm 