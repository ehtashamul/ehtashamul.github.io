import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Research from './pages/Research';
import ResearchExperiences from './pages/ResearchExperiences';
import Teaching from './pages/Teaching';
import Personal from './pages/Personal';

type Page = 'home' | 'researchStatement' | 'experiences' | 'teaching' | 'personal';


function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'researchStatement' || hash === 'experiences' || hash === 'teaching' || hash === 'personal') {
    return hash as Page;
  }
  return 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update page when hash changes
  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Update hash when page changes
  useEffect(() => {
    if (currentPage === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = currentPage;
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home goToResearch={() => setCurrentPage('researchStatement')} />;
      case 'researchStatement':
        return <Research />;
      case 'experiences':
        return <ResearchExperiences goToHome={() => setCurrentPage('home')} />;
      case 'teaching':
        return <Teaching />;
      case 'personal':
        return <Personal />;
      default:
        return <Home goToResearch={() => setCurrentPage('researchStatement')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          {/* Hamburger button for mobile */}
          <div className="flex md:hidden items-center">
            <button
              className="p-2 focus:outline-none"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(v => !v)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Collapsible nav for mobile with flip animation */}
          <div
            className={`flex flex-col gap-4 text-base py-2 pl-4 md:hidden bg-white border-b border-gray-200 absolute left-0 right-0 z-50 shadow-lg transition-transform transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top`}
            style={{
              top: '64px',
              transform: mobileMenuOpen ? 'rotateX(0deg)' : 'rotateX(-90deg)',
              opacity: mobileMenuOpen ? 1 : 0,
              pointerEvents: mobileMenuOpen ? 'auto' : 'none',
            }}
          >
            <button
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className={`text-left transition-colors ${currentPage === 'home' ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => { setCurrentPage('researchStatement'); setMobileMenuOpen(false); }}
              className={`text-left transition-colors ${currentPage === 'researchStatement' ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Research Statement
            </button>
            <button
              onClick={() => { setCurrentPage('experiences'); setMobileMenuOpen(false); }}
              className={`text-left transition-colors ${currentPage === 'experiences' ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Research Experiences
            </button>
            <button
              onClick={() => { setCurrentPage('teaching'); setMobileMenuOpen(false); }}
              className={`text-left transition-colors ${currentPage === 'teaching' ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Teaching
            </button>
            <button
              onClick={() => { setCurrentPage('personal'); setMobileMenuOpen(false); }}
              className={`text-left transition-colors ${currentPage === 'personal' ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Personal
            </button>
          </div>
          {/* Horizontal nav for desktop */}
          <div className="hidden md:flex gap-8 text-base">
            <button
              onClick={() => setCurrentPage('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('researchStatement')}
              className={`transition-colors ${
                currentPage === 'researchStatement' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Research Statement
            </button>
            <button
              onClick={() => setCurrentPage('experiences')}
              className={`transition-colors ${
                currentPage === 'experiences' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Research Experiences
            </button>
            <button
              onClick={() => setCurrentPage('teaching')}
              className={`transition-colors ${
                currentPage === 'teaching' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Teaching
            </button>
            <button
              onClick={() => setCurrentPage('personal')}
              className={`transition-colors ${
                currentPage === 'personal' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Personal
            </button>
          </div>
        </div>
      </nav>

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
