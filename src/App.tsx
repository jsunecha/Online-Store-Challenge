import React, { useState, useEffect } from 'react';
import MasterView from './components/MasterView';
import DetailView from './components/DetailView';
import { Item } from './types/types';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      {!isMobile && (
        <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
          <div style={{ width: '30%', overflowY: 'auto' }}>
            <MasterView onItemSelected={setSelectedItem} selectedItem={selectedItem} />
          </div>
          <div style={{ width: '70%', overflowY: 'auto' }}>
            <DetailView 
              item={selectedItem} 
              onBack={() => {}} // Dummy function for desktop view
              isMobile={false}  // False for desktop view
            />
          </div>
        </div>
      )}
      {isMobile && (
        selectedItem ? (
          <DetailView item={selectedItem} onBack={() => setSelectedItem(null)} isMobile={isMobile} />
        ) : (
          <MasterView onItemSelected={setSelectedItem} selectedItem={selectedItem} />
        )
      )}
    </div>
  );
};

export default App;
