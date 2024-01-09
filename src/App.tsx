import React, { useState } from 'react';
import MasterView from './components/MasterView';
import DetailView from './components/DetailView';
import { Item } from './types/types';

const App = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div>
      <MasterView onItemSelected={setSelectedItem} />
      <DetailView item={selectedItem} />
    </div>
  );
};

export default App;