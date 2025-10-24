
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TestFinale from './components/TestFinale';
import Modulo1 from './components/Modulo1';
import Modulo2 from './components/Modulo2';
import Modulo3 from './components/Modulo3';

type View = 'test' | 'modulo1' | 'modulo2' | 'modulo3';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('test');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'test':
        return <TestFinale />;
      case 'modulo1':
        return <Modulo1 />;
      case 'modulo2':
        return <Modulo2 />;
      case 'modulo3':
        return <Modulo3 />;
      default:
        return <TestFinale />;
    }
  };
  
  const changeView = (view: View) => {
    setCurrentView(view);
    setSidebarOpen(false); // Close sidebar on selection in mobile view
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={changeView} isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      <main className="flex-1 transition-all duration-300 md:ml-64">
        <div className="md:hidden p-4 bg-white shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Formazione Sicurezza</h1>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-600">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        <div className="p-4 md:p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
