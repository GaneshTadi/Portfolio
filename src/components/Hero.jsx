'use client'  

import { useState } from 'react'  

export default function HeroSection() {  
  return (  
    <div className="bg-white">  
      <div className="relative isolate px-6 pt-6 lg:px-8">  
        <div  
          aria-hidden="true"  
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"  
        >  
          <div  
            style={{  
              clipPath:  
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',  
            }}  
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#FFF0F5] to-[#900C3F] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"  
          />  
        </div>  
        
        <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-32">  
          <div className="text-center">  
            <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl md:text-6xl">  
              Hi, I'm <span className="text-[#900C3F]">Tadi Ganesh</span>  
            </h1>  
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 sm:text-3xl">  
              Full Stack Developer & Zoho Integration Specialist  
            </h2>  
            <p className="mt-8 text-lg text-pretty text-gray-600 max-w-3xl mx-auto">  
              Creating seamless web applications with expertise in JavaScript, Node.js, and Zoho product integrations.  
              Specializing in responsive design and custom extensions.  
            </p>  
            <div className="mt-10 flex items-center justify-center gap-x-6">  
              <a  
                href="#contact"  
                className="rounded-lg bg-[#900C3F] px-6 py-3 text-base font-medium text-white shadow-md hover:bg-[#7A0A35] transition duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#900C3F]"  
              >  
                Hire Me  
              </a>  
              <a   
                href="/Ganesh-Full-Stack-developer.pdf"  
                target="_blank"  
                rel="noopener noreferrer"  
                download="Ganesh-Full-Stack-developer.pdf"  
                className="rounded-lg px-6 py-3 text-base font-medium text-[#900C3F] border border-[#900C3F] hover:bg-[#FFF0F5] transition duration-200 cursor-pointer"  
              >  
                Download Resume  
              </a>  
            </div>  
          </div>  
        </div>  
        
        <div  
          aria-hidden="true"  
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"  
        >  
          <div  
            style={{  
              clipPath:  
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',  
            }}  
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#FFF0F5] to-[#900C3F] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"  
          />  
        </div>  
      </div>  
    </div>  
  )  
}  