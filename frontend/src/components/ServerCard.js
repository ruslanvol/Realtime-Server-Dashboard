import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Box, CardActions } from '@material-ui/core';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'; 

const ServerCard = ({ server, onToggle }) => {
  const isActive = server.status === 'active';

  return (
    <Card elevation={3} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
          {server.name}
        </Typography>
        
        <Typography color="textSecondary" gutterBottom>
          Company: {server.companyName}
        </Typography>
        
        <Typography variant="body2" component="p" style={{ marginBottom: '10px' }}>
          IP: {server.ip_address}
        </Typography>

        <Box mt={2}>
          <Chip 
            label={isActive ? "Online" : "Offline"} 
            style={{ 
              backgroundColor: isActive ? '#4caf50' : '#e0e0e0', 
              color: isActive ? 'white' : 'rgba(0, 0, 0, 0.87)',
              fontWeight: 'bold'
            }}
          />
        </Box>
        
       <Box mt={1}>
           <Typography variant="caption" display="block" color="textSecondary">
             Created: {new Date(server.created_at).toLocaleDateString('en-GB')}
           </Typography>
        </Box>
      </CardContent>

      <CardActions style={{ padding: '16px' }}>
        <Button 
          variant="contained" 
          color={isActive ? "secondary" : "primary"} 
          fullWidth
          startIcon={<SwapHorizIcon />} 
          onClick={() => onToggle(server.id, server.status)}
          style={{ textTransform: 'none', fontWeight: 'bold' }}
        >
          {isActive ? "Deactivate" : "Activate"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServerCard;