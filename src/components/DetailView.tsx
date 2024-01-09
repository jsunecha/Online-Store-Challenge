// DetailView.tsx
import React from 'react';
import { Item } from '../types/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface DetailViewProps {
  item: Item | null;
}

const DetailView: React.FC<DetailViewProps> = ({ item }) => {
  if (!item) return <div>Select an item to see details</div>;

  return (
    <Card style={{ margin: '10px' }}>
      <CardContent>
        <Typography variant="h4" component="h2">
          {item.title}
        </Typography>
        <Typography color="textSecondary">
          {item.category}
        </Typography>
        <Typography variant="body2" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <img src={item.image} alt={item.title} style={{ maxWidth: '100%', height: 'auto' }} />
    </Card>
  );
};

export default DetailView;
