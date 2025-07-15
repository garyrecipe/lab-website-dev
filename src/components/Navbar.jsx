import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: '首頁' },
    { path: '/professor', label: '指導教授' },
    { path: '/research', label: '研究方向' },
    { path: '/members', label: '研究團隊' },
    { path: '/equipment', label: '實驗設備' },
    { path: '/publications', label: '發表論文' },
    { path: '/activities', label: '活動照片' },
    { path: '/contact', label: '聯絡我們' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent"
              onClick={handleLinkClick}
            >
              超材料與超元件實驗室
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">開啟主選單</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}; 