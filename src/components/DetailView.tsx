// DetailView.tsx
import React from 'react';
import { Item } from '../types/types';

interface DetailViewProps {
  item: Item | null;
}

const DetailView: React.FC<DetailViewProps> = ({ item }) => {
  if (!item) return <div>Select an item from the master view</div>;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} />
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailView;
