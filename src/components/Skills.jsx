import { useState, useEffect } from 'react';  
import { skills } from '../data/skills';  

// Skill Card component  
const SkillCard = ({ skill }) => {  
  return (  
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">  
      <div className="flex items-center gap-3 mb-3">  
        <span className="text-2xl bg-gray-50 h-10 w-10 flex items-center justify-center rounded-md">{skill.icon}</span>  
        <h4 className="font-medium text-gray-800">{skill.name}</h4>  
      </div>  
      
      <div className="relative pt-1">  
        <div className="flex items-center justify-between mb-1">  
          <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#900C3F] bg-pink-50">  
            {skill.level < 50 ? 'Basic' : skill.level < 75 ? 'Intermediate' : 'Advanced'}  
          </div>  
          <div className="text-sm text-gray-600 font-medium">{skill.level}%</div>  
        </div>  
        <div className="w-full bg-gray-100 rounded-full h-1.5">  
          <div   
            className="bg-[#900C3F] h-1.5 rounded-full transition-all duration-500 ease-out"   
            style={{ width: `${skill.level}%` }}  
          ></div>  
        </div>  
      </div>  
    </div>  
  );  
};  

const Skills = () => {  
  const [skillsData, setSkillsData] = useState([]);  
  const [categories, setCategories] = useState([]);  
  const [activeCategory, setActiveCategory] = useState('all');  
  
  useEffect(() => {  
    // Get unique categories  
    const uniqueCategories = [...new Set(skills.map(skill => skill.category))];  
    setCategories(['all', ...uniqueCategories]);  
    
    setSkillsData(skills);  
  }, []);  
  
  const filteredSkills = activeCategory === 'all'   
    ? skillsData   
    : skillsData.filter(skill => skill.category === activeCategory);  
    
  const getCategoryIcon = (category) => {  
    switch(category) {  
      case 'frontend': return '🎨';  
      case 'backend': return '⚙️';  
      case 'database': return '💾';  
      case 'api': return '🔌';  
      case 'nocode': return '📱';  
      case 'all': return '🔍';  
      default: return '⭐';  
    }  
  };  

  return (  
    <section id="skills" className="py-16 bg-gray-50">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="text-center mb-10">  
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Expertise</h2>  
          <div className="h-1 w-24 bg-[#900C3F] mx-auto mb-4"></div>  
          <p className="text-gray-600 max-w-2xl mx-auto">A showcase of my technical skills and proficiency levels across various development domains.</p>  
        </div>  
        
        {/* Category Tabs */}  
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">  
          {categories.map((category, index) => (  
            <button  
              key={index}  
              onClick={() => setActiveCategory(category)}  
              className={`px-5 py-2.5 rounded-md capitalize text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer  
                ${activeCategory === category   
                  ? 'bg-[#900C3F] text-white shadow-sm'   
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'}`}  
            >  
              <span>{getCategoryIcon(category)}</span>  
              {category.charAt(0).toUpperCase() + category.slice(1)}  
            </button>  
          ))}  
        </div>  
        
        {/* Skills Grid */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">  
          {filteredSkills.map((skill) => (  
            <SkillCard key={skill.id} skill={skill} />  
          ))}  
        </div>  
        
        {filteredSkills.length === 0 && (  
          <div className="text-center py-10">  
            <p className="text-gray-500">No skills found in this category.</p>  
          </div>  
        )}  
      </div>  
    </section>  
  );  
};  

export default Skills;  