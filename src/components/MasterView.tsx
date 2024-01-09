import React, { useEffect, useState } from 'react';
import { Item } from '../types/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface MasterViewProps {
  onItemSelected: (item: Item) => void;
}

const MasterView: React.FC<MasterViewProps> = ({ onItemSelected }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} onClick={() => onItemSelected(item)} style={{ margin: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography color="textSecondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MasterView;
