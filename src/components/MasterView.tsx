// MasterView.tsx
import React, { useEffect, useState } from 'react';
import { Item } from '../types/types';

interface MasterViewProps {
  onItemSelected: (item: Item) => void;
}

const MasterView: React.FC<MasterViewProps> = ({ onItemSelected }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => onItemSelected(item)}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MasterView;
