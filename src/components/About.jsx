const About = () => {  
  return (  
    <section id="about" className="py-16 bg-white">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="text-center mb-12">  
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>  
          <div className="h-1 w-20 bg-[#900C3F] mx-auto"></div>  
        </div>  
        
        <div className="flex flex-col md:flex-row gap-12 items-center">  
          <div className="md:w-1/3">  
            <div className="aspect-square w-full max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto relative group">  
              <img   
                src="/api/placeholder/400/400"   
                alt="Tadi Ganesh"   
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#900C3F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">  
                <p className="text-white font-medium">Lead Developer at Nexivo Consulting</p>  
              </div>  
            </div>  
          </div>  
          
          <div className="md:w-2/3">  
            <h3 className="text-2xl font-bold mb-4">Lead Developer & Zoho Extension Developer</h3>  
            <p className="mb-4 text-gray-700 leading-relaxed">  
              I'm a results-driven Full Stack Developer specializing in enterprise-grade Zoho ecosystem solutions. With extensive expertise in Deluge scripting, Zoho API development, and custom extension development, I transform business workflows through tailored Zoho implementations that maximize operational efficiency and ROI.  
            </p>  
            <p className="mb-6 text-gray-700 leading-relaxed">  
              At Nexivo Consulting, I spearhead complex Zoho integrations across CRM, Recruit, Creator, and Analytics platforms while mentoring development teams in Zoho best practices. My technical expertise includes developing custom widgets, extensions, and middleware solutions that seamlessly connect Zoho with third-party systems creating unified business ecosystems.  
            </p>  
            
            {/* Key Skills Section */}  
            <div className="mb-6">  
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Core Expertise</h4>  
              <div className="flex flex-wrap gap-2 mb-4">  
                {['Zoho API Integration','Extension Developer', 'Workflow Automation', 'JavaScript', 'Node.js','Express.js','React','Webflow','Custom Module Development','Deluge Scripting', 'Team Leadership'].map((skill, index) => (  
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">  
                    {skill}  
                  </span>  
                ))}  
              </div>  
            </div>  
            
            {/* Contact Information - More professionally organized */}  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">  
              <div className="flex items-center gap-2">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#900C3F]" viewBox="0 0 20 20" fill="currentColor">  
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />  
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />  
                </svg>  
                <span className="text-gray-700">ganeshtadi01@gmail.com</span>  
              </div>  
              <div className="flex items-center gap-2">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#900C3F]" viewBox="0 0 20 20" fill="currentColor">  
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />  
                </svg>  
                <span className="text-gray-700">+91 6300395308</span>  
              </div>  
              <div className="flex items-center gap-2">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#900C3F]" viewBox="0 0 20 20" fill="currentColor">  
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />  
                </svg>  
                <span className="text-gray-700">Hyderabad, India</span>  
              </div>  
              <div className="flex items-center gap-2">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#900C3F]" viewBox="0 0 20 20" fill="currentColor">  
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />  
                </svg>  
                <span className="text-gray-700">English, Hindi, Telugu</span>  
              </div>  
            </div>  
            
            {/* Professional Highlight */}  
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 mb-6">  
              <p className="italic text-gray-700">  
              "Product Developer skilled in building enterprise solutions, websites, and Zoho integrations with Google, Microsoft ect, reducing manual work by 65%."  
              </p>  
            </div>  
            
            {/* Call to Action Buttons */}  
            <div className="flex flex-wrap gap-4">  
              <a   
                href="#contact"   
                className="inline-block px-6 py-3 bg-[#900C3F] text-white font-medium rounded-lg shadow hover:bg-[#7A0A35] transition duration-200"  
              >  
                Contact Me  
              </a>  
              <a   
                href="#resume"   
                className="inline-block px-6 py-3 border border-[#900C3F] text-[#900C3F] font-medium rounded-lg hover:bg-[#FFF0F5] transition duration-200"  
              >  
                View Resume  
              </a>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default About;  