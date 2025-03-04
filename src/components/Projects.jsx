import { useState, useEffect } from 'react';  
import { projects } from '../data/projects';  

// Project Detail Modal component  
const ProjectDetailModal = ({ project, isOpen, onClose }) => {  
  if (!isOpen) return null;  
  
  return (  
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">  
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">  
        {/* Modal Header */}  
        <div className="relative p-6 border-b border-gray-200">  
          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>  
          <button   
            onClick={onClose}  
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 cursor-pointer"  
          >  
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />  
            </svg>  
          </button>  
        </div>  
        
        {/* Modal Body */}  
        <div className="p-6">  
          {/* Project Image */}  
          <div className="mb-6 rounded-lg overflow-hidden">  
            <img   
              src={project.image}   
              alt={project.title}  
              className="w-full h-auto"  
            />  
          </div>  
          
          {/* Project Description */}  
          <div className="mb-6">  
            <h4 className="text-lg font-semibold text-[#900C3F] mb-2">Project Overview</h4>  
            <p className="text-gray-700 mb-3">{project.description}</p>  
            
            {/* Long Description */}  
            {project.longDescription && (  
              <p className="text-gray-600">{project.longDescription}</p>  
            )}  
          </div>  
          
          {/* Role Information */}  
          {project.role && (  
            <div className="mb-6">  
              <h4 className="text-lg font-semibold text-[#900C3F] mb-2">My Role</h4>  
              <p className="text-gray-600">{project.role}</p>  
            </div>  
          )}  
          
          {/* Technologies */}  
          <div className="mb-6">  
            <h4 className="text-lg font-semibold text-[#900C3F] mb-2">Technologies Used</h4>  
            <div className="flex flex-wrap gap-2">  
              {project.technologies.map((tech, index) => (  
                <span   
                  key={index}  
                  className="px-3 py-1 bg-[#FFF0F5] text-[#900C3F] text-sm font-medium rounded-full"  
                >  
                  {tech}  
                </span>  
              ))}  
            </div>  
          </div>  
          
          {/* Features */}  
          {project.features && project.features.length > 0 && (  
            <div className="mb-6">  
              <h4 className="text-lg font-semibold text-[#900C3F] mb-2">Key Features</h4>  
              <ul className="list-disc pl-5 space-y-1 text-gray-600">  
                {project.features.map((feature, index) => (  
                  <li key={index}>{feature}</li>  
                ))}  
              </ul>  
            </div>  
          )}  
          
          {/* Challenges */}  
          {project.challenges && (  
            <div className="mb-6">  
              <h4 className="text-lg font-semibold text-[#900C3F] mb-2">Challenges & Solutions</h4>  
              <p className="text-gray-600">{project.challenges}</p>  
            </div>  
          )}  
        </div>  
        
        {/* Modal Footer */}  
        <div className="p-6 border-t border-gray-200 flex flex-wrap gap-4">  
          <a   
            href={project.demoUrl}   
            target="_blank"   
            rel="noopener noreferrer"  
            className="px-6 py-3 bg-[#900C3F] text-white font-medium rounded-lg shadow-md hover:bg-[#7A0A35] transition duration-200 cursor-pointer"  
          >  
            View Live Demo  
          </a>  
          {/* Source Code button - disabled */}  
          <span className="px-6 py-3 border border-gray-300 text-gray-400 font-medium rounded-lg bg-gray-100 cursor-not-allowed"   
                title="Source code is private">  
            Source Code Not Available  
          </span>  
        </div>  
      </div>  
    </div>  
  );  
};  

