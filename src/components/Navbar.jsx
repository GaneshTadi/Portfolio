import { useState, useEffect } from 'react';  

const Navbar = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const [activeSection, setActiveSection] = useState('home');  
  const [scrolled, setScrolled] = useState(false);  
  
  // Toggle mobile menu  
  const toggleMenu = () => {  
    setIsMenuOpen(!isMenuOpen);  
  };  
  
  // Track scroll position and update active section  
  useEffect(() => {  
    const handleScroll = () => {  
      // Set navbar background when scrolled  
      if (window.scrollY > 50) {  
        setScrolled(true);  
      } else {  
        setScrolled(false);  
      }  
      
      // Find which section is currently visible in the viewport  
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];  
      const current = sections.find(section => {  
        const element = document.getElementById(section);  
        if (element) {  
          const rect = element.getBoundingClientRect();  
          // Consider a section active if it's in the top half of the viewport  
          return rect.top <= 150 && rect.bottom >= 150;  
        }  
        return false;  
      }) || 'home';  
      
      setActiveSection(current);  
    };  
    
    window.addEventListener('scroll', handleScroll);  
    
    // Initial check on mount  
    handleScroll();  
    
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, []);  
  
  // Handle menu item click  
  const handleMenuClick = (sectionId) => {  
    setActiveSection(sectionId);  
    setIsMenuOpen(false);  
  };  
  
  // Navigation items  
  const navItems = [  
    { id: 'home', label: 'Home' },  
    { id: 'about', label: 'About' },  
    { id: 'skills', label: 'Skills' },  
    { id: 'experience', label: 'Experience' },  
    { id: 'projects', label: 'Projects' },  
    { id: 'contact', label: 'Contact' }  
  ];  

  return (  
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <div className="flex justify-between items-center">  
          {/* Logo */}  
          <a href="#home" className="text-xl font-bold text-[#900C3F]">  
            Tadi Ganesh  
          </a>  
          
          {/* Desktop Navigation */}  
          <nav className="hidden md:flex space-x-8">  
            {navItems.map(item => (  
              <a  
                key={item.id}  
                href={`#${item.id}`}  
                onClick={() => handleMenuClick(item.id)}  
                className={`font-medium transition-colors ${  
                  activeSection === item.id   
                    ? 'text-[#900C3F] font-bold'   
                    : 'text-gray-700 hover:text-[#900C3F]'  
                }`}  
              >  
                {item.label}  
              </a>  
            ))}  
          </nav>  
          
          {/* Mobile Menu Button */}  
          <button   
            className="md:hidden text-gray-700 hover:text-[#900C3F] focus:outline-none"  
            onClick={toggleMenu}  
            aria-label="Toggle menu"  
          >  
            <svg   
              xmlns="http://www.w3.org/2000/svg"   
              className="h-6 w-6"   
              fill="none"   
              viewBox="0 0 24 24"   
              stroke="currentColor"  
            >  
              {isMenuOpen ? (  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />  
              ) : (  
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />  
              )}  
            </svg>  
          </button>  
        </div>  
        
        {/* Mobile Menu */}  
        {isMenuOpen && (  
          <nav className="md:hidden mt-4 py-3 bg-white rounded-lg shadow-xl">  
            <div className="flex flex-col space-y-3 px-4">  
              {navItems.map(item => (  
                <a  
                  key={item.id}  
                  href={`#${item.id}`}  
                  onClick={() => handleMenuClick(item.id)}  
                  className={`font-medium py-2 transition-colors ${  
                    activeSection === item.id   
                      ? 'text-[#900C3F] font-bold'   
                      : 'text-gray-700 hover:text-[#900C3F]'  
                  }`}  
                >  
                  {item.label}  
                </a>  
              ))}  
            </div>  
          </nav>  
        )}  
      </div>  
    </header>  
  );  
};  

export default Navbar;  