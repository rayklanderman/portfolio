import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mnnpbdzv");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with:", { email: e.currentTarget.email.value, message: e.currentTarget.message.value });

    handleSubmit(e);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section id="contact" className="container">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">
          Email Address
          <input
            id="email"
            type="email"
            name="email"
            required
            style={{ backgroundColor: '#f0f0f0', color: '#333' }} // Change input color
          />
        </label>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Your Message:
          <textarea
            id="message"
            name="message"
            required
            style={{ backgroundColor: '#f0f0f0', color: '#333' }} // Change textarea color
          />
        </label>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} style={{ backgroundColor: '#FF5733', color: 'white' }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