// Project Card component  
const ProjectCard = ({ project, onClick }) => {  
  return (  
    <div   
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"  
      onClick={onClick}  
    >  
      {/* Image */}  
      <div className="h-48 bg-gray-200 relative">  
        <img   
          src={project.image}   
          alt={project.title}  
          className="w-full h-full object-cover"  
        />  
      </div>  
      
      {/* Content */}  
      <div className="p-6">  
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>  
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>  
        
        {/* Technologies */}  
        <div className="flex flex-wrap gap-2 mb-6">  
          {project.technologies.slice(0, 3).map((tech, index) => (  
            <span   
              key={index}  
              className="px-3 py-1 bg-[#FFF0F5] text-[#900C3F] text-xs font-medium rounded-full"  
            >  
              {tech}  
            </span>  
          ))}  
          {project.technologies.length > 3 && (  
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">  
              +{project.technologies.length - 3} more  
            </span>  
          )}  
        </div>  
        
        {/* Actions */}  
        <div className="flex gap-3">  
          <button  
            className="flex-1 text-center px-4 py-2 bg-[#900C3F] text-white font-medium rounded hover:bg-[#7A0A35] transition-colors cursor-pointer"  
            onClick={(e) => {  
              e.stopPropagation(); // Prevent card click  
              window.open(project.demoUrl, '_blank', 'noopener,noreferrer');  
            }}  
          >  
            Live Demo  
          </button>  
          {/* Source Code button - disabled */}  
          <span className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-400 bg-gray-100 font-medium rounded cursor-not-allowed"   
                title="Source code is private">  
            Source Code  
          </span>  
        </div>  
      </div>  
    </div>  
  );  
};  

const Projects = () => {  
  const [projectsData, setProjectsData] = useState([]);  
  const [filter, setFilter] = useState('all');  
  const [selectedProject, setSelectedProject] = useState(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);  
  
  useEffect(() => {  
    setProjectsData(projects);  
  }, []);  
  
  const filteredProjects = filter === 'all'   
    ? projectsData   
    : projectsData.filter(project => project.category === filter);  
    
  const handleProjectClick = (project) => {  
    setSelectedProject(project);  
    setIsModalOpen(true);  
    // Prevent scrolling when modal is open  
    document.body.style.overflow = 'hidden';  
  };  
  
  const handleCloseModal = () => {  
    setIsModalOpen(false);  
    setSelectedProject(null);  
    // Re-enable scrolling  
    document.body.style.overflow = 'auto';  
  };  

  return (  
    <section id="projects" className="py-16 bg-white">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="text-center mb-12">  
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>  
          <div className="h-1 w-20 bg-[#900C3F] mx-auto"></div>  
        </div>  
        
        {/* Filters */}  
        <div className="flex flex-wrap justify-center gap-3 mb-10">  
          <button   
            onClick={() => setFilter('all')}  
            className={`px-4 py-2 rounded-md cursor-pointer ${filter === 'all' ? 'bg-[#900C3F] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}  
          >  
            All  
          </button>  
          <button   
            onClick={() => setFilter('zoho')}  
            className={`px-4 py-2 rounded-md cursor-pointer ${filter === 'zoho' ? 'bg-[#900C3F] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}  
          >  
            Zoho Extensions  
          </button>  
          <button   
            onClick={() => setFilter('web')}  
            className={`px-4 py-2 rounded-md cursor-pointer ${filter === 'web' ? 'bg-[#900C3F] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}  
          >  
            Web Development  
          </button>  
          <button   
            onClick={() => setFilter('fullstack')}  
            className={`px-4 py-2 rounded-md cursor-pointer ${filter === 'fullstack' ? 'bg-[#900C3F] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}  
          >  
            Full Stack  
          </button>  
        </div>  
        
        {/* Projects Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
          {filteredProjects.map((project) => (  
            <ProjectCard   
              key={project.id}   
              project={project}  
              onClick={() => handleProjectClick(project)}  
            />  
          ))}  
        </div>  
        
        {/* Project Detail Modal */}  
        {selectedProject && (  
          <ProjectDetailModal  
            project={selectedProject}  
            isOpen={isModalOpen}  
            onClose={handleCloseModal}  
          />  
        )}  
      </div>  
    </section>  
  );  
};  

export default Projects;  