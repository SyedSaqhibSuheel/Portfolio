import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); 
  const [isSending, setIsSending] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); 

    emailjs
      .sendForm('service_q6tq12r', 'template_hklb2nq', form.current, {
        publicKey: 'Do2WMXopuipL5-g5H',
      })
      .then(
        () => {
          setIsSent(true); 
          form.current.reset(); 
          setIsSending(false); 

         
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false); 
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


     
      {isSent && <div className="alert-success">Message sent successfully!</div>}
      </div>
    </div>
  );
};
