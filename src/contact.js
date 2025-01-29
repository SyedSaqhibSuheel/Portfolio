import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); // To show success message
  const [isSending, setIsSending] = useState(false); // To show loading status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Set loading state to true

    emailjs
      .sendForm('service_q6tq12r', 'template_hklb2nq', form.current, {
        publicKey: 'Do2WMXopuipL5-g5H',
      })
      .then(
        () => {
          setIsSent(true); // Set success message
          form.current.reset(); // Reset the form
          setIsSending(false); // Set loading state to false

          // Hide the success message after 3 seconds
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false); // Set loading state to false if error occurs
        }
      );
  };

  return (
    <div id="contact" className="section5">
      <h2>Contact</h2>
      <div className='cont'>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="from_name" required />
        
        <label>Email</label>
        <input type="email" name="from_email" required />
        
        <label>Message</label>
        <textarea name="message" required></textarea>
        
        <input type="submit" value={isSending ? "Sending..." : "Send"} disabled={isSending} />
      </form>


      {/* Success message */}
      {isSent && <div className="alert-success">Message sent successfully!</div>}
      </div>
    </div>
  );
};
