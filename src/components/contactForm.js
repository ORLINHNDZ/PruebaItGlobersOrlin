import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './insta.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
function ContactForm() {
  const [state, handleSubmit] = useForm("mdojkavj");
  if (state.succeeded) {
      return <p className="form-positioning">Gracias por Unirte!</p>;
  }
  return (
    <div className="form-positioning">
    <div className="footer-subscription">
      <form onSubmit={handleSubmit}>
      <input
        className="footer-input"
        id="email"
        type="email" 
        name="email"
        placeholder='Ingresa tu email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='btn-send'>
        <AiOutlineArrowRight/>
      </button>
    </form>
    </div>
    </div>
  );
}

export default ContactForm;