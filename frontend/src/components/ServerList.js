import React from 'react';
import { Grid } from '@material-ui/core';
import ServerCard from './ServerCard';

const ServerList = ({ servers, onToggle }) => {
  return (
    <Grid container spacing={3}>
      {servers.map(server => (
        <Grid item xs={12} sm={6} md={4} key={server.id}>
          <ServerCard server={server} onToggle={onToggle} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServerList;