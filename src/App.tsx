import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Research from './pages/Research';
import ResearchExperiences from './pages/ResearchExperiences';
import Teaching from './pages/Teaching';
import Personal from './pages/Personal';

type Page = 'home' | 'researchStatement' | 'experiences' | 'teaching' | 'personal';


// Use the URL hash for routing so direct page loads work on static hosts (GitHub Pages).
function getPageFromHash(): Page {
  // Accept hashes like "#", "#/", "#/personal" or "#personal"
  const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (raw === 'researchstatement') return 'researchStatement';
  if (raw === 'experiences') return 'experiences';
  if (raw === 'teaching') return 'teaching';
  if (raw === 'personal') return 'personal';
  return 'home';
}

// Removed duplicate function App() declaration
function App() {
  // Set dark mode as default on initial load
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains('dark')) {
      html.classList.add('dark');
    }
  }, []);
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update page when the hash changes (user presses back/forward or opens a link with #/...)
  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Update the URL hash when page changes. We use hashes like "#/researchStatement".
  useEffect(() => {
    let path = '/';
    if (currentPage !== 'home') {
      path = '/' + currentPage;
    }
    // This will result in URLs like `/#/personal` — safe on static hosts.
    window.location.hash = path;
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

  // Dark mode toggle handler
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Hamburger button for mobile */}
          <div className="flex md:hidden items-center">
            <button
              className="p-2 focus:outline-none"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(v => !v)}
            >
              <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Dark mode toggle button */}
          <button
            className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            🌓
          </button>
          {/* Collapsible nav for mobile with flip animation */}
          <div
            className={`flex flex-col gap-4 text-base py-2 pl-4 md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 absolute left-0 right-0 z-50 shadow-lg transition-transform transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top`}
            style={{
              top: '64px',
              transform: mobileMenuOpen ? 'rotateX(0deg)' : 'rotateX(-90deg)',
              opacity: mobileMenuOpen ? 1 : 0,
              pointerEvents: mobileMenuOpen ? 'auto' : 'none',
            }}
          >
            <button
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); window.location.hash = '/'; }}
              className={`text-left transition-colors ${currentPage === 'home' ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Home
            </button>
            <button
              onClick={() => { setCurrentPage('researchStatement'); setMobileMenuOpen(false); window.location.hash = '/researchStatement'; }}
              className={`text-left transition-colors ${currentPage === 'researchStatement' ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Research Statement
            </button>
            <button
              onClick={() => { setCurrentPage('experiences'); setMobileMenuOpen(false); window.location.hash = '/experiences'; }}
              className={`text-left transition-colors ${currentPage === 'experiences' ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Research Experiences
            </button>
            <button
              onClick={() => { setCurrentPage('teaching'); setMobileMenuOpen(false); window.location.hash = '/teaching'; }}
              className={`text-left transition-colors ${currentPage === 'teaching' ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Teaching
            </button>
            <button
              onClick={() => { setCurrentPage('personal'); setMobileMenuOpen(false); window.location.hash = '/personal'; }}
              className={`text-left transition-colors ${currentPage === 'personal' ? 'text-gray-900 dark:text-white font-bold' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Personal
            </button>
          </div>
          {/* Horizontal nav for desktop */}
          <div className="hidden md:flex gap-8 text-base">
            <button
              onClick={() => setCurrentPage('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('researchStatement')}
              className={`transition-colors ${
                currentPage === 'researchStatement' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Research Statement
            </button>
            <button
              onClick={() => setCurrentPage('experiences')}
              className={`transition-colors ${
                currentPage === 'experiences' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Research Experiences
            </button>
            <button
              onClick={() => setCurrentPage('teaching')}
              className={`transition-colors ${
                currentPage === 'teaching' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Teaching
            </button>
            <button
              onClick={() => setCurrentPage('personal')}
              className={`transition-colors ${
                currentPage === 'personal' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
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
