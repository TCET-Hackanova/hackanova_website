import React, { useState } from 'react';
import { BsInstagram, BsTelegram, BsYoutube } from 'react-icons/bs';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate an API or form submission service like Formspree here
    // After successful submission, update the form status.
    setIsSubmitted(true);
  };
  const emailUser = "tcet.hackanova";
  const emailDomain = "gmail.com";

  return (
    <section id="contact" className="contact pt-16 ">
      <div className="container mx-auto px-4" data-aos="fade-up">
       
        <div className="flex flex-col lg:flex-row justify-center gap-16 lg:p-10">
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start border border-gray-900 rounded-md p-8">
            <div className="info lg:space-y-6 space-y-4">
              <div className="address text-center lg:text-left">
                <i className="bi bi-geo-alt text-3xl"></i>
                <h4 className="text-xl font-semibold text-left ">Location:</h4>
                <p className="lg:text-lg text-sm text-left">
                  Thakur College Of Engineering And Technology. <br />
                  A-Block, Thakur Educational Campus, <br />
                  Shyamnarayan Thakur Marg, Thakur Village, Kandivali(E). <br />
                  Mumbai - 400101.
                </p>
              </div>

              <div className="email text-left">
                <i className="bi bi-envelope text-3xl"></i>
                <h4 className="text-xl font-semibold">Email:</h4>
                <p>
                  <a target='_blank' href="mailto:tcet.hackanova@gmail.com?subject=Hackanova%20Queries" className="text-blue-500">
                    tcet.hackanova@gmail.com
                  </a>
                </p>
              </div>

              <div className="linktree text-left">
                <i className="bi bi-envelope text-3xl"></i>
                <h4 className="text-xl font-semibold">Access linktree for Google forms and PPT Templates:</h4>
                <p>
                  <a target='_blank' href="https://linktr.ee/hackanova4.0" className="text-blue-500">
                   linktr.ee/hackanova4.0 
                  </a>
                </p>
              </div>
              <div className="phone text-left">
                <i className="bi bi-phone text-3xl"></i>
                <h4 className="text-xl font-semibold">Call:</h4>
                <p>
                  <a target='_blank' href="https://wa.me/919021440961" className="text-blue-500">
                    Joint Technical: +91 90214 40961
                  </a>
                  ,{' '}
                  <a target='_blank' href="https://wa.me/919321679469" className="text-blue-500">
                    Joint Technical:+91 93216 79469
                  </a>
                </p>
              </div>
              <div className="gap-5 flex">
                <h1 className='text-xl font-semibold'>Socials</h1>
              <a target='_blank' href="https://www.instagram.com/tsdw_tcet?igsh=eXN1NDdyNjd5cG8z">
          <BsInstagram className="text-2xl text-white"  />
          </a>
          <a target="_blank" href="https://www.youtube.com/@tcet_tsdw" >
          <BsYoutube className="text-2xl text-white" />
          
          </a>
          <a target='_blank' href="https://t.me/+T-xYOtvS4IwwY2U9">
          <BsTelegram className="text-2xl text-white"  />
        
          </a>
              </div>
              <div className="gap-5 flex justify-center">

          </div>
              <div className="map mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2403849990666!2d72.8720307!3d19.2063003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sbg!4v1630295655559!5m2!1sen!2sbg"
                  frameBorder="0"
                  style={{ border: '0', width: '100%', height: '290px' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full lg:w-2/5 mt-8  lg:mt-0 border border-gray-800 rounded-md p-8">
           
            <ContactForm  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
