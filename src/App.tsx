// App.tsx
import React, { useState } from 'react';
import MasterView from './components/MasterView';
import DetailView from './components/DetailView';
import { Item } from './types/types';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '50%' }}>
        <MasterView onItemSelected={setSelectedItem} />
      </div>
      <div style={{ width: '50%' }}>
        <DetailView item={selectedItem} />
      </div>
    </div>
  );
};

export default App;
