import React, { useEffect, useState } from 'react';
import { Item } from '../types/types';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import './MasterView.css';

interface MasterViewProps {
  onItemSelected: (item: Item) => void;
  selectedItem: Item | null;
}

const MasterView: React.FC<MasterViewProps> = ({ onItemSelected, selectedItem }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data: Item[]) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map((item) => (
        <Card key={item.id} variant="outlined" sx={{
          display: 'flex',
          alignItems: 'center',
          height: '160px', // Fixed height for the card
          margin: '10px',
          border: selectedItem?.id === item.id ? '1px solid purple' : '1px solid #e0e0e0',
          '&:hover': { borderColor: 'purple' },
        }} onClick={() => onItemSelected(item)}>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            <Box sx={{ padding: '0 10px' }}>
              <Typography variant="subtitle1" color="primary" noWrap>
                {item.category}
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  display: 'block', // Block display is necessary for overflow
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: 'calc(100% - 16px)', // Adjust the value 16px to the desired padding
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: 'calc(100% - 16px)', // Adjust the value 16px to the desired padding
                }}
              >
                {item.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="read-only" value={item.rating.rate} readOnly size="small" />
                <Typography variant="body2" color="textSecondary" sx={{ marginLeft: '10px' }}>
                  {`${item.rating.count} reviews`}
                </Typography>
              </Box>
              <Typography variant="h6" color="textPrimary" noWrap>
                {`$${item.price}`}
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default MasterView;
