import { useState, useEffect } from 'react';  
import { experience } from '../data/experience';  

const Experience = () => {  
  const [experienceData, setExperienceData] = useState([]);  
  
  useEffect(() => {  
    setExperienceData(experience);  
  }, []);  

  return (  
    <section id="experience" className="py-16 bg-gray-50">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="text-center mb-12">  
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>  
          <div className="h-1 w-20 bg-[#900C3F] mx-auto"></div>  
        </div>  
        
        <div className="relative border-l-2 border-[#900C3F] pl-10 ml-6 md:ml-12 space-y-12">  
          {experienceData.map((job) => (  
            <div key={job.id} className="relative">  
              {/* Timeline dot */}  
              <div className="absolute -left-[3.25rem] top-0 h-6 w-6 rounded-full bg-[#900C3F] border-4 border-white shadow"></div>  
              
              <div className="bg-white p-6 rounded-lg shadow transition-all hover:shadow-md">  
                <div className="flex flex-col md:flex-row justify-between mb-4">  
                  <h3 className="text-xl font-bold text-[#900C3F]">{job.position}</h3>  
                  <span className="text-gray-600 flex items-center gap-2">  
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />  
                    </svg>  
                    {job.duration}  
                  </span>  
                </div>  
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">  
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />  
                  </svg>  
                  {job.company}  
                </h4>  
                <p className="mb-4 text-gray-700">{job.description}</p>  
                
                <h5 className="font-medium mb-2 text-gray-800">Key Responsibilities:</h5>  
                <ul className="list-disc pl-5 space-y-1 text-gray-700">  
                  {job.responsibilities.map((item, index) => (  
                    <li key={index}>{item}</li>  
                  ))}  
                </ul>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Experience;  