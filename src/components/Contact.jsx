import { useState } from 'react';  
import emailjs from '@emailjs/browser';  

const Contact = () => {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    subject: '',  
    message: ''  
  });  
  
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [submitMessage, setSubmitMessage] = useState('');  
  const [submitError, setSubmitError] = useState(false);  
  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value  
    });  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    setIsSubmitting(true);  
    
    // Create template params using the exact structure that worked in your test  
    const templateParams = {  
      from_name: "Ganesh",
      to_name: formData.name,
      email: "ganeshtadi01@gmail.com",
      subject: formData.subject,
      message: formData.message,
      from_email:formData.email, 
      reply_to: formData.email 
    };  
    
    // Send email using EmailJS   
    emailjs.send(  
      "service_72m554t",  
      "template_1i1wrab",  
      templateParams,  
      "aP0ICg6B1zm12BW7A" 
    )  
    .then((result) => {  
      console.log("Success:", result);  
      setIsSubmitting(false);  
      setSubmitMessage('Your message has been sent. I will get back to you soon!');  
      setSubmitError(false);  
      
      // Clear form  
      setFormData({  
        name: '',  
        email: '',  
        subject: '',  
        message: ''  
      });  
      
      // Clear success message after 5 seconds  
      setTimeout(() => {  
        setSubmitMessage('');  
      }, 5000);  
    })  
    .catch((error) => {  
      console.error('Email error:', error);  
      setIsSubmitting(false);  
      setSubmitMessage('Failed to send message. Please try again later.');  
      setSubmitError(true);  
    });  
  };  

  return (  
    <section id="contact" className="py-16 bg-gray-50">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="text-center mb-12">  
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>  
          <div className="h-1 w-20 bg-[#900C3F] mx-auto"></div>  
        </div>  
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
          {/* Contact Info */}  
          <div className="space-y-8">  
            <div className="flex items-start">  
              <div className="bg-[#FFF0F5] p-3 rounded-full text-[#900C3F] mr-4">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />  
                </svg>  
              </div>  
              <div>  
                <h4 className="font-bold text-lg mb-1">Email</h4>  
                <p className="text-gray-700">ganeshtadi01@gmail.com</p>  
              </div>  
            </div>  

            <div className="flex items-start">  
              <div className="bg-[#FFF0F5] p-3 rounded-full text-[#900C3F] mr-4">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />  
                </svg>  
              </div>  
              <div>  
                <h4 className="font-bold text-lg mb-1">Phone</h4>  
                <p className="text-gray-700">+91 6300395308, +91 9494595308</p>  
              </div>  
            </div>  

            <div className="flex items-start">  
              <div className="bg-[#FFF0F5] p-3 rounded-full text-[#900C3F] mr-4">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />  
                </svg>  
              </div>  
              <div>  
                <h4 className="font-bold text-lg mb-1">Location</h4>  
                <p className="text-gray-700">Hyderabad, India</p>  
              </div>  
            </div>  
            
            <div className="pt-4">  
              <h4 className="font-bold text-lg mb-4">Connect With Me</h4>  
              <div className="flex space-x-4">  
                <a href="https://github.com/ganeshtadi" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors cursor-pointer">  
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">  
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />  
                  </svg>  
                </a>  
                <a href="https://linkedin.com/in/ganeshtadi" target="_blank" rel="noopener noreferrer" className="bg-[#0060ef] p-3 rounded-full text-white hover:bg-[#0064ef] transition-colors cursor-pointer">  
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">  
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />  
                  </svg>  
                </a>  
                <a href="https://www.upwork.com/freelancers/~0177db9cbd6867e8cd" target="_blank" rel="noopener noreferrer" className="bg-green-600 p-3 rounded-full text-white hover:bg-green-700 transition-colors cursor-pointer">  
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">  
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.544-1.14-2.544-2.546v-7.112H0v7.112c0 2.933 2.385 5.328 5.318 5.328 2.934 0 5.318-2.395 5.318-5.329v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.612 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.44-5.439-5.44z" />  
                  </svg>  
                </a>  
              </div>  
            </div>  
          </div>  
          
          {/* Contact Form */}  
          <div className="bg-white rounded-lg shadow-md p-8">  
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>  
            
            {submitMessage && (  
              <div className={`p-4 mb-6 rounded-md ${submitError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>  
                {submitMessage}  
              </div>  
            )}  
            
            <form onSubmit={handleSubmit}>  
              <div className="mb-4">  
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>  
                <input  
                  type="text"  
                  id="name"  
                  name="name"  
                  value={formData.name}  
                  onChange={handleChange}  
                  required  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900C3F]"  
                  placeholder="John Doe"  
                />  
              </div>  
              
              <div className="mb-4">  
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>  
                <input  
                  type="email"  
                  id="email"  
                  name="email"  
                  value={formData.email}  
                  onChange={handleChange}  
                  required  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900C3F]"  
                  placeholder="john@example.com"  
                />  
              </div>  
              
              <div className="mb-4">  
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>  
                <input  
                  type="text"  
                  id="subject"  
                  name="subject"  
                  value={formData.subject}  
                  onChange={handleChange}  
                  required  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900C3F]"  
                  placeholder="Project Inquiry"  
                />  
              </div>  
              
              <div className="mb-6">  
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>  
                <textarea  
                  id="message"  
                  name="message"  
                  value={formData.message}  
                  onChange={handleChange}  
                  required  
                  rows="4"  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900C3F]"  
                  placeholder="Hello, I would like to discuss a project..."  
                ></textarea>  
              </div>  
              
              <button  
                type="submit"  
                disabled={isSubmitting}  
                className="w-full px-6 py-3 bg-[#900C3F] text-white font-medium rounded-md shadow hover:bg-[#7A0A35] transition-colors focus:outline-none focus:ring-2 focus:ring-[#900C3F] focus:ring-offset-2 disabled:opacity-70 cursor-pointer"  
              >  
                {isSubmitting ? 'Sending...' : 'Send Message'}  
              </button>  
            </form>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Contact;  