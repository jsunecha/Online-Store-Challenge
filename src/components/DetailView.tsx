import React from 'react';
import { Item } from '../types/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeInDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  animation: ${fadeIn} 1s ease forwards;
`;

interface DetailViewProps {
  item: Item | null;
  onBack: () => void;  // Function to handle back navigation
  isMobile: boolean;   // Boolean to indicate if it's a mobile view
}

const DetailView: React.FC<DetailViewProps> = ({ item, onBack, isMobile }) => {
  if (!item) {
    // Display a message if no item is selected
    return <div style={{ padding: '10px', textAlign: 'center' }}>Select an item to see details</div>;
  }

  return (
    <FadeInDiv>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%' }}>
      {/* Conditionally render the back button for mobile view */}
      {isMobile && (
        <IconButton onClick={onBack} style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
          <ArrowBackIcon />
        </IconButton>
      )}
      {/* Rest of the detail view layout */}
      {/* Image container */}
      <div style={{ 
        width: '100%', 
        height: '300px', 
        marginBottom: '20px', 
        backgroundColor: '#f8f9fa', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <img src={item.image} alt={item.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
      </div>
      {/* Product details card */}
      <Card variant="outlined" style={{ 
        width: '100%', 
        borderWidth: 0, 
        boxShadow: 'none' 
      }}>
        <CardContent style={{ textAlign: 'center' }}>
          {/* Product category */}
          <Typography variant="subtitle1" color="primary" style={{ marginBottom: '10px' }}>
            {item.category}
          </Typography>
          {/* Product title */}
          <Typography variant="h5" component="h2" style={{ marginBottom: '10px' }}>
            {item.title}
          </Typography>
          {/* Product description */}
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '20px' }}>
            {item.description}
          </Typography>
          {/* Rating and review count */}
          <Box style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
            <Rating name="read-only" value={item.rating.rate} readOnly />
            <Typography component="legend" style={{ marginLeft: '10px' }}>{`${item.rating.count} reviews`}</Typography>
          </Box>
          {/* Product price */}
          <Typography variant="h6" color="textPrimary">
            {`$${item.price}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
    </FadeInDiv>
  );
};

export default DetailView;
