import React from 'react';  

const Footer = () => {  
  return (  
    <footer className="w-full bg-gray-900 text-white py-8 mt-auto">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {/* About Section */}  
          <div className="mb-6 md:mb-0">  
            <h3 className="text-xl font-semibold mb-4">Tadi Ganesh</h3>  
            <p className="text-gray-400 mb-4">  
              Full Stack Developer specializing in web application development, Zoho integrations, and responsive design.  
            </p>  
            <p className="text-gray-400">  
              Based in Hyderabad, India  
            </p>  
          </div>  
          
          {/* Quick Links */}  
          <div className="mb-6 md:mb-0">  
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>  
            <ul className="space-y-2">  
              <li>  
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>  
              </li>  
              <li>  
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>  
              </li>  
              <li>  
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>  
              </li>  
              <li>  
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>  
              </li>  
              <li>  
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>  
              </li>  
              <li>  
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>  
              </li>  
            </ul>  
          </div>  
          
          {/* Contact & Social */}  
          <div>  
            <h3 className="text-xl font-semibold mb-4">Contact</h3>  
            <p className="text-gray-400 mb-2">  
              <a href="mailto: ganeshtadi01@gmail.com" className="hover:text-white transition-colors">  
              ganeshtadi01@gmail.com
              </a>  
            </p>  
            <p className="text-gray-400 mb-6">  
              <a href="tel:+916300395308" className="hover:text-white transition-colors">  
                +91 6300395308
              </a>  
            </p>  
            
            {/* Social Links */}  
            <div className="flex space-x-4 mb-6">  
              <a href="https://www.linkedin.com/in/tadi-ganesh-b1a600238" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">  
                <span className="sr-only">LinkedIn</span>  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">  
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />  
                </svg>  
              </a>  
              <a href="https://github.com/ganeshtadi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">  
                <span className="sr-only">GitHub</span>  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">  
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />  
                </svg>  
              </a>  
              <a href="https://www.upwork.com/freelancers/~0177db9cbd6867e8cd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">  
                <span className="sr-only">UpWork</span>  
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">  
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.544-1.14-2.544-2.546v-7.112H0v7.112c0 2.933 2.385 5.328 5.318 5.328 2.934 0 5.318-2.395 5.318-5.329v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.612 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.44-5.439-5.44z" />  
                </svg>  
              </a>  
            </div>  
            
            <p className="text-gray-400">  
              &copy; {new Date().getFullYear()} Tadi Ganesh. All rights reserved.  
            </p>  
          </div>  
        </div>  
      </div>  
    </footer>  
  );  
};  

export default Footer;  