import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, FormControlLabel, Checkbox, Button, Box } from '@material-ui/core';
import ServerList from './components/ServerList';

function App() {
  const [servers, setServers] = useState([]);
  const [showOnlyActive, setShowOnlyActive] = useState(false);

  useEffect(() => {
    loadServers();
  }, []);

  const loadServers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/servers');
      setServers(res.data);
    } catch (err) {
      console.error("Помилка завантаження даних:", err);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'active' ? 'inactive' : 'active';
    try {
      const res = await axios.post('http://localhost:5000/api/status/server/api', {
        id: id,
        status: nextStatus
      });
      
      if (res.status === 200) {
        loadServers();
      }
    } catch (err) {
      console.error("Помилка оновлення статусу:", err);
      alert("Не вдалося змінити статус сервера");
    }
  };

  
  const sortLastCreated = () => {
    const sorted = [...servers].sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    setServers(sorted);
  };

 
  const filteredServers = showOnlyActive 
    ? servers.filter(s => s.status === 'active') 
    : servers;

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Server Management
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} bgcolor="#f5f5f5" p={2} borderRadius={8}>
        
          <Button 
            variant="contained" 
            color="primary" 
            onClick={sortLastCreated}
          >
            Sort by Newest
          </Button>
          
          
          <FormControlLabel
            control={
              <Checkbox 
                checked={showOnlyActive} 
                onChange={(e) => setShowOnlyActive(e.target.checked)} 
                color="primary"
              />
            }
            label="Show Only Active"
          />
        </Box>

    
        <ServerList servers={filteredServers} onToggle={handleToggleStatus} />
      </Box>
    </Container>
  );
}

export default App;