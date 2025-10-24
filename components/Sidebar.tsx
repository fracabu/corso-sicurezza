
import React from 'react';

type View = 'test' | 'modulo1' | 'modulo2' | 'modulo3';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, isOpen, setIsOpen }) => {
  const navItems = [
    { id: 'test', label: 'Test Finale', icon: 'fa-clipboard-check' },
    { id: 'modulo1', label: 'Modulo 1: Rischio e Organizzazione', icon: 'fa-shield-halved' },
    { id: 'modulo2', label: 'Modulo 2: Soggetti della Sicurezza', icon: 'fa-users' },
    { id: 'modulo3', label: 'Modulo 3: Protezione e Formazione', icon: 'fa-hard-hat' },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 text-2xl font-bold border-b border-gray-700 flex items-center">
          <i className="fas fa-graduation-cap mr-3 text-cyan-400"></i>
          <span>Sicurezza Lavoro</span>
        </div>
        <nav className="flex-1 mt-6">
          <ul>
            {navItems.map(item => (
              <li key={item.id} className="px-4 mb-2">
                <button
                  onClick={() => setCurrentView(item.id as View)}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                    currentView === item.id
                      ? 'bg-cyan-500 text-white'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <i className={`fas ${item.icon} w-6 mr-3`}></i>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700 text-xs text-gray-400">
          <p>&copy; 2024 Formazione Sicurezza</p>
          <p>Basato su D.Lgs. 81/2008</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
